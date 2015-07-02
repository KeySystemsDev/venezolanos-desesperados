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

.controller('AccountCtrl', function($scope, $ionicPopup, Mensaje) {
  	$scope.formData = {i_correo_fijo : 'Hispanomedios@gmail.com'};

    $scope.enviar = function(formData){
      
      Mensaje.get(formData).$promise.then(function(data) {
            
                    $ionicPopup.alert({ title:    'Mensaje de Enviado',
                                        template: 'El mensaje fue enviado.'});

                    $scope.formData = {i_correo_fijo : 'Hispanomedios@gmail.com'};

                }, function(error) {
                    // error hand
                    console.log(error);
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'No se pudo enviar el mensaje.'});
                });
    }
});
