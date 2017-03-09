var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $scope.form = {};
  $scope.form.region = '';

  
$scope.getRecords =  function(form) {
	var config = {
    params: {
        region: $scope.form.region
    }
}
	$http.get('action.php', config)
   .then(function (response) {$scope.names = response.data.records;});
}});

app.directive('appInfo', function(){
  return{
    restrict: 'E',
    scope: {
      info: '='
    },
 templateUrl: 'js/dcontroller/appInfo.html'
  };
 
});