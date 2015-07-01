angular.module('starter.controllers', [])

.controller('ActoresCtrl', function($scope , $rootScope, Actores ) {
	$scope.actores = Actores.get();

	console.log($scope.actores);
})

.controller('GiraCtrl', function($scope, $rootScope, Giras) {
  	$scope.giras = Giras.get();

  	$scope.id_gira = function(id) {
        $rootScope.id_gira = id;
    }
})

.controller('GiraDetailCtrl', function($scope, $rootScope, Giras) {
	$scope.gira = Giras.get({id:$rootScope.id_gira});
})

.controller('AccountCtrl', function($scope) {
  	$scope.settings = {
    	enableFriends: true
  	};
});
