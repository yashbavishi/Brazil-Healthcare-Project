app.controller('CustomersCtrl', function($scope, $http, $window, $location, $anchorScroll) {
  $scope.form = {};
  $scope.masterform = {};
  $scope.names = [];
  $scope.SocioEconomicDataColumns = [ {value: 'All', name: 'All'}, {value: 'gdp', name: "GDP"}, {value: "worker_expe", name: 'Exp On Health Worker'}, {value: "expe_own", name: 'Municipal Self Health Exp'}, {value: "edu_expense", name: 'Municipal Edu Exp'},  {name: 'Liter Rate 15+', value: "literacyrate_15plus"}, {name: 'Gini Index', value:  "gini_index"},  {name: 'Log GDP pc Y2000', value: "lgdpr_pc"}, {name: 'Log GDP Y2000', value:  "lgdpr"}, {name: 'Inflation Index', value:  "inpc"}, {name: 'Min Wage', value:  "min_wage"}, {name: 'Developed', value:  "developed"}, {name: 'Efficiency By Life Exp', value:  "efici_expvida_exponencial"}, {name: 'Efficiency By Inf Mortality', value:  "efici_mort_inf_expo"}, {name: 'Illiteral Rate SUS', value:  "illitera"}, {name: 'Illiteral Rate Census', value:  "illiteibge"}, {name: 'Mayor Edu', value:  "mayor_school"}, {name: 'Mayor Edu Code', value:  "may_sch_code"}, {name: 'Area (km2)', value:  "areakm2"}, {name: 'Area (m2)', value:  "aream2"}, {name: 'Dis to Capital', value:  "distance_from_capital"}, {name: 'Capital State', value:  "capital_state"}, {name: 'Pop Density', value:  "densidade"}];
  $scope.PopulationAndAgeColumns = [ {name: 'All', value: 'All'}, {name: 'Population < 1', value: 'ageunder1'}, {name: 'Population 1-4', value: 'age_14'}, {name: 'Population 5-9', value: 'age_49'}, {name: 'Population 10-14', value: 'age_1014'}, {name: 'Population 15-19', value: 'age_1519'}, {name: 'Population 20-29', value: 'age_2029'}, {name: 'Population 30-39', value: 'age_3039'}, {name: 'Population 40-49', value: 'age_4049'}, {name: 'Population 50-59', value: 'age_5059'}, {name: 'Population 60-69', value: 'age_6069'}, {name: 'Population 70-79', value: 'age_7079'}, {name: 'Population > 80', value: 'more80'}, {name: 'Population < 15', value: 'popb15'}, {name: 'Population TCU', value: 'Pop_sus'}, {name: 'Population > 40', value: 'pop40y'}];
  $scope.HealthCareColumns = [ {name: 'All', value: 'All'}, {name: 'Municipal Health Exp', value: 'health_expend_tot'}, {name: 'SUS Health Transfer', value: 'trans_sus'}, {name: 'SUS Diabetes Register', value: 'diabe_reg'}, {name: 'SUS Diabetes Tracked', value: 'diabe_track'}, {name: 'Percentage Insured', value: 'insurance'}, {name: 'Municipal No. Beds', value: 'bed'}, {name: 'New SUS Diabetes Register', value: 'new_diabe_reg'}, {name: 'New SUS Diabetes Tracked', value: 'new_diabe_track'}, {name: 'Obesity', value: 'obesity'}, {name: 'Diabetes 0-14', value: 'diabe_0to14'}, {name: 'Diabetes > 15', value: 'diabe_15'}, {name: 'SUS Health Rate', value: 'sus_rate'}, {name: 'PSF Coverage', value: 'psf_cove'}, {name: 'Sanitation', value: 'sanita'}];
  $scope.Years = ['All', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'];
  $scope.Regions = [{value: 'All', name: 'All'}, {value: '1', name: 'North'}, {value: '2', name: 'North-East'}, {value: '3', name: 'Center-West'}, {value: '4', name: 'South'}, {value: '5', name: 'South-East'}];
  $scope.States = [ {name: 'All', value: 'All'}, {name: 'Acre', value: 'AC'}, {name: 'Alagoas', value: 'AL'}, {name: 'Amazonas', value: 'AM'}, {name: 'Amapa', value: 'AP'}, {name: 'Bahia', value: 'BA'}, {name: 'Ceara', value: 'CE'}, {name: 'Distrito Federal', value: 'DF'}, {name: 'Espirito Santo', value: 'ES'}, {name: 'Goias', value: 'Go'}, {name: 'Maranhao', value: 'MA'}, {name: 'Minas Gerais', value: 'MG'}, {name: 'MatoGrosso do Sul', value: 'MS'}, {name: 'MatoGrosso', value: 'MT'}, {name: 'Para', value: 'PA'}, {name: 'Paraiba', value: 'PB'}, {name: 'Pernambuco', value: 'PE'}, {name: 'Piaui', value: 'PI'}, {name: 'Parana', value: 'PR'}, {name: 'Rio de Janeiro', value: 'RJ'}, {name: 'Rio de Grande do Norte', value: 'RN'}, {name: 'Rondonia', value: 'RO'}, {name: 'Roraima', value: 'RR'}, {name: 'Rio Grande do Sul', value: 'RS'}, {name: 'Santa Catarina', value: 'SC'}, {name: 'Sergipe', value: 'SE'}, {name: 'Sao Paulo', value: 'SP'}, {name: 'Tocantins', value: 'To'}];
  $scope.region1States = [ {name: 'All', value: "All"}, {name: 'Acre', value: 'AC'}, {name: 'Amazonas', value: 'AM'}, {name: 'Amapa', value: 'AP'}, {name: 'Para', value: 'PA'}, {name: 'Rondonia', value: 'Ro'}, {name: 'Roraima', value: 'RR'}, {name: 'Tocantins', value: 'To'}];
  $scope.region2States = [ {name: 'All', value: "All"}, {name: 'Alagoas', value: 'AL'}, {name: 'Bahia', value: 'BA'}, {name: 'Ceara', value: 'CE'}, {name: 'Maranhao', value: 'MA'}, {name: 'Paraiba', value: 'PB'}, {name: 'Pernambuco', value: 'PE'}, {name: 'Piaui', value: 'PI'}, {name: 'Rio de Janeiro do Norte', value: 'RN'}, {name: 'Sergipe', value: 'SE'}];
  $scope.region3States = [ {name: 'All', value: "All"}, {name: 'Espirito', value: 'ES'}, {name: 'Minas Gerais', value: 'MG'}, {name: 'Rio de Janeiro', value: 'RJ'}, {name: 'Sao Paulo', value: 'SP'}];
  $scope.region4States = [ {name: 'All', value: "All"}, {name: 'Parana', value: 'PR'}, {name: 'Rio de Janeiro do Sul', value: 'RS'}, {name: 'Santa Catarina', value: 'SC'}];
  $scope.region5States = [ {name: 'All', value: "All"}, {name: 'Distrito Federal', value: 'DF'}, {name: 'Goias', value: 'Go'}, {name: 'MatoGrosso do Sul', value: 'MS'}, {name: 'MatoGrosso', value: 'MT'}];
  $scope.form.year = ['All'];
  $scope.form.region = ['All'];
  $scope.form.state = ['All'];
  $scope.form.SocioEconomicDataColumn = ['All'];
  $scope.form.PopulationAndAgeColumn = ['All'];
  $scope.form.HealthCareColumn = ['All'];
  $scope.form.offset = 0;
  $scope.records = [];
  $scope.allRecords = [];
  $scope.myVar = false;
  $scope.buttonLabel = "Download to CSV";
  

$scope.gotoTop = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };

$scope.exportAllData = function () {
          alasql('SELECT * INTO CSV("data.csv",{headers:true, separator:","}) FROM ?',[$scope.allRecords]);

    };
  
$scope.getStates = function(form){

  if($scope.form.region == 'All')
    return $scope.States;
  if($scope.form.region == '1')
    return $scope.region1States;
  if($scope.form.region == '2')
    return $scope.region2States;
  if($scope.form.region == '3')
    return $scope.region3States;
  if($scope.form.region == '4')
    return $scope.region4States;
  if($scope.form.region == '5')
    return $scope.region5States;
}

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
        offset: 0,
        flag: '0'
    
    }
}
  
  $scope.masterform = $scope.form;
  $http.get('action.php', conditions)
   .then(function (response) {
    
    $scope.records = JSON.parse(JSON.stringify(response.data));
     
   });
   $scope.masterform.offset = 100;
   $scope.getAllRecords(); 
   $scope.isDisabled = false;
   $scope.form = null;
   
}

$scope.getAllRecords =  function(form) {
  $scope.myVar = true;
  var conditions = {
    params: {
        region: JSON.stringify($scope.form.region),
        year: JSON.stringify($scope.form.year),
        state: JSON.stringify($scope.form.state),
        SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
        PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
        HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
        offset: '0',
        flag: '1'
    
    }
}
  
$http.get('action.php', conditions)
   .then(function (response) {
    
    $scope.allRecords = JSON.parse(JSON.stringify(response.data));
    $scope.isDisabled = true;
   });

 
return;

}

$scope.getMoreRecords =  function(form) {
  var conditions = {
    params: {
        region: JSON.stringify($scope.masterform.region),
        year: JSON.stringify($scope.masterform.year),
        state: JSON.stringify($scope.masterform.state),
        SocioEconomicDataColumn: JSON.stringify($scope.masterform.SocioEconomicDataColumn),
        PopulationAndAgeColumn: JSON.stringify($scope.masterform.PopulationAndAgeColumn),
        HealthCareColumn: JSON.stringify($scope.masterform.HealthCareColumn),
        offset: $scope.masterform.offset,
        flag: '0'
    
    }
}

  
  $http.get('action.php', conditions)
   .then(function (response) {
    var oldJSON = $scope.records;
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
    });
   
$scope.masterform.offset += 100; 


}

});
