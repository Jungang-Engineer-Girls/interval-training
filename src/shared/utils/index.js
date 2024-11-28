// 240820 NOTE : 예시 코드 입니다. 실제로 사용할 때는 코드를 변경해주세요.

import browser from 'browser-detect'

import CONSTNATS from '@/src/styles/_constants.scss'

const isChrome = () => {
  const browserInfo = browser()

  return browserInfo.name === 'chrome' ? true : false
}

const isMobile = () =>
  window.outerWidth <= Number(CONSTNATS.mobileWidth.slice(0, -2))

const scrollTo = ref => {
  window.scrollTo({ top: ref?.current?.offsetTop || 0, behavior: 'smooth' })
}

const makeDummyForSwiper = img => Array.from({ length: 5 }, () => img)

const reduceAddress = address =>
  `${address.slice(0, 8)}****${address.slice(-8)}`

const copyToClipboard = text => {
  navigator.clipboard.writeText(text)
}

const disableBackgroundScroll = () => {
  const scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
}

const enableBackgroundScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  window.scrollTo(0, parseInt(scrollY || 0) * -1)
}

export {
  copyToClipboard,
  disableBackgroundScroll,
  enableBackgroundScroll,
  isChrome,
  isMobile,
  makeDummyForSwiper,
  reduceAddress,
  scrollTo,
}
