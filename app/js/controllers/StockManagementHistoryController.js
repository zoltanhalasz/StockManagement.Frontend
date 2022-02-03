'use strict';

StockManagementApp.controller('StockManagementHistoryController',
    function ($scope, $timeout, StockManagementService, $routeParams) {
        $scope.title = 'Stock History List';

        StockManagementService.getHistoryFromAPI($routeParams.id).then(function successCallback(res) {
            $scope.historyJSON = res.data;
        },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );


    });