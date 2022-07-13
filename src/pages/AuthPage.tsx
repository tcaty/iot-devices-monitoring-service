import React from 'react'

import AuthForm from '../components/AuthForm'
import { withLogout } from '../hoc'

const SignUpPage: React.FC = () => {
  return (
    <AuthForm
      heading="Регистрация"
      buttonText="Зарегистрироваться"
      link={{ text: 'Уже есть аккаунт? Войти', to: '/auth/sign-in' }}
      endpoint="/auth/reg"
      method="POST"
    />
  )
}

const SignInPage: React.FC = () => {
  return (
    <AuthForm
      heading="Вход"
      buttonText="Войти"
      link={{
        text: 'Еще нет аккаунта? Зарегистрироваться',
        to: '/auth/sign-up',
      }}
      endpoint="/auth/login"
      method="POST"
    />
  )
}

const SignUpPageWithLogout = withLogout(SignUpPage)
const SignInPageWithLogout = withLogout(SignInPage)

export {
  SignUpPageWithLogout as SignUpPage,
  SignInPageWithLogout as SignInPage,
}
