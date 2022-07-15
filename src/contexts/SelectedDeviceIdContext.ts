import { createContext } from 'react'

import { SelectedIdContext } from '../types'

const SelectedDeviceIdContext = createContext<SelectedIdContext>(
  {} as SelectedIdContext,
)

export default SelectedDeviceIdContext
