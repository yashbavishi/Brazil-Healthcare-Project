// app.controller('CustomersCtrl', function($scope, $http) {
//   $scope.form = {};
//   $scope.form.region = '';
//   $scope.test = '123';


  
// $scope.getRecords =  function(form) {
// 	var config = {
//     params: {
//         region: $scope.form.region
//     }
// }
// 	$http.get('action.php', config)
//    .success(function (response) {$scope.names = response.data; });


// }});

app.controller('CustomersCtrl', function($scope, $http, $window) {
  $scope.form = {};
  $scope.names = [];
  $scope.form.region = {};
  $scope.SocioEconomicDataColumns = [ "All", "State_cap", "Coin_code", "State_code", "Reigon", "gdp", "worker_expe", "expe_own", "edu_expense", "literacyrate_15plus", "gini_index", "lgdpr_pc", "inpc", "lgdpr", "min_wage", "developed", "efici_expvida_exponencial", "efici_mort_inf_expo", "illitera", "illiteibge", "mayor_school", "may_sch_code", "areakm2", "aream2", "distance_from_capital", "capital_state", "densidade"];
  $scope.PopulationAndAgeColumns = ['All', 'ageunder1', 'age_14', 'age_49', 'age_1014', 'age_1519', 'age_2029', 'age_3039', 'age_4049', 'age_5059', 'age_6069', 'age_7079', 'more80', 'popb15', 'Pop_sus', 'pop40y' ];
  $scope.HealthCareColumns = ['All', 'health_expend_tot', 'trans_sus', 'diabe_reg', 'diabe_track', 'insurance', 'bed', 'new_diabe_reg', 'new_diabe_track', 'obesity', 'diabe_0to14', 'diabe_15', 'sus_rate', 'psf_cove', 'sanita'];
  $scope.Years = ['All', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'];
  $scope.Regions = ['All', '1', '2', '3', '4', '5'];
  $scope.States = ['All', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'Go', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'To'];
  $scope.form.SocioEconomicDataColumn = {};
  $scope.form.offset = 500;
  $scope.records = [];
  $scope.myVar = false;
  
$scope.getRecords =  function(form) {
  $scope.myVar = true;
	var conditions = {
    params: {
        region: JSON.stringify($scope.form.region),
        year: JSON.stringify($scope.form.year),
        state: JSON.stringify($scope.form.state),
        SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
		PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
		HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
		offset: '0'
		
    }
}
	$http.get('action.php', conditions)
   .then(function (response) {
   	//$scope.names = response.data;
   	// var oldJSON = $scope.records;
   	// //alert(JSON.stringify(oldJSON));
   	// if(oldJSON != '') {
   	// 	oldJSON = JSON.parse(JSON.stringify($scope.records));
   	// 	var someObj = JSON.parse(JSON.stringify(response.data));

   	// 	for(var index in someObj) {
   	// 		oldJSON.push(someObj[index]);
   	// 	}
   	// } else {
   	// 	oldJSON = JSON.parse(JSON.stringify(response.data));
   	// }
   	$scope.records = JSON.parse(JSON.stringify(response.data));
   	//alert(JSON.stringify(oldJSON));
   	//$scope.records = angular.merge($scope.records,$scope.names); 
   });
   //records = records.concat($scope.names);
   
//$window.location.href = '/Brazil-Healthcare-Project/sample.html'

$scope.form.offset += 100; 


}

$scope.getMoreRecords =  function(form) {
	var conditions = {
    params: {
        region: JSON.stringify($scope.form.region),
        year: JSON.stringify($scope.form.year),
        state: JSON.stringify($scope.form.state),
        SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
		PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
		HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
		offset: $scope.form.offset
		
    }
}
	
	$http.get('action.php', conditions)
   .then(function (response) {
   	//$scope.names = response.data;
   	var oldJSON = $scope.records;
   	//alert(JSON.stringify(oldJSON));
   	if(oldJSON != '') {
   		oldJSON = JSON.parse(JSON.stringify($scope.records));
   		var someObj = JSON.parse(JSON.stringify(response.data));

   		for(var index in someObj) {
   			oldJSON.push(someObj[index]);
   		}
   	} else {
   		oldJSON = JSON.parse(JSON.stringify(response.data));
   	}
   	$scope.records = oldJSON;
   	//alert(JSON.stringify(oldJSON));
   	//$scope.records = angular.merge($scope.records,$scope.names); 
   });
   //records = records.concat($scope.names);
   
//$window.location.href = '/Brazil-Healthcare-Project/sample.html'

$scope.form.offset += 100; 


}

});
