const express = require('express'),
      router = express.Router(),
      {data} = require('../data/flashcardData.json'),
      {cards} = data;

router.get('/', (req, res) => {
  const numCards = cards.length,
        randomCard = Math.floor(Math.random() * numCards);
  res.redirect(`../cards/${randomCard}`);
});

router.get('/:id', (req, res) => {
  const { side } = req.query,
        { id } = req.params;

  if ( !side ) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  const {username} = req.cookies,
        text = cards[id][side],
        { hint } = cards[id],
        templateData = { id, text, username };

        if(side === 'question'){
          templateData.hint = hint;
          templateData.sideToShow = 'answer';
          templateData.sideToShowDisplay = 'Answer';
        }else if(side === 'answer'){
          templateData.sideToShow = 'question';
          templateData.sideToShowDisplay = 'Question';
        }
  res.render('cards', templateData);
});

module.exports = router;
