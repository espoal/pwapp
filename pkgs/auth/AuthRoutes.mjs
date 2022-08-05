import { React, lazy, Suspense } from '@vendors/react'
//import { Auth } from './Auth.mjs'

const Auth = lazy(async () => {

  /*const { Auth } = await import('./Auth.mjs')

  return { default: Auth }*/

  return import('./Auth.mjs')

})

export const AuthRoutes = () =>
  (<Suspense fallback={<>Loading ...</>}>
    <Auth />
  </Suspense>)

/*export const AuthRoutes = () =>
  (
    <Route path="/auth/!*" element={<Auth />} />
  )*/
