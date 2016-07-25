<?php
    $con = mysql_connect("localhost","root","password");
    mysql_select_db("tutorial", $con);
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
   if(!$email)
    $email='0000000000';
    $query = "SELECT * from visitor  where email_id='$email'";
    $comments = mysql_query($query);
    $row = mysql_fetch_array($comments) or die(mysql_error());
    if(!empty($row['email_id']))
    {
        echo $row['password'];
    }
    else
        echo "1";
?>