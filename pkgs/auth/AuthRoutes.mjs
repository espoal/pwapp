import { React, Suspense } from '@vendors/react'
//import { Auth } from './Auth.mjs'

const Auth = React.lazy(async () => {

  const { Auth } = await import('./Auth.mjs')

  return { default: Auth }

})

export const AuthRoutes = () =>
  (<Suspense fallback={<>Loading ...</>}>
    <Auth />
  </Suspense>)

/*export const AuthRoutes = () =>
  (
    <Route path="/auth/!*" element={<Auth />} />
  )*/
