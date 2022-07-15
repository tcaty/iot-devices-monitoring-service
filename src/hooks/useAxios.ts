import Axios from 'axios'

import useAccessToken from './useAccessToken'

const useAxios = () => {
  const { accessToken } = useAccessToken()

  const axios = Axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      const message = error.response?.data?.message || error.message
      console.log({
        type: 'error',
        title: 'Error',
        message,
      })

      return Promise.reject(error)
    },
  )

  return axios
}

export default useAxios
