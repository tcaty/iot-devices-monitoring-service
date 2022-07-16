import React from 'react'

interface DialogProps {
  icon: React.ReactNode
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined
  title: string
  description: string
  resetForm: () => void
  onSuccess: () => void
  children: React.ReactElement | React.ReactElement[]
}

interface DialogWrapperProps<T>
  extends Omit<Omit<Omit<DialogProps, 'onSuccess'>, 'children'>, 'resetForm'> {
  handleSuccess: (item: T) => void
  initialValues: T
  data?: any
  isLoading?: boolean
}

export type { DialogProps, DialogWrapperProps }
