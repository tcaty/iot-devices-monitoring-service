import React, { useMemo, Fragment } from 'react'

import { TextField } from '@mui/material'

import { useFetchData, useInput } from '../../../hooks'
import { SensorValue } from '../../../types'
import { getLastHourInterval } from '../../../utils'
import Section from '../../Section/Section'
import SectionTitle from '../../Section/Title'

import SensorValuesChart from './Chart'
import SensorValuesTable from './Table'

interface Props {
  sensorId: number
}

const SensorValues: React.FC<Props> = ({ sensorId }) => {
  const interval = useMemo(() => getLastHourInterval(), [])

  const [count, handleChange] = useInput('10')

  const { data, isLoading, isError } = useFetchData<SensorValue[]>(
    `/sensor/${sensorId}/sensor-values`,
    true,
    interval,
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  if (isError) {
    return <div>error!</div>
  }

  const transformedData = data.slice(0, Number(count))

  return (
    <Section>
      <SectionTitle title={`Показания датчика #${sensorId}`} mb={5} />
      <TextField
        type="number"
        label="Кол-во последних показаний"
        value={count}
        onChange={handleChange}
        sx={{ mb: 5 }}
      />
      <Fragment>
        <SensorValuesChart values={transformedData} />
        <SensorValuesTable values={transformedData} />
      </Fragment>
    </Section>
  )
}

export default SensorValues
