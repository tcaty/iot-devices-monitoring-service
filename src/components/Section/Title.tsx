import React from 'react'

import { Stack, Typography } from '@mui/material'

interface Props {
  title: string
  children?: React.ReactElement
  mb?: number
}

const SectionTitle: React.FC<Props> = ({ title, children, mb = 0 }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" mb={mb}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Stack>
  )
}

export default SectionTitle
