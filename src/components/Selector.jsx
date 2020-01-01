import React, { useContext } from 'react'

import { NumberSelectionContext } from '../NumberSelection'

const Selector = () => {
  const {handleChange} = useContext(NumberSelectionContext)

  return (
    <select onChange={handleChange}>
      <option value={0}>Zero</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
    </select>
  )
}

export default Selector
