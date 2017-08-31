import React from 'react'
import reactCSS from 'reactcss'

import {ColorWrap, Saturation, Hue, Alpha, Checkboard} from '../common'
import SketchFields from './SketchFields'
import SketchPresetColors from './SketchPresetColors'

export Sketch = ({
  width
  rgb, hex, hsv, hsl
  start_color, colorNames
  onChange, onSwatchHover, disableAlpha, presetColors, renderers
}) ->
  start_rgb =
    if start_color?.r
      start_color
    else
      rgb
  styles = reactCSS
    default:
      picker: {
        width
        padding: '10px 10px 0'
        boxSizing: 'initial'
        background: '#fff'
        borderRadius: '4px'
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      }
      saturation:
        width: '100%'
        paddingBottom: '75%'
        position: 'relative'
        overflow: 'hidden'
      Saturation:
        radius: '3px'
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      controls:
        display: 'flex'
      sliders:
        padding: '4px 0'
        flex: '1'
      color:
        width: '24px'
        height: '24px'
        position: 'relative'
        marginTop: '4px'
        marginLeft: '4px'
        borderRadius: '3px'
      activeColor:
        absolute: '0px 0px 0px 0px'
        borderRadius: '2px'
        background: "rgba(#{ rgb.r },#{ rgb.g },#{ rgb.b },#{ rgb.a })"
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      startColor:
        absolute: '0px 0px 0px 0px'
        borderRadius: '2px'
        background: "rgba(#{ start_rgb.r },#{ start_rgb.g },#{ start_rgb.b },#{ start_rgb.a })"
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      hue:
        position: 'relative'
        height: '10px'
        overflow: 'hidden'
      Hue:
        radius: '2px'
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'

      alpha:
        position: 'relative'
        height: '10px'
        marginTop: '4px'
        overflow: 'hidden'
      Alpha:
        radius: '2px'
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
    disableAlpha:
      color:
        height: '10px'
      hue:
        height: '10px'
      alpha:
        display: 'none'
  , {disableAlpha}
  {
    picker, saturation, controls, sliders, hue,
    alpha, color, activeColor, startColor
  } = styles

  reset_to_start_color = ->
    onChange start_color

  .sketch-picker.[picker]
    .[saturation]
      %Saturation.[styles.Saturation]{
        hsl, hsv, onChange
      }
    .flexbox-fix.[controls]
      .[sliders]
        .[hue]
          %Hue.[styles.Hue]{
            hsl, onChange
          }
        .[alpha]
          %Alpha.[styles.Alpha]{
            rgb, hsl, renderers, onChange
          }
      .[color]
        %Checkboard
        .[activeColor]
      .[color]{
        onClick: reset_to_start_color
        title: 'Click to revert to previous color'
      }
        %Checkboard
        .[startColor]

    %SketchFields{
      rgb, hsl, hsv, hex, onChange, disableAlpha, colorNames
    }
    %SketchPresetColors{
      colors: presetColors
      onClick: onChange
      onSwatchHover
    }

Sketch.defaultProps =
  presetColors: [
    '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE'
    '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'
  ]
  width: 200

export default ColorWrap Sketch
