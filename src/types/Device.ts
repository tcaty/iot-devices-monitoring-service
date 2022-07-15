interface IDevice {
  id: number
  name: string
  comment: string
  latitude: number
  longitude: number
  userId: 2
}

type DeviceData = Omit<Omit<IDevice, 'id'>, 'userId'>

export type { IDevice, DeviceData }
