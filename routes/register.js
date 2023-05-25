var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const res = require('express/lib/response');

var connection = mysql.createConnection({
  host:'mysqldb',
  user:'patipansixth',
  password:'sixth',
  database:'accounts'
});

/* session  */
router.use(session({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}));

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('register', { session: req.session });
  });

router.get('/auth', function (req, res, next) {
  res.send(200);
});

module.exports = router;
