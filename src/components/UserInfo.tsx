import React from 'react'

import { Button } from '@mui/material'

import { useLogout } from '../hooks'
import useUser from '../hooks/useUser'

import Section from './Section/Section'
import SectionTitle from './Section/Title'

const UserInfo: React.FC = () => {
  const { user } = useUser()
  const logout = useLogout()

  return (
    <Section>
      <SectionTitle title={`Здравствуйте, ${user.username}`}>
        <Button onClick={logout} variant="outlined" color="error">
          выйти
        </Button>
      </SectionTitle>
    </Section>
  )
}

export default UserInfo
