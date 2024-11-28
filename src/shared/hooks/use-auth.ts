// 참고용 코드

// import { useEffect, useState } from 'react'
// import { useSnackbar } from 'notistack'

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const { enqueueSnackbar } = useSnackbar()

//   useEffect(() => {
//     const session = localStorage.getItem('starlike-access-token')

//     if (session) {
//       setIsAuthenticated(true)
//     }
//   }, [])

//   const checkAuth = () => {
//     const session = localStorage.getItem('starlike-access-token')
//     if (!session) {
//       enqueueSnackbar('로그인이 필요합니다.', { variant: 'error' })

//       return false
//     }

//     return true
//   }

//   return { isAuthenticated, checkAuth }
// }

// export default useAuth
