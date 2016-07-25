<?php
   $con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
   $email=$request->email;
    $pass=$request->pass;

    $query = "insert into  visitor values('$email','$pass')";
    $comments = mysql_query($query);
    if($comments)
        {
        echo "0";
    }
    else
        echo "1";


mysql_close($con);

?>
