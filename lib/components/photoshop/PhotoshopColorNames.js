'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoshopColorNames = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopColorNames = exports.PhotoshopColorNames = function PhotoshopColorNames(_ref) {
  var onChange = _ref.onChange,
      colorNames = _ref.colorNames,
      hex = _ref.hex;

  if (!colorNames) return null;

  var handleChange = function handleChange(e, _ref2) {
    var value = _ref2.value;

    onChange({
      hex: value.replace('#', ''),
      e: e
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_semanticUiReact.Dropdown, {
      selection: true,
      placeholder: 'Select by name',
      onChange: handleChange,
      style: {
        width: '120px',
        minWidth: '2em',
        margin: '0 0 8px -80px',
        height: 10,
        minHeight: 10
      },
      value: hex && Object.keys(colorNames).some(function (name) {
        return colorNames[name] === hex;
      }) ? hex : '',
      options: Object.keys(colorNames).map(function (colorName) {
        var colorHex = colorNames[colorName];
        return {
          text: colorName,
          value: colorHex,
          key: colorName,
          icon: {
            name: 'circle',
            style: {
              color: colorHex
            }
          }
        };
      }) })
  );
};

exports.default = PhotoshopColorNames;