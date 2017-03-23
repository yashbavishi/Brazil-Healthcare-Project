app.controller('CustomersCtrl', function($scope, $http) {
  $scope.form = {};
  $scope.form.region = '';
  $scope.test = '123';


  
$scope.getRecords =  function(form) {
	var config = {
    params: {
        region: $scope.form.region
    }
}
	$http.get('action.php', config)
   .success(function (response) {$scope.names = response.data; });


}});
