'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formatDate = require('./format-date');

var _formatDate2 = _interopRequireDefault(_formatDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMomentCountDown = function (_Component) {
  _inherits(ReactMomentCountDown, _Component);

  function ReactMomentCountDown(props) {
    _classCallCheck(this, ReactMomentCountDown);

    var _this = _possibleConstructorReturn(this, (ReactMomentCountDown.__proto__ || Object.getPrototypeOf(ReactMomentCountDown)).call(this, props));

    _this.tick = function () {
      var countdown = (0, _formatDate2.default)(new Date(), _this.props.toDate, _this.props.formatMask);

      if (countdown === '00:00:00') {
        window.clearInterval(_this.timer);

        if (_this.props.onCountdownEnd) {
          _this.props.onCountdownEnd();
        }
      }

      _this.setState({
        countdown: countdown
      });

      if (_this.props.onTick) {
        _this.props.onTick(countdown);
      }
    };

    _this.state = {
      countdown: null
    };
    return _this;
  }

  _createClass(ReactMomentCountDown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();

      this.timer = window.setInterval(this.tick.bind(this), 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.state.countdown
      );
    }
  }]);

  return ReactMomentCountDown;
}(_react.Component);

;

ReactMomentCountDown.propTypes = {
  toDate: _react2.default.PropTypes.instanceOf(Date).isRequired,
  formatMask: _react2.default.PropTypes.string.isRequired,
  onTick: _react2.default.PropTypes.func,
  onCountdownEnd: _react2.default.PropTypes.func
};

ReactMomentCountDown.defaultProps = {
  formatMask: 'HH:mm:ss',
  onTick: null,
  onCountdownEnd: null
};

exports.default = ReactMomentCountDown;