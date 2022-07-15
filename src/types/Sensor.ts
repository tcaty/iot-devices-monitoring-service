interface ISensor {
  name: string
  comment: string
  id: number
  deviceId: number
}

type SensorData = Omit<Omit<ISensor, 'deviceId'>, 'id'>

interface SensorValue {
  id: number
  sensorId: number
  timestamp: string
  value: number
}

export type { ISensor, SensorValue, SensorData }
