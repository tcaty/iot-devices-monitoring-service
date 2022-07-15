import React, { useCallback, useState } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from '@mui/material'

import { DialogProps } from '../../types'

const ItemDialog: React.FC<DialogProps> = ({
  icon,
  color,
  title,
  description,
  onSuccess,
  children,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleSuccess = useCallback(() => {
    onSuccess()
    handleClose()
  }, [onSuccess, handleClose])

  return (
    <div>
      <Button variant="outlined" color={color} onClick={handleOpen}>
        {icon}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <DialogContentText>{description}</DialogContentText>
            {children}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            закрыть
          </Button>
          <Button variant="contained" color="success" onClick={handleSuccess}>
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ItemDialog
