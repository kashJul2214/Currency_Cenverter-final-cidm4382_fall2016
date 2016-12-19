var express = require('express');
var router = express.Router();
var ctrlCurrencyData = require('../controllers/currency');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* CURRENCY DATA – */
router.get('/currencyData/:base', ctrlCurrencyData.currencyDataReadOne);
router.get('/currencyData', ctrlCurrencyData.currencyDataReadAll);

/* DATA */
router.get('/currencyData', ctrlCurrencyData.currencyDataReadAll);

module.exports = router;
