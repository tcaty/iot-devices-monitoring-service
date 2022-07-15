import { useQuery } from 'react-query'

import useAxios from './useAxios'

interface UseFetchData<T> {
  data: T
  fetch: () => void
  isLoading: boolean
  isError: boolean
}

const useFetchData = <T>(
  endpoint: string,
  enabled = true,
  params?: any,
): UseFetchData<T> => {
  const axios = useAxios()

  const { data, isFetching, isError, refetch } = useQuery(
    [endpoint, params],
    async () => {
      return (await axios.get(endpoint, { params })) as T
    },
    { enabled, cacheTime: 0 },
  )

  return {
    data: data as unknown as T,
    fetch: refetch,
    isLoading: isFetching,
    isError,
  }
}

export default useFetchData
