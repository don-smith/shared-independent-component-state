import React from 'react'

import { NumberSelectionProvider } from '../NumberSelection'
import Selector from './Selector'
import Display from './Display'

const App = () => {
  return (
    <NumberSelectionProvider>
      <Selector />
      <Display />
    </NumberSelectionProvider>
  )
}

export default App
