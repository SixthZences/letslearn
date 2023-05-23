var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const res = require('express/lib/response');
const data = require('../data');
const app = require('../app');


router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', async(req, res, next)=> {
  let category_search = req.query.category;
  if (req.session.search != null)
  {
    console.time('Posts');
    var search = req.session.search;
    res.render('posts', { session: req.session, search : search, data:data,cat:category_search });
    console.timeEnd('Posts');
  }
  else
  {
    console.time('Posts');
    res.render('posts', { session: req.session, search : null,data:data,cat:category_search });
    console.timeEnd('Posts');
  }
});
router.get('/search', async(req, res, next)=> {
  console.time('PostsSearch');
  var search = req.body.search;
  res.render('posts', { session: req.session, search : search});
  console.timeEnd('PostsSearch');
  
});

module.exports = router;