'use strict';

StockManagementApp.factory('StockManagementService', function ($http, Constants) {
  return {
    getAllFromAPI: function () {
      return $http.get(Constants.API_GATEUSERS_URL);
    },
    getByIdFromAPI: function (id) {
      return $http.get(Constants.API_GATEUSERS_URL+id);
    },
    getHistoryFromAPI: function (id) {
      return $http.get(Constants.API_GATEUSERS_URL+'history/'+id);
    },
    updateStockFromAPI: function (stock) {
      return $http.put(Constants.API_GATEUSERS_URL,stock);
    },
    createStockFromAPI: function (stock) {
      return $http.post(Constants.API_GATEUSERS_URL,stock);
    },
    deleteStockFromAPI: function (stockId) {
      return $http.delete(Constants.API_GATEUSERS_URL+stockId);
    },
  }
});
