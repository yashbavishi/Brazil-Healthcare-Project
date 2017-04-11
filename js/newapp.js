var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
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

// app.directive('app-info', function(){
//   return{
//     restrict: 'E',
//     scope: {
//       info: '='
//     },
//  templateUrl: 'js/controller/app-info.html'
//   };
 
// });
// $scope.search = function() {
		
// 		// Create the http post request
// 		// the data holds the keywords
// 		// The request is a JSON request.
// 		$http.post($scope.url, { "data" : $scope.keywords}).
// 		success(function(data, status) {
// 			$scope.status = status;
// 			$scope.data = data;
// 			$scope.result = data; // Show result from server in our <pre></pre> element
// 		})