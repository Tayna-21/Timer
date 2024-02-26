"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Button = _interopRequireDefault(require("./components/Button"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App() {
  var _useState = (0, _react.useState)({
      hour: 0,
      min: 0,
      sec: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    enabled = _useState4[0],
    setEnabled = _useState4[1];
  var renderCounterRef = (0, _react.useRef)(0);
  var _useState5 = (0, _react.useState)({
      type: 'button',
      value: 'play',
      btn_color: '#14b8a6',
      icon: _freeSolidSvgIcons.faPlay
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    button = _useState6[0],
    setButton = _useState6[1];
  (0, _react.useEffect)(function () {
    var intervalId;
    if (!!enabled) {
      intervalId = setInterval(function () {
        setTime({
          hour: new Date().getHours(),
          min: new Date().getMinutes(),
          sec: new Date().getSeconds()
        });
        renderCounterRef.current += 1;
      }, 1000);
    }
    ;
    return function () {
      return clearInterval(intervalId);
    };
  }, [enabled]);
  var handleClick = function handleClick() {
    if (button.value === 'play') {
      setEnabled(true);
      setButton(function (previousState) {
        return _objectSpread(_objectSpread({}, previousState), {}, {
          value: 'pause',
          btn_color: '#0ea5e9',
          icon: _freeSolidSvgIcons.faPause
        });
      });
    } else if (button.value === 'pause') {
      setEnabled(false);
      setButton(function (previousState) {
        return _objectSpread(_objectSpread({}, previousState), {}, {
          value: 'resume',
          icon: _freeSolidSvgIcons.faPlay
        });
      });
    } else if (button.value === 'resume') {
      setEnabled(true);
      setButton(function (previousState) {
        return _objectSpread(_objectSpread({}, previousState), {}, {
          value: 'pause',
          icon: _freeSolidSvgIcons.faPause
        });
      });
    }
    ;
  };
  var handleResetClick = function handleResetClick() {
    setTime({
      hour: 0,
      min: 0,
      sec: 0
    });
    setEnabled(false);
    setButton({
      type: 'button',
      value: 'play',
      btn_color: '#14b8a6',
      icon: _freeSolidSvgIcons.faPlay
    });
    renderCounterRef.current = 0;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    className: "timer"
  }, String(time.hour).padStart(2, '0'), ":", String(time.min).padStart(2, '0'), ":", String(time.sec).padStart(2, '0')), /*#__PURE__*/React.createElement("p", null, "Number of component renders: ", /*#__PURE__*/React.createElement("span", null, renderCounterRef.current)), /*#__PURE__*/React.createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleClick,
    attributes: button
  }), (button.value !== 'play' || button.value === 'resume') && /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleResetClick,
    attributes: {
      type: 'reset',
      value: 'reset',
      btn_color: '#eab308'
    }
  })));
}
;
var _default = App;
exports.default = _default;