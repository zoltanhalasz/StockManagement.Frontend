'use strict';

StockManagementApp.controller('StockManagementListController',
    function ($scope, $timeout, StockManagementService) {
        $scope.title = 'Stock List';        

        $scope.delete = function(invId) {               
            StockManagementService.deleteStockFromAPI(invId).then(function successCallback(res) {                
                $scope.inventoryList = $scope.inventoryList.filter((elem) => {
                    return elem.id !==invId;
                });                
            },
                function errorCallback(response) {
                    console.log("Unable to perform Delete request");
                }
            );

        }
        StockManagementService.getAllFromAPI().then(function successCallback(res) {            
            $scope.inventoryList = res.data.stocks;
        },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );
    });