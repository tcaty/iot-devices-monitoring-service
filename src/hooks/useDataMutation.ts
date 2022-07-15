import { useMutation, useQueryClient } from 'react-query'

import useAxios from './useAxios'

const useDataMutation = <T>(
  endpoint: string,
  method: 'POST' | 'DELETE' | 'PUT' | 'PATCH',
  queryToUpdate: string,
) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  return useMutation(
    (data?: T) => {
      const config = data ? { method, data } : { method }
      return axios(endpoint, config)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryToUpdate)
      },
    },
  )
}

export default useDataMutation
