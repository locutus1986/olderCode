const express = require('express'),
      router = express.Router();

//routes
router.get('/', (req, res) => {
  const username = req.cookies.username;
    username
      ? res.render('index', {username})
      : res.redirect('/hello');
});

router.get('/hello', (req, res) => {
  const username = req.cookies.username;
    username
      ? res.redirect('/')
      : res.render('hello');
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
})

module.exports = router;
