import React from 'react'

import { TextField } from '@mui/material'

import { useInput } from '../../hooks'
import { DeviceData, DialogWrapperProps } from '../../types'
import ItemDialog from '../Item/Dialog'

const DeviceDialog: React.FC<DialogWrapperProps<DeviceData>> = props => {
  const [name, handleNameChange] = useInput(props.initialValues.name)
  const [comment, handleCommentChange] = useInput(props.initialValues.comment)
  const [longitude, handleLongitudeChange] = useInput(
    String(props.initialValues.longitude),
  )
  const [latitude, handleLatitudeChange] = useInput(
    String(props.initialValues.latitude),
  )

  return (
    <ItemDialog
      {...props}
      onSuccess={() =>
        props.handleSuccess({
          name,
          comment,
          longitude: Number(longitude),
          latitude: Number(latitude),
        })
      }
    >
      <TextField
        value={name}
        onChange={handleNameChange}
        label="Введите имя"
        variant="filled"
      />
      <TextField
        value={comment}
        onChange={handleCommentChange}
        label="Введите комменатрий"
        variant="filled"
      />
      <TextField
        value={latitude}
        onChange={handleLatitudeChange}
        label="Введите широту"
        variant="filled"
      />
      <TextField
        value={longitude}
        onChange={handleLongitudeChange}
        label="Введите долготу"
        variant="filled"
      />
    </ItemDialog>
  )
}

export default DeviceDialog
