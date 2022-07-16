import React from 'react'

import { Box } from '@mui/material'

interface Props {
  children: React.ReactElement | React.ReactElement[]
  withBorder?: boolean
}

const Section: React.FC<Props> = ({ children, withBorder = true }) => {
  return (
    <Box
      sx={{
        padding: '40px 0 50px 0',
        borderBottom: withBorder
          ? '1px solid rgba(180, 180, 180, 0.27)'
          : 'none',
      }}
    >
      {children}
    </Box>
  )
}

export default Section
