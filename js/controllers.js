// PLAYERS/SQUAD CONTROLLERS

footballApp.controller('playersController', ['$scope', '$http', function($scope, $http) {
   
   var getPlayers = function() {
       
       $http.defaults.headers.common['X-Auth-Token'] = '23596f16656d4b68aa893166a4a60384';
       $http.get('http://api.football-data.org/v1/teams/67/players')
        .success(function(data){
            $scope.players =  data.players;
            console.log($scope.players);
        });
   }
 
   getPlayers();
}   
]);

// FIXTURES CONTROLLERS

footballApp.controller('fixturesController', ['$scope', '$http', function($scope, $http) {
   
  var getFixtures = function() {
       
      $http.defaults.headers.common['X-Auth-Token'] = '23596f16656d4b68aa893166a4a60384';
      $http.get('http://api.football-data.org/v1/teams/67/fixtures')
        .success(function(data){
            $scope.fixtures =  data.fixtures;
            console.log($scope.fixtures);
        });
  }
    
    getFixtures();
}   
]);

// FIXTURES CONTROLLERS

footballApp.controller('leagueController', ['$scope', '$http', function($scope, $http) {
   
  var getTable = function() {
       
      $http.defaults.headers.common['X-Auth-Token'] = '23596f16656d4b68aa893166a4a60384';
      $http.get('http://api.football-data.org/v1/soccerseasons/398/leagueTable')
        .success(function(data){
            $scope.table =  data.standing;
            console.log($scope.table);
        });
  }
    
    getTable();
}   
]);