import React from 'react'

export const PhotoshopColorNames = ({onChange, colorNames, hex}) => {
  if (! colorNames) return null
  console.log({hex})

  const handleChange = (e) => {
    console.log({e})
    onChange({
      hex: e.target.value.replace('#', ''),
      e
    })
  }

  return (
    <div>
      <select
        style={{
          maxWidth: 100,
          margin: '0 0 8px',
        }}
        onChange={handleChange}
        value={hex}>
        <option value=''>Select by name:</option>
        {Object.keys(colorNames).map(function(colorName) {
          let colorHex = colorNames[colorName]
          return (
            <option value={colorHex} key={colorName}>
              // <span style={{
              //   width: 20,
              //   backgroundColor: colorHex,
              //   margin: '0 5px 0 0'
              // }}></span>
              {colorName} {colorHex}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default PhotoshopColorNames
