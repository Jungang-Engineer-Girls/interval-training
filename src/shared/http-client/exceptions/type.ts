type Session = {
  accessToken: string
  refreshToken: string
}

export interface AuthApiResponse extends ApiResponse {
  data: {
    session: Session
  }
}

export interface ApiResponse {
  error: {
    code: number
    message: string
  }
}

export interface ApiErrorScheme {
  response_messages: string
}
