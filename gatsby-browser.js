// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import React from 'react'
import Background from './src/components/background'

export const wrapPageElement = ({ element }) => {
  return (
    <div>
      {element}
      <Background />
    </div>
  )
}
