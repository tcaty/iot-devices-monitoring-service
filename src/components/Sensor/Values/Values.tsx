import React, { useMemo, Fragment, useState } from 'react'

import { Box, TextField } from '@mui/material'

import { useFetchData } from '../../../hooks'
import { SensorValue } from '../../../types'
import { getChangeHandler, getLastHourInterval } from '../../../utils'
import Section from '../../Section/Section'
import SectionTitle from '../../Section/Title'

import SensorValuesChart from './Chart'
import SensorValuesTable from './Table'

interface Props {
  sensorId: number
}

const SensorValues: React.FC<Props> = ({ sensorId }) => {
  const interval = useMemo(() => getLastHourInterval(), [])

  const [count, setCount] = useState('10')

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
      <Box mb={5}>
        <SectionTitle title={`Показания датчика #${sensorId}`} />
      </Box>
      <TextField
        type="number"
        label="Кол-во последних показаний"
        value={count}
        onChange={getChangeHandler(setCount)}
      />
      <Fragment>
        <SensorValuesChart values={transformedData} />
        <SensorValuesTable values={transformedData} />
      </Fragment>
    </Section>
  )
}

export default SensorValues
