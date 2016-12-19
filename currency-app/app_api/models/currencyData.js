var mongoose = require('mongoose');

var CurrencySchema = new mongoose.Schema({
	countryName: String,
	base: String,
	currencyName: String,
	symbol: String

});

mongoose.model('CurrencyData', CurrencySchema);