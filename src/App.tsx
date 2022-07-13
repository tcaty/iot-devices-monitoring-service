import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { AuthLayout, MainLayout } from './layouts'
import { MainPage, Page404, SignInPage, SignUpPage } from './pages'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="/auth/" element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
    </Routes>
  )
}

export default App
