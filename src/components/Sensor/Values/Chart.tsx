import React from 'react'

import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'

import { SensorValue } from '../../../types'
import SubSection from '../../Section/SubSection'

interface Props {
  values: SensorValue[]
}

const SensorValuesChart: React.FC<Props> = ({ values }) => {
  return (
    <SubSection title="График">
      <LineChart
        width={1152}
        height={400}
        data={values}
        margin={{ top: 10, bottom: 10, right: 10, left: 10 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#1976d2" yAxisId={1} />
      </LineChart>
    </SubSection>
  )
}

export default SensorValuesChart
