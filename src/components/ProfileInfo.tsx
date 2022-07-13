import React from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { useLogout } from '../hooks'
import useUser from '../hooks/useUser'

const ProfileInfo: React.FC = () => {
  const { user } = useUser()
  const logout = useLogout()

  return (
    <Stack spacing={4}>
      <Typography variant="h4">Имя пользователя: {user.username}</Typography>
      <Typography variant="h4">Айди пользователя: {user.id}</Typography>
      <Box width={150}>
        <Button onClick={logout} variant="contained">
          Выйти из аккаунта
        </Button>
      </Box>
    </Stack>
  )
}

export default ProfileInfo
