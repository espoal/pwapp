import { React, Route } from '@vendors/react'
//import { Auth } from './Auth.mjs'

const Auth = React.lazy(async () => {

  const { Auth } = await import('./Auth.mjs')

  return { default: Auth }

})

export const AuthRoutes = () =>
  (<React.Suspense fallback={<>Loading ...</>}>
    <Auth />
  </React.Suspense>)

/*export const AuthRoutes = () =>
  (
    <Route path="/auth/!*" element={<Auth />} />
  )*/
