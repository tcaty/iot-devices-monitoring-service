import React from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Stack sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Outlet />
    </Stack>
  )
}

export default AuthLayout
