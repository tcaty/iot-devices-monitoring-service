import { useLocalStorage } from 'usehooks-ts'

interface UseAccessToken {
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

const useAccessToken = (): UseAccessToken => {
  const [accessToken, setAccessToken] = useLocalStorage('access-token', '')
  return { accessToken, setAccessToken }
}

export default useAccessToken
