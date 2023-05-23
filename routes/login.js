var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const res = require('express/lib/response');


// connect to mysql db
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'accounts'
});
-
/* session  */
router.use(session({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}));


/* GET home page. */
router.get('/', function(req, res, next) {
  console.time('Login');
  res.render('login', { session: req.session });
  console.timeEnd('Login');
});

router.get('/auth', function (req, res, next) {
  console.time('LoginAuth');
  res.send(200);
  console.timeEnd('LoginAuth');
})

module.exports = router;

