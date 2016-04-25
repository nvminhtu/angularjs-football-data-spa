// ROUTES
footballApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'playersController',
    })
    
    .when('/fixtures', {
        templateUrl: 'pages/fixtures.htm',
        controller: 'fixturesController'
    })
    
    .when('/table', {
        templateUrl: 'pages/leagueTable.htm',
        controller: 'leagueController'
    })
    
});