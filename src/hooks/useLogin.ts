import { useEffect } from 'react'

import { AuthInfo, JWT, RequestMethod } from '../types'

import useAccessToken from './useAccessToken'
import useFetchData from './useFetchData'
import useUser from './useUser'

interface UseLogin {
  login: () => void
  isLoading: boolean
  isError: boolean
}

const useLogin = (
  endpoint: string,
  method: RequestMethod,
  authInfo: AuthInfo,
): UseLogin => {
  const { setAccessToken, accessToken } = useAccessToken()
  const { fetchUser } = useUser()

  const { data, fetch, isLoading, isError } = useFetchData<JWT>(
    endpoint,
    method,
    authInfo,
  )

  useEffect(() => {
    if (data) {
      setAccessToken(data.access_token)
    }
  }, [data, setAccessToken])

  useEffect(() => {
    if (accessToken.length > 0) {
      fetchUser()
    }
  }, [accessToken, fetchUser])

  return { login: fetch, isLoading, isError }
}

export default useLogin
