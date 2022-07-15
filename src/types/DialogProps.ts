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
  onSuccess: () => void
  children: React.ReactElement | React.ReactElement[]
}

interface DialogWrapperProps<T>
  extends Omit<Omit<DialogProps, 'onSuccess'>, 'children'> {
  handleSuccess: (item: T) => void
  initialValues: T
}

export type { DialogProps, DialogWrapperProps }
