import React, { useContext } from 'react'

import { NumberSelectionContext } from '../NumberSelection'

const Display = () => {
  const {selection} = useContext(NumberSelectionContext)
  return (
    <p>You have selected: {selection}</p>
  )
}

export default Display
