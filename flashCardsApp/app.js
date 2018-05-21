const express = require('express'),
      bodyPaser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      app = express();

app.use(bodyPaser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set("view engine", "pug");

// test for error handling
// app.use((req, res, next) => {
//   const err = new Error('Something went wrong...lulz');
//   err.status = 500;
//   next(err);
// })

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');


app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(5000, () => {
  console.log("listening on port 5000...");
});
