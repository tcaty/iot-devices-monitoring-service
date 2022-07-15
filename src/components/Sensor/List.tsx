import React, { useMemo } from 'react'

import { Add } from '@mui/icons-material'

import { useDataMutation, useFetchData } from '../../hooks'
import { ISensor, SensorData } from '../../types'
import ItemList from '../Item/List'

import SensorDialog from './Dialog'
import Sensor from './Sensor'

interface Props {
  deviceId: number
}

const SensorList: React.FC<Props> = ({ deviceId }) => {
  const endpoint = useMemo(() => `/devices/${deviceId}/sensors`, [deviceId])

  const { data, isLoading, isError } = useFetchData<ISensor[]>(
    `/devices/${deviceId}/sensors`,
  )
  const { mutate: addSensor } = useDataMutation<
    SensorData & { deviceId: number }
  >('/sensors', 'POST', endpoint)

  return (
    <ItemList
      title={`Датчики устройства #${deviceId}`}
      data={data}
      renderItem={(sensor: ISensor) => (
        <Sensor sensor={sensor} queryKey={endpoint} />
      )}
      isLoading={isLoading}
      isError={isError}
    >
      <SensorDialog
        title={`Добавить датчик на устройство #${deviceId}`}
        icon={<Add />}
        color="success"
        description="Будьте уверены, что созданные датчик подойдет к выбранному устройству"
        handleSuccess={(sensorData: SensorData) =>
          addSensor({ deviceId, ...sensorData })
        }
        initialValues={{ name: '', comment: '' }}
      />
    </ItemList>
  )
}

export default SensorList
