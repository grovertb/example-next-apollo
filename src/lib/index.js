import React from 'react'

export const useDebounce = (value, delay) => {
  const [ textValue, setTextValue ] = React.useState(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setTextValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  },
  [ delay, value ])

  return textValue
}
