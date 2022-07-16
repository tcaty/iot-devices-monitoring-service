import React, { useMemo } from 'react'

import { Grid, Skeleton } from '@mui/material'
import { v1 } from 'uuid'

import SubSection from '../Section/SubSection'

interface Props<T> {
  title: string
  isLoading: boolean
  isError: boolean
  data: T[]
  renderItem: (item: T) => React.ReactElement
}

const ItemList = <T,>({
  title,
  data,
  isLoading,
  isError,
  renderItem,
}: Props<T>): JSX.Element => {
  const content = useMemo<React.ReactElement>(() => {
    if (isLoading) {
      return (
        <Grid container spacing={4}>
          {[1, 2, 3].map(() => (
            <Grid item xs={6} key={v1()}>
              <Skeleton height={300} />
            </Grid>
          ))}
        </Grid>
      )
    }

    if (isError) {
      return <div>error!</div>
    }

    if (data.length === 0) {
      return <div>data is empty!</div>
    }

    return (
      <Grid container spacing={4}>
        {data.map(item => (
          <Grid item xs={6} key={v1()}>
            {renderItem(item)}
          </Grid>
        ))}
      </Grid>
    )
  }, [data, isError, isLoading, renderItem])

  return <SubSection title={title}>{content}</SubSection>
}

export default ItemList
