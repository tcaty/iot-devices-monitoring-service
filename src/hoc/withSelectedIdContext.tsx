import React, { useState } from 'react'

import { SelectedIdContext } from '../types'

const withSelectedIdContext = (
  Component: React.FC<any>,
  Context: React.Context<SelectedIdContext>,
) => {
  const WrappedComponent = (props: any) => {
    const [selectedId, setSelectedId] = useState(-1)

    return (
      <Context.Provider value={{ selectedId, setSelectedId }}>
        <Component {...props} />
      </Context.Provider>
    )
  }

  WrappedComponent.displayName = 'Component with selected id context'

  return WrappedComponent
}

export default withSelectedIdContext
