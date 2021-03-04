var app = angular.module('aplikacja', []);

app.controller('kontrolerTabeliNauczycieli', ['$scope', '$http', function($scope, $http) {

    $http.get('data/belfry.json').success(function(data){
        $scope.belfrowie = data;
    }); // Nie działa w Chrome, a Firefoxie tak

}]); //MojKontroler