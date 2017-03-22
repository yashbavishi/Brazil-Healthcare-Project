
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$region = $_GET['region'];
echo($region);
$conn = new mysqli("localhost", "root", "", "Brazil1");
$request1 = "SELECT * FROM y2000 WHERE reigon = ";
$request1 .= $region;
echo($request1);
$result = $conn->query($request1);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"pop_sus":"'  . $rs["pop_sus"] . '",';
    $outp .= '"reigon":"'   . $rs["reigon"]        . '"}';
    //$outp .= '"Country":"'. $rs["Country"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>

