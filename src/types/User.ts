type RequestMethod = 'POST' | 'GET'

interface JWT {
  access_token: string
}

interface AuthInfo {
  username: string
  password: string
}

interface User {
  username: string
  id: number
}

export type { AuthInfo, JWT, RequestMethod, User }
