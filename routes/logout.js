var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.time('Logout');
    req.session.destroy(function(err) {
        // cannot access session here
    })
    res.redirect("/");
    console.timeEnd('Logout');
});

module.exports = router;



