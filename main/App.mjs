import {
  React, useEffect,
  Routes, Route, useLocation
} from '@vendors/react'
import { AuthRoutes } from '@pkgs/auth/AuthRoutes.mjs'

export const App = () => {

  const location = useLocation()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]) // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="/auth/*" element={<AuthRoutes />}/>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
