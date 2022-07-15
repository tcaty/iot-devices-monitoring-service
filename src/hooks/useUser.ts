import { useCallback, useEffect, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'usehooks-ts'

import { User } from '../types'

import useFetchData from './useFetchData'

interface UseUser {
  user: User
  fetchUser: () => void
  removeUser: () => void
}

const useUser = (): UseUser => {
  const prefix = useMemo(() => 'user', [])

  const [username, setUsername] = useLocalStorage(`${prefix}-username`, '')
  const [id, setId] = useLocalStorage(`${prefix}-id`, -1)

  const { data: user, fetch } = useFetchData<User>('/auth/profile', false)

  const navigate = useNavigate()

  useEffect(() => {
    if (user && username.length === 0 && id < 0) {
      setUsername(user.username)
      setId(user.id)
      navigate('/')
    }
  }, [user, username, id])

  const removeUser = useCallback(() => {
    setUsername('')
    setId(-1)
  }, [])

  return {
    user: { username, id },
    fetchUser: fetch,
    removeUser,
  }
}

export default useUser
