import React from 'react'

import { Box, Typography } from '@mui/material'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

import { SensorValue } from '../../../types'

interface Props {
  values: SensorValue[]
}

const SensorValuesChart: React.FC<Props> = ({ values }) => {
  return (
    <Box mb={2}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        График
      </Typography>
      <LineChart
        width={1152}
        height={400}
        data={values}
        margin={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#1976d2" yAxisId={1} />
      </LineChart>
    </Box>
  )
}

export default SensorValuesChart
