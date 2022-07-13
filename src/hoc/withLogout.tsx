import React from 'react'

import { useEffectOnce } from 'usehooks-ts'

import { useLogout } from '../hooks'

const withLogout = (Component: React.FC) => {
  const WrappedCompnonent = (props: any) => {
    const logout = useLogout()

    useEffectOnce(logout)

    return <Component {...props} />
  }

  WrappedCompnonent.displayName = 'Component which logout on mount'

  return WrappedCompnonent
}

export default withLogout
