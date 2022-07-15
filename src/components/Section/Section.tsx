import React from 'react'

import { Box } from '@mui/material'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const Section: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: '40px 0 50px 0',
        borderBottom: '1px solid rgba(180, 180, 180, 0.27)',
      }}
    >
      {children}
    </Box>
  )
}

export default Section
