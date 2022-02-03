'use strict';

StockManagementApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/stockdetails/:id', {
        templateUrl: '/views/StockDetails.html',
        controller: 'StockManagementDetailsController'
    });
    $routeProvider.when('/stockedit/:id', {
        templateUrl: '/views/StockEdit.html',
        controller: 'StockManagementEditController'
    });
    $routeProvider.when('/stockcreate/', {
        templateUrl: '/views/StockCreate.html',
        controller: 'StockManagementCreateController'
    });
    $routeProvider.when('/stockhistory/:id', {
        templateUrl: '/views/StockHistory.html',
        controller: 'StockManagementHistoryController'
    });
    $routeProvider.when('/', {
        templateUrl: '/views/StockManagementList.html',
        controller: 'StockManagementListController'
    }).otherwise({redirectTo: '/'});
});