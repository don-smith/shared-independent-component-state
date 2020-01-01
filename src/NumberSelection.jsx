import React, { useState } from 'react'

export const NumberSelectionContext = React.createContext()

export const NumberSelectionProvider = ({children}) => {
  const [state, setState] = useState({
    selection: 0,
    handleChange: handleChange
  })

  function handleChange (e) {
    const selection = e.target.value
    setState({ selection, handleChange })
  }

  return (
    <NumberSelectionContext.Provider value={state}>
      {children}
    </NumberSelectionContext.Provider>
  )
}
