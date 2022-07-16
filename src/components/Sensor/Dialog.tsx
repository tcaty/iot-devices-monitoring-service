import React, { useState } from 'react'

import { TextField } from '@mui/material'

import { DialogWrapperProps, SensorData } from '../../types'
import { getChangeHandler } from '../../utils'
import ItemEditDialog from '../Item/Dialog'

const SensorDialog: React.FC<DialogWrapperProps<SensorData>> = props => {
  const { initialValues } = props

  const [name, setName] = useState(initialValues.name)
  const [comment, setComment] = useState(initialValues.comment)

  const resetForm = () => {
    setName(initialValues.name)
    setComment(initialValues.comment)
  }

  return (
    <ItemEditDialog
      {...props}
      resetForm={resetForm}
      onSuccess={() =>
        props.handleSuccess({
          name,
          comment,
        })
      }
    >
      <TextField
        value={name}
        onChange={getChangeHandler(setName)}
        label="Введите имя"
        variant="filled"
        required={true}
      />
      <TextField
        value={comment}
        onChange={getChangeHandler(setComment)}
        label="Введите комменатрий"
        variant="filled"
        required={true}
      />
    </ItemEditDialog>
  )
}

export default SensorDialog
