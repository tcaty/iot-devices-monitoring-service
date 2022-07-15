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

import {
  SelectedDeviceIdContext,
  SelectedSensorIdContext,
} from '../../contexts'
import { useDataMutation } from '../../hooks'
import { DeviceData, IDevice } from '../../types'

import DeviceDialog from './Dialog'

interface Props {
  device: IDevice
  queryKey: string
}

const Device: React.FC<Props> = ({
  device: { id, name, comment, longitude, latitude },
  queryKey,
}) => {
  const { mutate: editDevice } = useDataMutation<DeviceData>(
    `/devices/${id}`,
    'PUT',
    queryKey,
  )
  const { mutate: deleteDevice } = useDataMutation(
    `/devices/${id}`,
    'DELETE',
    queryKey,
  )

  const { setSelectedId: setDeviceId, selectedId } = useContext(
    SelectedDeviceIdContext,
  )
  const { setSelectedId: setSensorId } = useContext(SelectedSensorIdContext)

  const showSensors = useCallback(() => {
    setDeviceId(id)
    setSensorId(-1)
  }, [setDeviceId, setSensorId, id])

  return (
    <Card sx={{ border: selectedId === id ? '1px solid #1976d2' : 'none' }}>
      <CardContent>
        <Stack spacing={0.5}>
          <Typography color="text.secondary">Устройство #{id}</Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography>{comment}</Typography>
          <Typography>Широта: {latitude}</Typography>
          <Typography>Долгота: {longitude}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Stack spacing={1} direction="row">
          <Button onClick={showSensors} variant="contained">
            Показать датчики
          </Button>
          <DeviceDialog
            title="Измените устройство"
            description="Измените какие-то данные устройства, но ничего не сломайте!"
            icon={<EditIcon />}
            color="success"
            handleSuccess={editDevice}
            initialValues={{ name, comment, latitude, longitude }}
          />
          <Button
            onClick={() => deleteDevice(undefined)}
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

export default Device
