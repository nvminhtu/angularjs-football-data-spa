// DIRECTIVES
footballApp.directive("playerList", function() {
   return {
       restrict: 'EA',
       templateUrl: 'directives/playerList.html',
       replace: true,
       transclude: true
   }
});

footballApp.directive("fixtureList", function() {
   return {
       restrict: 'EA',
       templateUrl: 'directives/fixtureList.html',
       replace: true,
   }
});

footballApp.directive("leagueTable", function() {
   return {
       restrict: 'EA',
       templateUrl: 'directives/leagueTable.html',
       replace: true,
   }
});