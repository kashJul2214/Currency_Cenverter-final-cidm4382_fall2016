var mongoose = require('mongoose');
var CurrencyData = mongoose.model('CurrencyData');

//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//// CURRENCY DATA ////////////////////////////////////////////////////////////////
/* GET all CurrencyData records */
module.exports.currencyDataReadAll = function(req, res) {
    console.log("Finding all Currency Data Records", req);

    CurrencyData
        .find({})
        .exec(function(err, currencyData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(currencyData);
            sendJSONresponse(res, 200, currencyData);
        });
};