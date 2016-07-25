<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id=$request->id;
$name=$request->name;
$email=$request->email;
$gender=$request->gender;
$date=$request->date;
$phone=$request->phone;
$time=$request->time;
$address=$request->address;

$contact_person=$request->contact_person;

$con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
$query = "UPDATE add_visitor SET name='$name',email='$email',gender='$gender',date='$date',phone='$phone',time='$time',address='$address',contact_person='$contact_person' WHERE id='$id'";
$comments = mysql_query($query);
if($comments)
    echo "Succesfully Updated";
else
    echo "Not updated";
mysql_close($con);

?>