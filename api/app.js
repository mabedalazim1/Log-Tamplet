const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./models')
const Role = db.role;
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");

const app = express();
// Cros
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

// Connect DB
db.sequelize.sync().then(() => {
  console.log('Drop and re-sync db.')
  // initial();
})
function initial () {
  Role.create({
    id: 1,
    name: 'admin'
  })
  Role.create({
    id: 2,
    name: 'teacher'
  })
  Role.create({
    id: 3,
    name: 'student'
  })
  Role.create({
    id: 4,
    name: 'moderator'
  })
  Role.create({
    id: 5,
    name: 'user'
  })
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// Routers
require('./routes/turorial.routes')(app)
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use("/testAPI", testAPIRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
