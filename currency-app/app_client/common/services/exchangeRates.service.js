(function() {

    angular
        .module('currencyApp')
        .service('OpenExchangeRates', openExchangeRates);

    openExchangeRates.$inject = ['$http', 'KeyStore'];

    function openExchangeRates($http, KeyStore) {
        var getRate = function(base) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //e0399816bba24c5a99989781249b570e
                    var openexchangerateskey = keys.OPEN_EXCHANGE_RATES_KEY;
                    return $http.jsonp('https://openexchangerates.org/api/latest.json?app_id=e0399816bba24c5a99989781249b570e&base=usd' +
                        openexchangerateskey + '/' + process.env.OPEN_EXCHANGE_RATES_KEY + '/' + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        var getRate2 =  function(base){
            return $http.jsonp('https://openexchangerates.org/api/latest.json?app_id=e0399816bba24c5a99989781249b570e&base=usd' +
                base + ',' + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        }        

        return {
            getRate: getRate,
            getRate2 : getRate2
        };
    }
    
})();
