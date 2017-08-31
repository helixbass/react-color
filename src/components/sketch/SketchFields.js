// Generated by CoffeeScript 0.1.6
/* eslint-disable no-param-reassign */
import React from 'react';

import reactCSS from 'reactcss';

import color from '../../helpers/color';

import {
  EditableInput
} from '../common';

import ColorNames from '../photoshop/PhotoshopColorNames';

export var SketchFields = function({onChange, rgb, hsl, hsv, hex, disableAlpha, colorNames}) {
  var alpha, double, fields, handleChange, input, label, single, triple;
  ({fields, single, alpha, double, triple, input, label} = reactCSS({
    default: {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      triple: {
        flex: '3'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    disableAlpha: {
      alpha: {
        display: 'none'
      }
    }
  }, {disableAlpha}));
  handleChange = function({hex, r, g, b, a, h, s, v}, e) {
    if (hex) {
      if (!color.isValidHex(hex)) {
        return;
      }
      return onChange({
        hex,
        source: 'hex'
      }, e);
    } else if (r || g || b) {
      return onChange({
        r: r != null ? r : rgb.r,
        g: g != null ? g : rgb.g,
        b: b != null ? b : rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (a) {
      if (a < 0) {
        a = 0;
      }
      if (a > 100) {
        a = 100;
      }
      a = a / 100;
      return onChange({
        h: hsv.h,
        s: hsv.s * 100,
        v: hsv.v * 100,
        a: a,
        source: 'rgb'
      }, e);
    } else if (h || s || v) {
      return onChange({
        h: h != null ? h : hsv.h,
        s: s != null ? s : hsv.s * 100,
        v: v != null ? v : hsv.v * 100,
        a: hsv.a,
        source: 'hsv'
      }, e);
    }
  };
  return <div>
    <div className='flexbox-fix' style={fields}>
      <div style={double}>
        <EditableInput label={'hex'} value={hex.replace('#', '')} onChange={handleChange} style={{input, label}}></EditableInput>
      </div>
      <div style={single}>
        <EditableInput label={'r'} value={rgb.r} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
      <div style={single}>
        <EditableInput label={'g'} value={rgb.g} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
      <div style={single}>
        <EditableInput label={'b'} value={rgb.b} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
      <div style={alpha}>
        <EditableInput label={'a'} value={Math.round(rgb.a * 100)} onChange={handleChange} dragLabel={'true'} dragMax={'100'} style={{input, label}}></EditableInput>
      </div>
    </div>
    <div className='flexbox-fix' style={fields}>
      <div style={double}></div>
      <div style={single}>
        <EditableInput label={'h'} value={hsv.h} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
      <div style={single}>
        <EditableInput label={'s'} value={hsv.s} value={Math.round(hsv.s * 100)} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
      <div style={single}>
        <EditableInput label={'v'} value={Math.round(hsv.v * 100)} onChange={handleChange} dragLabel={'true'} dragMax={'255'} style={{input, label}}></EditableInput>
      </div>
    </div>
    <div className='flexbox-fix' style={fields}>
      <div style={triple}>
        <ColorNames onChange={handleChange} colorNames={colorNames} hex={!(rgb.a < 1) ? hex : void 0}></ColorNames>
      </div>
    </div>
  </div>;
};

export default SketchFields;
