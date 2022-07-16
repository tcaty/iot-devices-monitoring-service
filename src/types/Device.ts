interface Position {
  latitude: number
  longitude: number
}

interface IDevice extends Position {
  id: number
  name: string
  comment: string
  userId: 2
}

type DeviceData = Omit<Omit<IDevice, 'id'>, 'userId'>

export type { IDevice, DeviceData, Position }
