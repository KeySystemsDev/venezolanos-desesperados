angular.module('starter.controllers', [])

.controller('ActoresCtrl', function($scope , $rootScope, Actores ) {
	$scope.actores = Actores.get();

	$scope.id_actor = function(id) {
        $rootScope.id_actor = id;
    }
})

.controller('ActoresDetailCtrl', function($scope, $rootScope, Actores) {
	$scope.actor = Actores.get({id:$rootScope.id_actor});
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
