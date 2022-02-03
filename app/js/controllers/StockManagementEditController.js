'use strict';

StockManagementApp.controller('StockManagementEditController',
    function ($scope, $timeout, StockManagementService, $location, $routeParams) {
        $scope.title = 'Edit Stock Details';
        $scope.inventory = null;
        $scope.expiryDate = new Date();

        if ($routeParams.id) {
            StockManagementService.getByIdFromAPI($routeParams.id).then(function successCallback(res) {                
                $scope.inventory = res.data.stock;
                $scope.expiryDate = new Date($scope.inventory.expiryDate);
            },
                function errorCallback(response) {
                    console.log("Unable to perform get request");
                }
            );
        }   


        $scope.reset = function() {
            $scope.inventory = null;
        }

        $scope.submit = function(inv) {     
            inv.expiryDate = $scope.expiryDate;                   
            StockManagementService.updateStockFromAPI(inv).then(function successCallback(res) {
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