var express = require('express');
const data = require('../data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.time('Post');
  let id = req.query.id;
  res.render('post', { session: req.session, search : '',data:data[id-1]});
  console.timeEnd('Post');
});


module.exports = router;
