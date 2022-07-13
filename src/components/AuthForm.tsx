import React, { useCallback } from 'react'

import { LoadingButton } from '@mui/lab'
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { useLogin, useInput } from '../hooks'
import { RequestMethod } from '../types'

interface Props {
  heading: string
  buttonText: string
  link: {
    text: string
    to: string
  }
  endpoint: string
  method: RequestMethod
}

const AuthForm: React.FC<Props> = ({
  buttonText,
  heading,
  link: { text, to },
  endpoint,
  method,
}) => {
  const [username, setUsername] = useInput('')
  const [password, setPassword] = useInput('')

  const { login, isLoading, isError } = useLogin(endpoint, method, {
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
        onChange={setUsername}
      />
      <TextField
        label="Введите пароль"
        fullWidth={true}
        value={password}
        onChange={setPassword}
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
