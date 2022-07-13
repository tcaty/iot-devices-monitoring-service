import { useCallback } from 'react'

import useAccessToken from './useAccessToken'
import useUser from './useUser'

const useLogout = (): (() => void) => {
  const { setAccessToken } = useAccessToken()
  const { removeUser } = useUser()

  return useCallback(() => {
    setAccessToken('')
    removeUser()
  }, [setAccessToken, removeUser])
}

export default useLogout
