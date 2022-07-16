import React, { useContext, useMemo } from 'react'

import { Add } from '@mui/icons-material'
import { Skeleton } from '@mui/material'
import { Placemark } from '@pbe/react-yandex-maps'
import { v1 } from 'uuid'

import { SelectedDeviceIdContext } from '../../contexts'
import { useDataMutation, useFetchData, useUserPosition } from '../../hooks'
import { IDevice, DeviceData } from '../../types'
import ItemList from '../Item/List'
import Section from '../Section/Section'
import SectionTitle from '../Section/Title'

import Device from './Device'
import DeviceDialog from './Dialog'
import DeviceMap from './Map'

const DeviceSection: React.FC = () => {
  const endpoint = useMemo(() => '/devices', [])

  const { data, isLoading, isError } = useFetchData<IDevice[]>(endpoint)
  const { mutate: addDevice } = useDataMutation<DeviceData>(endpoint, 'POST', endpoint)

  const { selectedId, setSelectedId } = useContext(SelectedDeviceIdContext)

  const { latitude, longitude } = useUserPosition()

  return (
    <Section>
      <SectionTitle title="Ваши устройства">
        <DeviceDialog
          title="Создайте устройство"
          description="Придумайте имя, комментарий и местоположение устройства"
          icon={<Add />}
          color="success"
          handleSuccess={addDevice}
          initialValues={{
            name: '',
            comment: '',
            latitude,
            longitude,
          }}
          isLoading={isLoading}
          data={data}
        />
      </SectionTitle>
      <ItemList
        title="Список устройств"
        data={data}
        renderItem={(device: IDevice) => (
          <Device device={device} queryKey={endpoint} devices={data} />
        )}
        isLoading={isLoading}
        isError={isError}
      />
      {isLoading ? (
        <Skeleton width="100%" height={400} />
      ) : (
        <DeviceMap
          devices={data}
          height={400}
          renderPlacemark={device => (
            <Placemark
              geometry={[device.latitude, device.longitude]}
              onClick={() => setSelectedId(device.id)}
              options={{
                iconColor: device.id === selectedId ? '#1976d2' : 'gray',
              }}
              key={v1()}
            />
          )}
        />
      )}
    </Section>
  )
}
export default DeviceSection
