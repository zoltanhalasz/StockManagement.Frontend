'use strict';

//create anonymous function and invoke is immediately, like this (function(...){...})()
StockManagementApp.constant('Constants', (function () {
    var baseUrl = 'https://localhost:5001/api/';

    return {
        API_BASE_URL: baseUrl,
        API_GATEUSERS_URL: baseUrl + 'stock/'
    }    
})());