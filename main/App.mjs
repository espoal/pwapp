import {
  React, useEffect,
  Routes, Route, useLocation,
  HelmetProvider
} from '@vendors/react'
import { AuthRoutes } from '@pkgs/auth/AuthRoutes.mjs'
import { DashboardPage } from '@pkgs/dash/DashboardPage.mjs'

export const App = ({helmetContext = {}}) => {

  const location = useLocation()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]) // triggered on route change

  return (
    <HelmetProvider context={helmetContext}>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/auth/*" element={<AuthRoutes />}/>
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/dynamicdash" element={<DashboardPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </HelmetProvider>
  )
}
