<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "password", "tutorial");
$result = mysqli_query($conn,"SELECT * from add_visitor");
 $data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    
        echo (json_encode($data));
$conn->close();
?>