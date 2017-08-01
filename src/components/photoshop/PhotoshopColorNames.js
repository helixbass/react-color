import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import tinycolor from 'tinycolor2'

export const PhotoshopColorNames = ({onChange, colorNames, hex}) => {
  if (! colorNames) return null

  const handleChange = (e, {value}) => {
    onChange({
      hex: value.replace('#', ''),
      e
    })
  }

  return (
    <div>
      <Dropdown
        selection
        placeholder='Select by name'
        onChange={handleChange}
        style={{
          width: '120px',
          minWidth: '2em',
          margin: '0 0 8px -80px',
          height: 10,
          minHeight: 10,
        }}
        value={hex}
        options={
          Object.keys(colorNames).map(function(colorName) {
            let colorHex = colorNames[colorName]
            return {
              text: colorName,
              value: colorHex,
              key: colorName,
              icon: {
                name: 'circle',
                style: {
                  color: colorHex,
                },
              },
            }
          })
        } />
    </div>
  )
}

export default PhotoshopColorNames
