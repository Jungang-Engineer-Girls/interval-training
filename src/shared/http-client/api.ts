import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

import errorMessage from '@/shared/http-client/exceptions/messages'
import { type ApiErrorScheme } from '@/shared/http-client/exceptions/type'

import ApiException from './exceptions/api-exception'
import CustomException from './exceptions/custom-exception'

// TODO: BASE_URL 설정
const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },

  withCredentials: true,
})

// Request interceptor
const interceptorRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  if (typeof window === 'undefined') return config

  return config
}

instance.interceptors.request.use(interceptorRequestFulfilled)

// Response interceptor
const interceptorResponseFulfilled = (res: AxiosResponse) => {
  if (res.status >= 200 && res.status < 300) {
    return res.data
  }

  return Promise.reject(res.data)
}

// Response interceptor
const interceptorResponseRejected = (error: AxiosError<ApiErrorScheme>) => {
  if (error.response?.data?.response_messages) {
    return Promise.reject(
      new ApiException(error.response.data, error.response.status),
    )
  }
  if (error.message.startsWith('timeout')) {
    return Promise.reject(
      new CustomException(errorMessage.TIMEOUT, 'NETWORK_TIMEOUT'),
    )
  }

  return Promise.reject(
    new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'),
  )
}

instance.interceptors.response.use(
  interceptorResponseFulfilled,
  interceptorResponseRejected,
)

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, T>(...args)
}

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, T>(...args)
}

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, T>(...args)
}

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, T>(...args)
}

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, T>(...args)
}

export const END_POINTS = {
  eventInfo: {
    main: '/event/info/main',
    detail: '/event/info/detail',
    list: '/event/list',
  },
  generalParticipationInfo: {
    shop: '/shop',
    ticket: '/shop/ticket/typeList',
    ticketDetail: '/shop/ticket/detail',
    cosplay: '/shop/cosplay',
  },
  notice: {
    eventList: '/event/list',
    category: '/notice/category',
    list: '/notice',
    detail: '/notice',
  },
  inquiry: {
    category: '/inquiry/category',
    list: '/inquiry',
    detail: '/inquiry',
    create: '/inquiry',
    update: '/inquiry',
    delete: '/inquiry',
  },
  faq: {
    category: '/faq/category',
    list: '/faq',
  },
  circleBooth: {
    info: '/booth/application/infoSet',
  },
  corporate: {
    create: '/companyBoothInquiry',
  },
  refund: {
    check: '/pay/refund/check',
    refund: '/pay/refund',
  },
}
