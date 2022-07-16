import React, { useCallback, useContext } from 'react'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'

import { SelectedSensorIdContext } from '../../contexts'
import { useDataMutation } from '../../hooks'
import { ISensor, SensorData } from '../../types'

import SensorDialog from './Dialog'

interface Props {
  sensor: ISensor
  queryKey: string
}

const Sensor: React.FC<Props> = ({
  sensor: { id, name, comment },
  queryKey,
}) => {
  const { mutate: editSensor } = useDataMutation<SensorData>(
    `/sensors/${id}`,
    'PATCH',
    queryKey,
  )
  const { mutate: deleteSensor } = useDataMutation(
    `/sensors/${id}`,
    'DELETE',
    queryKey,
  )

  const { setSelectedId, selectedId } = useContext(SelectedSensorIdContext)

  const showSensorValues = useCallback(() => {
    setSelectedId(id)
  }, [setSelectedId, id])

  return (
    <Card
      sx={{
        border: `1px solid ${selectedId === id ? '#1976d2' : 'transparent'}`,
      }}
    >
      <CardContent>
        <Stack spacing={0.5}>
          <Typography color="text.secondary">Датчик #{id}</Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography>{comment}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack spacing={1} direction="row">
          <Button onClick={showSensorValues} variant="contained">
            Показать данные
          </Button>
          <SensorDialog
            title="Измените датчик"
            description="Будьте уверены, что ваши изменения не навредят показаниям датчика!"
            icon={<EditIcon />}
            color="success"
            handleSuccess={editSensor}
            initialValues={{ name, comment }}
          />
          <Button
            onClick={() => deleteSensor(undefined)}
            variant="outlined"
            color="error"
          >
            <DeleteOutlineIcon />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  )
}

export default Sensor
