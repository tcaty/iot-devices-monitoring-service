import React from 'react'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { SensorValue } from '../../../types'

interface Props {
  values: SensorValue[]
}

const SensorValuesTable: React.FC<Props> = ({ values }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Таблица
      </Typography>
      <TableContainer component={Paper} style={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Номер</TableCell>
              <TableCell align="right">ID замера</TableCell>
              <TableCell align="right">Момент времени</TableCell>
              <TableCell align="right">Значение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((value, index) => (
              <TableRow
                key={value.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell align="right">{value.id}</TableCell>
                <TableCell align="right">{value.timestamp}</TableCell>
                <TableCell align="right">{value.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default SensorValuesTable
