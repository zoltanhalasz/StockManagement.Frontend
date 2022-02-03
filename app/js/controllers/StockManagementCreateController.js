'use strict';

StockManagementApp.controller('StockManagementCreateController',
    function ($scope, $timeout, StockManagementService, $location, $routeParams) {
        $scope.title = 'Create new stock';
        $scope.inventory = null;
        $scope.expiryDate = new Date();

        $scope.reset = function() {
            $scope.inventory = null;
        }

        $scope.submit = function(inv) {                        
            $scope.inventory.expiryDate = $scope.expiryDate;
            StockManagementService.createStockFromAPI(inv).then(function successCallback(res) {
                $location.path('../');
            },
                function errorCallback(response) {
                    console.log("Unable to perform POST request");
                }
            );

        }

        $scope.goBack = function() {
            $location.path('../');
        }  
    });