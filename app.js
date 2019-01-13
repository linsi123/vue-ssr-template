var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const proxy = require('http-proxy-middleware');//引入代理中间件
const testRouter = require('./routes/test');

var app = express();

const isProd = process.env.NODE_ENV === 'production'


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));



var options = {
  target: 'https://dmp-admin-test2.umlife.com/', // target host
  changeOrigin: true,               // needed for virtual hosted sites
  pathRewrite: {
    '^/api': '/api'
  }
};



var apiProxy = proxy(options);


app.use('/api', apiProxy);
app.use('/test',testRouter);

if(isProd) {
  app.get('*',require('./api/middlewares/serverSideRender'));
}else {
  app.get('*',require('./api/middlewares/devServerSideRender'))
}
// app.get('*', indexRouter);
// app.use('/users', usersRouter);

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

module.exports = app;
