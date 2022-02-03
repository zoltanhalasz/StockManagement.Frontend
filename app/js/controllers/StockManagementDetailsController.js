'use strict';

StockManagementApp.controller('StockManagementDetailsController',
    function ($scope, $timeout, $routeParams, StockManagementService, $location) {
        $scope.title = 'Stock Details';
        $scope.inventory = null;        

        if ($routeParams.id) {
            StockManagementService.getByIdFromAPI($routeParams.id).then(function successCallback(res) {                
                $scope.inventory = res.data.stock;                
            },
                function errorCallback(response) {
                    console.log("Unable to perform get request");
                }
            );
        }    
        $scope.goBack = function() {
            $location.path('../');
        }    
    });