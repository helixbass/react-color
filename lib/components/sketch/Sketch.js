'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sketch = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = require('../common');

var _SketchFields = require('./SketchFields');

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = require('./SketchPresetColors');

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      start_color = _ref.start_color,
      colorNames = _ref.colorNames,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers;

  var activeColor, alpha, color, controls, hue, picker, reset_to_start_color, saturation, sliders, startColor, start_rgb, styles;
  start_rgb = (start_color != null ? start_color.r : void 0) ? start_color : rgb;
  styles = (0, _reactcss2.default)({
    default: {
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      startColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + start_rgb.r + ',' + start_rgb.g + ',' + start_rgb.b + ',' + start_rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    },
    disableAlpha: {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });
  var _styles = styles;
  picker = _styles.picker;
  saturation = _styles.saturation;
  controls = _styles.controls;
  sliders = _styles.sliders;
  hue = _styles.hue;
  alpha = _styles.alpha;
  color = _styles.color;
  activeColor = _styles.activeColor;
  startColor = _styles.startColor;

  reset_to_start_color = function reset_to_start_color() {
    return onChange(start_color);
  };
  return _react2.default.createElement(
    'div',
    { className: 'sketch-picker', style: picker },
    _react2.default.createElement(
      'div',
      { style: saturation },
      _react2.default.createElement(_common.Saturation, { hsl: hsl, hsv: hsv, onChange: onChange, style: styles.Saturation })
    ),
    _react2.default.createElement(
      'div',
      { className: 'flexbox-fix', style: controls },
      _react2.default.createElement(
        'div',
        { style: sliders },
        _react2.default.createElement(
          'div',
          { style: hue },
          _react2.default.createElement(_common.Hue, { hsl: hsl, onChange: onChange, style: styles.Hue })
        ),
        _react2.default.createElement(
          'div',
          { style: alpha },
          _react2.default.createElement(_common.Alpha, { rgb: rgb, hsl: hsl, renderers: renderers, onChange: onChange, style: styles.Alpha })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: activeColor })
      ),
      _react2.default.createElement(
        'div',
        { onClick: reset_to_start_color, title: 'Click to revert to previous color', style: color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: startColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, { rgb: rgb, hsl: hsl, hsv: hsv, hex: hex, onChange: onChange, disableAlpha: disableAlpha, colorNames: colorNames }),
    _react2.default.createElement(_SketchPresetColors2.default, { colors: presetColors, onClick: onChange, onSwatchHover: onSwatchHover })
  );
}; // Generated by CoffeeScript 0.1.6


Sketch.defaultProps = {
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  width: 200
};

exports.default = (0, _common.ColorWrap)(Sketch);