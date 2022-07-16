import React, { useEffect, useState } from 'react'

import { Skeleton, TextField } from '@mui/material'
import { Placemark } from '@pbe/react-yandex-maps'
import { v1 } from 'uuid'

import { DeviceData, DialogWrapperProps } from '../../types'
import { getChangeHandler } from '../../utils'
import ItemDialog from '../Item/Dialog'

import DeviceMap from './Map'

const DeviceDialog: React.FC<DialogWrapperProps<DeviceData>> = props => {
  const { initialValues } = props

  const [name, setName] = useState(initialValues.name)
  const [comment, setComment] = useState(initialValues.comment)
  const [longitude, setLongitude] = useState(String(initialValues.longitude))
  const [latitude, setLatitude] = useState(String(initialValues.latitude))

  const resetForm = () => {
    setName(initialValues.name)
    setComment(initialValues.comment)
    setLongitude(String(initialValues.longitude))
    setLatitude(String(initialValues.latitude))
  }

  useEffect(() => {
    resetForm()
  }, [initialValues.longitude, initialValues.latitude])

  return (
    <ItemDialog
      {...props}
      resetForm={resetForm}
      onSuccess={() =>
        props.handleSuccess({
          name,
          comment,
          longitude: Number(longitude),
          latitude: Number(latitude),
        })
      }
    >
      <TextField
        value={name}
        onChange={getChangeHandler(setName)}
        label="Введите имя"
        variant="filled"
        required={true}
      />
      <TextField
        value={comment}
        onChange={getChangeHandler(setComment)}
        label="Введите комменатрий"
        variant="filled"
        required={true}
      />
      <TextField
        value={latitude}
        onChange={getChangeHandler(setLatitude)}
        label="Введите широту"
        variant="filled"
        required={true}
      />
      <TextField
        value={longitude}
        onChange={getChangeHandler(setLongitude)}
        label="Введите долготу"
        variant="filled"
        required={true}
      />
      {props.isLoading ? (
        <Skeleton width={400} height={300} />
      ) : (
        <DeviceMap
          devices={props.data}
          height={300}
          renderPlacemark={device => (
            <Placemark
              geometry={[device.latitude, device.longitude]}
              options={{ iconColor: 'gray' }}
              key={v1()}
            />
          )}
          onMapClick={(e: any) => {
            const position = e.get('coords')
            setLatitude(String(position[0]))
            setLongitude(String(position[1]))
          }}
          extraPlacemarkPosition={{
            latitude: Number(latitude),
            longitude: Number(longitude),
          }}
        />
      )}
    </ItemDialog>
  )
}

export default DeviceDialog
