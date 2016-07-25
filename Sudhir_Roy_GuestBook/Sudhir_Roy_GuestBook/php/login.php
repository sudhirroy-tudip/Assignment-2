<?php
   $con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $pass = $request->pass;
    $query = "SELECT * from visitor  where email_id='$email' and password='$pass'";
    $comments = mysql_query($query);
    $row = mysql_fetch_array($comments) or die(mysql_error());
    if(!empty($row['email_id']) AND !empty($row['password']))
    {
        echo "0";
    }
    else
        echo "1";
?>
