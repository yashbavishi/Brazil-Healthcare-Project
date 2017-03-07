
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "Brazil1");

$result = $conn->query("SELECT * FROM y2000");

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

