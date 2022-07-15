import { useEffect } from 'react'

import { useQuery } from 'react-query'

import { AuthInfo, JWT } from '../types'

import useAccessToken from './useAccessToken'
import useAxios from './useAxios'
import useUser from './useUser'

interface UseLogin {
  login: () => void
  isLoading: boolean
  isError: boolean
}

const useLogin = (endpoint: string, authInfo: AuthInfo): UseLogin => {
  const { setAccessToken, accessToken } = useAccessToken()
  const { fetchUser } = useUser()

  const axios = useAxios()

  const { data, isFetching, isError, refetch } = useQuery(
    [endpoint, authInfo],
    async () => {
      return (await axios.post(endpoint, authInfo)) as JWT
    },
    { enabled: false },
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

  return { login: refetch, isLoading: isFetching, isError }
}

export default useLogin
