// import { useMutation } from '@tanstack/react-query'

// import {
//   changePassword,
//   checkCertCode,
//   checkEmailCert,
//   nicknameDuplicateCheck,
//   type PasswordResetRequest,
//   resetPassword,
//   sendkeyCodePasswordChange,
//   signIn,
//   type SignInRequest,
//   signOut,
//   type SignOutRequest,
//   signUp,
//   type SignUpRequest,
//   socialLogin,
//   type SocialLoginRequest,
//   updateMarketingTermsAgree,
// } from '~/features/auth/apis/auth'

// export const useSignUp = () => {
//   return useMutation({
//     mutationFn: (signUpInfo: SignUpRequest) => signUp(signUpInfo),
//   })
// }

// export const useSignIn = () => {
//   return useMutation({
//     mutationFn: (signInInfo: SignInRequest) => signIn(signInInfo),
//   })
// }

// export const useSignOut = () => {
//   return useMutation({
//     mutationFn: (signOutInfo: SignOutRequest) => signOut(signOutInfo),
//   })
// }

// export const useSocialLogin = () => {
//   return useMutation({
//     mutationFn: (socialLoginInfo: SocialLoginRequest) =>
//       socialLogin(socialLoginInfo),
//   })
// }

// export const useCheckEmailCert = () => {
//   return useMutation({
//     mutationFn: (email: string) => checkEmailCert(email),
//   })
// }

// export const useCheckEmailKeyCertCode = () => {
//   return useMutation({
//     mutationFn: ({ key, code }: { key: string; code: string }) =>
//       checkCertCode({ key, code }),
//   })
// }

// export const useNicknameDuplicateCheck = () => {
//   return useMutation({
//     mutationFn: (nickname: string) => nicknameDuplicateCheck(nickname),
//   })
// }

// export const usePasswordChange = () => {
//   return useMutation({
//     mutationFn: (email: string) => changePassword(email),
//   })
// }

// export const useSendKeyCodePasswordChange = () => {
//   return useMutation({
//     mutationFn: ({ key, code }: { key: string; code: string }) =>
//       sendkeyCodePasswordChange({ key, code }),
//   })
// }

// export const useResetPassword = () => {
//   return useMutation({
//     mutationFn: ({ key, certCode, new_password }: PasswordResetRequest) =>
//       resetPassword({
//         key,
//         certCode,
//         new_password,
//       }),
//   })
// }

// export const useMarketingTermsAgree = () => {
//   return useMutation({
//     mutationFn: (agreeYN: string) => {
//       return updateMarketingTermsAgree(agreeYN)
//     },
//   })
// }
