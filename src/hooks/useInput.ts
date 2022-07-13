import React, { useCallback, useEffect, useState } from 'react'

const useInput = (
  initialValue: string,
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [setValue, initialValue])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [],
  )

  return [value, handleChange]
}

export default useInput
