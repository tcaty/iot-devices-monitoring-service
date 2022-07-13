import { useQuery } from 'react-query'

import { RequestMethod } from '../types'

import useAccessToken from './useAccessToken'

interface UseFetchData<T> {
  data: T
  fetch: () => void
  isLoading: boolean
  isError: boolean
}

const useFetchData = <T>(
  endpoint: string,
  method: RequestMethod,
  body?: any,
): UseFetchData<T> => {
  const { accessToken } = useAccessToken()

  const { data, isFetching, isError, refetch } = useQuery(
    ['data', endpoint, body, accessToken],
    async () => {
      const baseUrl = 'http://localhost:3000'
      const url = `${baseUrl}${endpoint}`

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        throw new Error('Something went wrong with fetching data...')
      }

      return (await response.json()) as T
    },
    { enabled: false, cacheTime: 0 },
  )

  return {
    data: data as T,
    fetch: refetch,
    isLoading: isFetching,
    isError,
  }
}

export default useFetchData
