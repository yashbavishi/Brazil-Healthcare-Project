
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$SocioEconomicDataColumn = json_decode($_GET['SocioEconomicDataColumn']);
$PopulationAndAgeColumn = json_decode($_GET['PopulationAndAgeColumn']);
$HealthCareColumn = json_decode($_GET['HealthCareColumn']);
$year = json_decode($_GET['year']);
$region = json_decode($_GET['region']);
$state = json_decode($_GET['state']);
$SocioEconomicDataColumns = [ "gdp", "worker_expe", "expe_own", "edu_expense", "literacyrate_15plus", "gini_index", "lgdpr_pc", "inpc", "lgdpr", "min_wage", "developed", "efici_expvida_exponencial", "efici_mort_inf_expo", "illitera", "illiteibge", "may_sch_code", "areakm2", "aream2", "distance_from_capital", "capital_state", "densidade"];
$PopulationAndAgeColumns = ['ageunder1', 'age_14', 'age_49', 'age_1014', 'age_1519', 'age_2029', 'age_3039', 'age_4049', 'age_5059', 'age_6069', 'age_7079', 'more80', 'popb15', 'Pop_sus', 'pop40y' ];
$HealthCareColumns = ['health_expend_tot', 'trans_sus', 'diabe_reg', 'diabe_track', 'insurance', 'bed', 'new_diabe_reg', 'new_diabe_track', 'obesity', 'diabe_0to14', 'diabe_15', 'sus_rate', 'psf_cove', 'sanita'];
$offset = $_GET['offset'];
$flag = $_GET['flag'];


$conn = new mysqli("localhost", "root", "", "brazilnew");
$request1 = "SELECT d.year, s.state_name, c.county_name, c.county_code, region, ";

if($SocioEconomicDataColumn[0] != NULL){
if($SocioEconomicDataColumn[0] == 'All'){
	for( $i = 0; $i<sizeof($SocioEconomicDataColumns); $i++ ) {
    	if($i != 0 && $i != sizeof($SocioEconomicDataColumns)){
    		$request1 .= ', ';
    	}
    	$request1 .= $SocioEconomicDataColumns[$i];
    }
}
else{
	for( $l = 0; $l<sizeof($SocioEconomicDataColumn); $l++ ){
        if($l != 0 && $l != sizeof($SocioEconomicDataColumn)){
            $request1 .= ', ';
        }
        $request1 .= $SocioEconomicDataColumn[$l];
    }
}
}

if($PopulationAndAgeColumn[0] != NULL){
if($PopulationAndAgeColumn[0] == 'All'){
    $request1 .= ', ';
    for( $i = 0; $i<sizeof($PopulationAndAgeColumns); $i++ ) {
        if($i != 0 && $i != sizeof($PopulationAndAgeColumns)){
            $request1 .= ', ';
        }
        $request1 .= $PopulationAndAgeColumns[$i];
    }
}
else{
    $request1 .= ', ';
    for( $l = 0; $l<sizeof($PopulationAndAgeColumn); $l++ ){
        if($l != 0 && $l != sizeof($PopulationAndAgeColumn)){
            $request1 .= ', ';
        }
        $request1 .= $PopulationAndAgeColumn[$l];
    }
}
}

if($HealthCareColumn[0] != NULL){
if($HealthCareColumn[0] == 'All'){
    $request1 .= ', ';
    for( $i = 0; $i<sizeof($HealthCareColumns); $i++ ) {
        if($i != 0 && $i != sizeof($HealthCareColumns)){
            $request1 .= ', ';
        }
        $request1 .= $HealthCareColumns[$i];
    }
}
else{
    $request1 .= ', ';
    for( $l = 0; $l<sizeof($HealthCareColumn); $l++ ){
        if($l != 0 && $l != sizeof($HealthCareColumn)){
            $request1 .= ', ';
        }
        $request1 .= $HealthCareColumn[$l];
    }
}
}

$request1 .= " FROM data d, county c, state s WHERE d.county_code = c.county_code AND c.state_abbr = s.state_abbr";

if($year[0] != NULL){
if($year[0] != 'All'){
    $request1 .= " AND d.year IN (";
    for( $i = 0; $i<sizeof($year); $i++ ) {
        if($i != 0 && $i != sizeof($year)){
            $request1 .= ', ';
        }
        $request1 .= $year[$i];
    }
    $request1 .= ')';
}
}

if($region[0] != NULL){
if($region[0] != 'All'){
    $request1 .= " AND d.region IN (";
    for( $i = 0; $i<sizeof($region); $i++ ) {
        if($i != 0 && $i != sizeof($region)){
            $request1 .= ', ';
        }
        $request1 .= $region[$i];
    }
    $request1 .= ')';
}
}

if($state[0] != NULL){
if($state[0] != 'All'){
    $request1 .= " AND s.state_abbr IN (";
    for( $i = 0; $i<sizeof($state); $i++ ) {
        if($i != 0 && $i != sizeof($state)){
            $request1 .= ', ';
        }
        $request1 .= '"' .$state[$i] .'"';
    }
    $request1 .= ')';
}
}

if($flag == 0){
    $request1 .= ' LIMIT 100' . ' OFFSET ' .$offset;
}
//echo($request1);
$result = $conn->query($request1);

$outp = "[";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {
        $outp .= ",";
    }
    $outp .= '{"year":"'  . $rs["year"] . '"';
    $outp .= ', "state_name":"'. $rs["state_name"]     . '"';
    $outp .= ', "county_name":"'. $rs["county_name"]     . '"';
    $outp .= ', "county_code":"'. $rs["county_code"]     . '"';
    $outp .= ', "region":"'   . $rs["region"]        . '"';
    
    
    if($SocioEconomicDataColumn[0] == 'All'){
        
        for( $i = 0; $i<sizeof($SocioEconomicDataColumns); $i++ ) {
    	   if($i != sizeof($SocioEconomicDataColumns)){
    		  $outp .= ', ';
    	}
    	   $outp .= '"' .$SocioEconomicDataColumns[$i] .'": "' .$rs["$SocioEconomicDataColumns[$i]"] . '"';
        }
        
}
else{
	 
        for( $i = 0; $i<sizeof($SocioEconomicDataColumn); $i++ ) {
           if($i != sizeof($SocioEconomicDataColumn)){
              $outp .= ', ';
        }
           $outp .= '"' .$SocioEconomicDataColumn[$i] .'": "' .$rs["$SocioEconomicDataColumn[$i]"] . '"';
        }
        
    }
    
    if($PopulationAndAgeColumn[0] == 'All'){
        
        $outp .= ', ';
        for( $i = 0; $i<sizeof($PopulationAndAgeColumns); $i++ ) {
           if($i != 0 && $i != sizeof($PopulationAndAgeColumns)){
              $outp .= ', ';
        }
           $outp .= '"' .$PopulationAndAgeColumns[$i] .'": "' .$rs["$PopulationAndAgeColumns[$i]"] . '"';
        }
        
}
else{
    
    $outp .= ', ';
        for( $i = 0; $i<sizeof($PopulationAndAgeColumn); $i++ ) {
           if($i != 0 && $i != sizeof($PopulationAndAgeColumn)){
              $outp .= ', ';
        }
           $outp .= '"' .$PopulationAndAgeColumn[$i] .'": "' .$rs["$PopulationAndAgeColumn[$i]"] . '"';
        }
        
    }

if($HealthCareColumn[0] == 'All'){
        
        $outp .= ', ';
        for( $i = 0; $i<sizeof($HealthCareColumns); $i++ ) {
           if($i != 0 && $i != sizeof($HealthCareColumns)){
              $outp .= ', ';
        }
           $outp .= '"' .$HealthCareColumns[$i] .'": "' .$rs["$HealthCareColumns[$i]"] . '"';
        }
        $outp .= '}';
}
else{
    
    $outp .= ', ';
        for( $i = 0; $i<sizeof($HealthCareColumn); $i++ ) {
           if($i != 0 && $i != sizeof($HealthCareColumn)){
              $outp .= ', ';
        }
           $outp .= '"' .$HealthCareColumn[$i] .'": "' .$rs["$HealthCareColumn[$i]"] . '"';
        }
        $outp .= '}';
    }

}
ini_set('memory_limit', '-1');
$foutp = $outp.']';

$conn->close();

echo($foutp);
?>

