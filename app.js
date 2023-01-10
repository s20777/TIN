'use strict';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employeeRoute');
var employmentRouter = require('./routes/employmentRoute');
var departmentRouter = require('./routes/departmentRoute');
const session = require('express-session');
var app = express();
const authUtils = require('./util/authUtlis')
const cors = require('cors');


const i18n = require('i18n');
i18n.configure({
   locales: ['pl', 'en'], // języki dostępne w aplikacji. Dla każdego z nich należy utworzyć osobny słownik
   directory: path.join(__dirname, 'locales'), // ścieżka do katalogu, w którym znajdują się słowniki
   objectNotation: true, // umożliwia korzstanie z zagnieżdżonych kluczy w notacji obiektowej
   cookie: 'acme-hr-lang', //nazwa cookies, które nasza aplikacja będzie wykorzystywać do przechowania informacji o
});

// add session
app.use(session({
    secret: 'my_secret_password',
    resave: false,
    saveUninitialized: false
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());


app.use(i18n.init);

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;

    if(!res.locals.loginError){
        res.locals.loginError = undefined;
    }

      // console.log('lang',res.locals.lang);
      if(!res.locals.lang) {
        const currentLang = req.cookies['game-rent-lang'];
        res.locals.lang = currentLang;
      }

    next();
});

app.use('/', indexRouter);
app.use('/employees', authUtils.permitAuthenticatedUser, employeeRouter);
app.use('/employments',authUtils.permitAuthenticatedUser, employmentRouter);
app.use('/departments',authUtils.permitAuthenticatedUser, departmentRouter);


//db
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });

const empApiRouter = require('./routes/api/employeeApiRoute');
app.use('/api/employees', empApiRouter);

const deptApiRouter = require('./routes/api/departmentApiRoute');
app.use('/api/departments', deptApiRouter);

const employmentApiRouter = require('./routes/api/employmentApiRoute')
app.use('/api/employments', employmentApiRouter);

const authApiRouter = require('./routes/api/AuthApiRoute');
app.use('/api/auth', authApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});






module.exports = app;
