"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
;
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
    attributes = _ref.attributes;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: "".concat(attributes.btn_color)
    },
    type: attributes.type,
    value: attributes.value
  }, !!attributes.icon && /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: attributes.icon,
    style: {
      color: "#ffffff"
    }
  }), attributes.value);
};
var _default = Button;
exports.default = _default;