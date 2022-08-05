import { React, Routes, Route, Navigate } from '@vendors/react'
import { LoginPage } from './LoginPage'
import { SignupPage } from './SignupPage'

const Auth = () => {

  return (
    <Routes>
      <Route path="login" element={<LoginPage />}/>
      <Route path="dynamiclogin" element={<LoginPage />}/>
      <Route path="signup" element={<SignupPage />}/>
      <Route path="*" element={<Navigate replace to="/notFound"/>} />
    </Routes>
  )

}

export default Auth
