import React, { useMemo } from 'react'

import { Add } from '@mui/icons-material'

import { useDataMutation, useFetchData } from '../../hooks'
import { IDevice, DeviceData } from '../../types'
import ItemList from '../Item/List'

import Device from './Device'
import DeviceDialog from './Dialog'

const DeviceList: React.FC = () => {
  const endpoint = useMemo(() => '/devices', [])

  const { data, isLoading, isError } = useFetchData<IDevice[]>(endpoint)
  const { mutate: addDevice } = useDataMutation<DeviceData>(
    endpoint,
    'POST',
    endpoint,
  )

  return (
    <ItemList
      title="Ваши устройства"
      data={data}
      renderItem={(device: IDevice) => (
        <Device device={device} queryKey={endpoint} />
      )}
      isLoading={isLoading}
      isError={isError}
    >
      <DeviceDialog
        title="Создайте устройство"
        description="Придумайте имя, комментарий и местоположение устройства"
        icon={<Add />}
        color="success"
        handleSuccess={addDevice}
        initialValues={{ name: '', comment: '', latitude: 0, longitude: 0 }}
      />
    </ItemList>
  )
}
export default DeviceList
