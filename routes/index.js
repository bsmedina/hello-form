const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const novoServico = req.body;
  console.log(novoServico);

  res.redirect('/');
})

module.exports = router;
