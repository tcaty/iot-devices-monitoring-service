import React from 'react'

import { Stack, Typography } from '@mui/material'

interface Props {
  title: string
  children?: React.ReactElement
}

const SectionTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h4">{title}</Typography>
      {children}
    </Stack>
  )
}

export default SectionTitle
