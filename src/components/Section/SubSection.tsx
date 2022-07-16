import React from 'react'

import { Box, Typography } from '@mui/material'

interface Props {
  title: string
  children: React.ReactElement | React.ReactElement[]
}

const SubSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Box mt={4}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default SubSection
