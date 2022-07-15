import React from 'react'

import { TextField } from '@mui/material'

import { useInput } from '../../hooks'
import { DialogWrapperProps, SensorData } from '../../types'
import ItemEditDialog from '../Item/Dialog'

const SensorDialog: React.FC<DialogWrapperProps<SensorData>> = props => {
  const [name, handleNameChange] = useInput(props.initialValues.name)
  const [comment, handleCommentChange] = useInput(props.initialValues.comment)

  return (
    <ItemEditDialog
      {...props}
      onSuccess={() =>
        props.handleSuccess({
          name,
          comment,
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
    </ItemEditDialog>
  )
}

export default SensorDialog
