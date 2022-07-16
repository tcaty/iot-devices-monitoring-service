import React, { useCallback, useState } from 'react'

import { LoadingButton } from '@mui/lab'
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { useLogin } from '../hooks'
import { getChangeHandler } from '../utils'

interface Props {
  heading: string
  buttonText: string
  link: {
    text: string
    to: string
  }
  endpoint: string
}

const AuthForm: React.FC<Props> = ({
  buttonText,
  heading,
  link: { text, to },
  endpoint,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login, isLoading, isError } = useLogin(endpoint, {
    username,
    password,
  })

  const handleSubmit = useCallback(
    (event: React.SyntheticEvent) => {
      login()
      event.preventDefault()
    },
    [login],
  )

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={3}
      alignItems="center"
      width={500}
    >
      <Typography variant="h3">{heading}</Typography>
      <TextField
        label="Введите логин"
        fullWidth={true}
        value={username}
        onChange={getChangeHandler(setUsername)}
        required={true}
      />
      <TextField
        label="Введите пароль"
        fullWidth={true}
        value={password}
        onChange={getChangeHandler(setPassword)}
        required={true}
      />
      <Box width={200}>
        <LoadingButton
          type="submit"
          variant="contained"
          fullWidth={true}
          loading={isLoading}
        >
          {buttonText}
        </LoadingButton>
      </Box>
      <NavLink to={to}>
        <Link component="span">{text}</Link>
      </NavLink>
      {isError ? (
        <Typography color="red" variant="caption">
          Что-то пошло не так, повторите запрос!
        </Typography>
      ) : null}
    </Stack>
  )
}

export default AuthForm
