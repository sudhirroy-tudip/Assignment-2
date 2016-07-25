<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$val=$request->val;
$con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
    $query = "delete from add_visitor where id='$val'";
    $comments = mysql_query($query);
    if($comments)
        echo "Succesfully deleted";
    else
        echo "Not completed ";
    mysql_close($con);

?>