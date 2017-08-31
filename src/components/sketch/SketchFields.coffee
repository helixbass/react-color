### eslint-disable no-param-reassign ###

import React from 'react'
import reactCSS from 'reactcss'
import color from '../../helpers/color'

import {EditableInput} from '../common'
import ColorNames from '../photoshop/PhotoshopColorNames'

export SketchFields = ({onChange, rgb, hsl, hsv, hex, disableAlpha, colorNames}) ->
  {fields, single, alpha, double, triple, input, label} = reactCSS
    default:
      fields:
        display: 'flex'
        paddingTop: '4px'
      single:
        flex: '1'
        paddingLeft: '6px'
      alpha:
        flex: '1'
        paddingLeft: '6px'
      double:
        flex: '2'
      triple:
        flex: '3'
      input:
        width: '80%'
        padding: '4px 10% 3px'
        border: 'none'
        boxShadow: 'inset 0 0 0 1px #ccc'
        fontSize: '11px'
      label:
        display: 'block'
        textAlign: 'center'
        fontSize: '11px'
        color: '#222'
        paddingTop: '3px'
        paddingBottom: '4px'
        textTransform: 'capitalize'
    disableAlpha:
      alpha:
        display: 'none'
  , {disableAlpha}

  handleChange = ({hex, r, g, b, a, h, s, v}, e) ->
    if hex
      return unless color.isValidHex hex
      onChange {
        hex
        source: 'hex'
      }, e
    else if r or g or b
      onChange
        r: r ? rgb.r
        g: g ? rgb.g
        b: b ? rgb.b
        a: rgb.a
        source: 'rgb'
      , e
    else if a
      a = 0 if a < 0
      a = 100 if a > 100
      a = a / 100

      onChange {
        h: hsv.h
        s: hsv.s * 100
        v: hsv.v * 100
        a: a
        source: 'rgb'
      }, e
    else if h or s or v
      onChange
        h: h ? hsv.h
        s: s ? hsv.s * 100
        v: v ? hsv.v * 100
        a: hsv.a
        source: 'hsv'
      , e

  %div
    .flexbox-fix.[fields]
      .[double]
        %EditableInput.[{input, label}]{
          label: 'hex'
          value: hex.replace '#', ''
          onChange: handleChange
        }
      .[single]
        %EditableInput.[{input, label}]{
          label: 'r'
          value: rgb.r
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
      .[single]
        %EditableInput.[{input, label}]{
          label: 'g'
          value: rgb.g
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
      .[single]
        %EditableInput.[{input, label}]{
          label: 'b'
          value: rgb.b
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
      .[alpha]
        %EditableInput.[{input, label}]{
          label: 'a'
          value: Math.round rgb.a * 100
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '100'
        }

    .flexbox-fix.[fields]
      .[double]
      .[single]
        %EditableInput.[{input, label}]{
          label: 'h'
          value: hsv.h
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
      .[single]
        %EditableInput.[{input, label}]{
          label: 's'
          value: hsv.s
          value: Math.round hsv.s * 100
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
      .[single]
        %EditableInput.[{input, label}]{
          label: 'v'
          value: Math.round hsv.v * 100
          onChange: handleChange
          dragLabel: 'true'
          dragMax: '255'
        }
    .flexbox-fix.[fields]
      .[triple]
        %ColorNames{
          onChange: handleChange
          colorNames, hex: hex unless rgb.a < 1
        }

export default SketchFields
