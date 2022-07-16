import React, { Fragment, useContext } from 'react'

import DeviceSection from '../components/Device/Section'
import SensorSection from '../components/Sensor/Section'
import SensorValues from '../components/Sensor/Values/Values'
import UserInfo from '../components/UserInfo'
import { SelectedDeviceIdContext, SelectedSensorIdContext } from '../contexts'
import { withPrivateRoute } from '../hoc'
import withSelectedIdContext from '../hoc/withSelectedIdContext'

const MainPage: React.FC = () => {
  const { selectedId: deviceId } = useContext(SelectedDeviceIdContext)
  const { selectedId: sensorId } = useContext(SelectedSensorIdContext)

  return (
    <Fragment>
      <UserInfo />
      <DeviceSection />
      {deviceId > 0 ? <SensorSection deviceId={deviceId} /> : null}
      {sensorId > 0 ? <SensorValues sensorId={sensorId} /> : null}
    </Fragment>
  )
}

export default withSelectedIdContext(
  withSelectedIdContext(withPrivateRoute(MainPage), SelectedSensorIdContext),
  SelectedDeviceIdContext,
)
