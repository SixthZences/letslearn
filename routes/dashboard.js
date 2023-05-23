var mysql = require('mysql');
var express = require('express');
const router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const { request } = require('http');
const results = require('../manage_Data');


// connect to mysql db
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'accounts'
});

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(session({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}));



/* GET home page. */
router.get('/', async(req, res) => {
  console.time('Dashboard');
  var uname = '';
  if (req.session!=null) {
    var uname = req.session.username;
    var data_d = results
  }
  if (req.session.loggedin == undefined && req.session.username != 'admin'){
    res.redirect('/login');
  }
  res.render('dashboard', { session: req.session, uname : uname, data : data_d});
  console.timeEnd('Dashboard');
    //console.log(locals);
   
      
   
});

module.exports = router;