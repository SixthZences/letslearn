var mysql = require('mysql');
var express = require('express');
const router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const { request } = require('http');


// connect to mysql db
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'accounts'
});

router.use(session({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}));

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', async(req, res) => {
  console.time('Index');
  var uname = '';
  if (req.session!=null) {
    var uname = req.session.username;
  }
  res.render('index', { session: req.session, uname : uname});
  //console.log(locals);
  console.timeEnd('Index');
  
  
   
});

module.exports = router;
