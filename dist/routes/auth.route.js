"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../controllers/auth.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/signup', _auth.signup_post);
router.post('/login', _auth.login_post);
router.get('/user', _auth.userProfile);
var _default = router;
exports.default = _default;