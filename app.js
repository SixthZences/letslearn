var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var alert = require('alert');
const res = require('express/lib/response');

var createError = require('http-errors');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');

// connect to mysql db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'accounts'
});

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var postsRouter = require('./routes/posts');
var postRouter = require('./routes/post');
var registerRouter = require('./routes/register');
var dashboardRouter = require('./routes/dashboard');
const http = require('http');
const port = 3000;
const server = http.createServer();
var app = express();

app.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(__dirname + "/resource"))
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/posts', postsRouter);
app.use('/post', postRouter);
app.use('/register', registerRouter);
app.use('/dashboard', dashboardRouter);




app.use(session({
  secret: 'secret',
  resave: true,
  cookie: { maxAge: 86400000 },
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', function (req, res) {
  const id = -1;
  req.session.id = id;
  console.log("72:app.js U r here");
  console.log(id);
  app.use(function (req, res, next) {
    res.locals.id = req.session.id;
    next();
  });
});

app.post('/posts/search', function (req, res) {
  const search = req.body.search;
  const cat = req.query.cat;
  var adr = '/posts?category=';

  req.session.search = search;
  if (search) {
    app.use(function (req, res, next) {
      res.locals.search = req.session.search;


      next();
    });
    res.redirect(adr.concat(cat));
  }
  else {
    res.redirect(adr.concat(cat));
  }

});
  

app.post('/login/auth', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        request.session.accname = results[0].accname;



        app.use(function (req, res, next) {
          response.locals.username = request.session.username;
          response.locals.accname = request.session.accname;

          next();
        });
        response.redirect('/');
      }
      else {
        alert('Incorrect Username and/or Password')
        response.redirect('/login');
      }
      response.end();
    });
  }
  else {
    alert('Please enter Username and Password');
    response.redirect('/login');
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
