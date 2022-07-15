import { createContext } from 'react'

import { SelectedIdContext } from '../types'

const SelectedSensorIdContext = createContext<SelectedIdContext>(
  {} as SelectedIdContext,
)

export default SelectedSensorIdContext
