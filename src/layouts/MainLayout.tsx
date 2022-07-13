import React from 'react'

import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default MainLayout
