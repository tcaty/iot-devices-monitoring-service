import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import useUser from '../hooks/useUser'

const withPrivateRoute = (Component: React.FC) => {
  const WrappedCompnonent = (props: any) => {
    const { user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
      if (user.username.length === 0 && user.id < 0) {
        navigate('/auth/sign-in')
      }
    }, [user, navigate])

    return <Component {...props} />
  }

  WrappedCompnonent.displayName =
    'This page is unavailable for unauthorized user'

  return WrappedCompnonent
}

export default withPrivateRoute
