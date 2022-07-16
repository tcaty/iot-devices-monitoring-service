import React from 'react'

const getChangeHandler = (handler: (arg: string) => void) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    handler(event.target.value)
  }
}

export default getChangeHandler
