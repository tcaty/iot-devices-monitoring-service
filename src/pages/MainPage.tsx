import React, { Fragment } from 'react'

import ProfileInfo from '../components/ProfileInfo'
import { withPrivateRoute } from '../hoc'

const MainPage: React.FC = () => {
  return (
    <Fragment>
      <ProfileInfo />
    </Fragment>
  )
}

export default withPrivateRoute(MainPage)
