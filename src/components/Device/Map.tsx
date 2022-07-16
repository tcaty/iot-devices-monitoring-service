import React, { useEffect, useState } from 'react'

import { Map, Placemark, useYMaps } from '@pbe/react-yandex-maps'

import { useUserPosition } from '../../hooks'
import { IDevice, Position } from '../../types'
import SubSection from '../Section/SubSection'

interface Props {
  height: number
  devices: IDevice[]
  renderPlacemark: (device: IDevice) => React.ReactNode
  onMapClick?: (e: any) => void
  extraPlacemarkPosition?: Position
}

const DeviceMap: React.FC<Props> = ({
  devices,
  height,
  renderPlacemark,
  onMapClick,
  extraPlacemarkPosition,
}) => {
  const position = useUserPosition()

  const [isYmapReady, setIsYmapReady] = useState(false)

  const ymap = useYMaps()

  useEffect(() => {
    ymap?.ready(() => setIsYmapReady(true))
  }, [ymap])

  if (!isYmapReady) {
    return null
  }

  return (
    <SubSection title="Карта устройств">
      <Map
        width="100%"
        height={height}
        defaultState={{
          center: [position.latitude, position.longitude],
          zoom: 5,
        }}
        instanceRef={ref => {
          if (ref) {
            ref.events.add('click', onMapClick)
          }
        }}
      >
        {devices.map(renderPlacemark)}
        {extraPlacemarkPosition ? (
          <Placemark
            geometry={[extraPlacemarkPosition.latitude, extraPlacemarkPosition.longitude]}
            options={{
              iconColor: '#1976d2',
            }}
          />
        ) : null}
        <Placemark
          geometry={[position.latitude, position.longitude]}
          options={{
            iconColor: '#e83256',
          }}
        />
      </Map>
    </SubSection>
  )
}

export default DeviceMap
