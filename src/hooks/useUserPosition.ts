import { useCallback, useEffect, useState } from 'react'

import { Position } from '../types'

const useUserPosition = (): Position => {
  const [position, setPosition] = useState<Position>({ latitude: 22, longitude: 22 })

  const onPositionChange = useCallback(({ coords: { latitude, longitude } }: any) => {
    setPosition({
      latitude,
      longitude,
    })
  }, [])

  const onError = useCallback(() => setPosition({ latitude: 22, longitude: 22 }), [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onPositionChange, onError)
    } else {
      onError()
    }
  }, [onError, onPositionChange])

  return position
}

export default useUserPosition
