<?php
$value=0; 
$con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $val=$request->val;
    if($val=='3')
    {
       $query = "select * from add_visitor";
       $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
       $arr = array();
       if($result->num_rows>0)
       {
          while($row = $result->fetch_assoc()) { $arr[] = $row; }
         $u=json_encode($arr);
         echo '$u';
       }
//JSON-encode the response
        else
            echo "1";
}    
if($val=='2')
    {
        $name=$request->name;
        $email =$request->email;
        $gender =$request->gender;
        $address =$request->address;
        $phone = $request->phone;
        $date = $request->date;
        $intime = $request->intime;
        $contact_person = $request->contact_person;
        $query = "insert into  add_visitor values(DEFAULT,'$name','$email','$gender','$address','$phone','$contact_person','$date','$intime')";

        $comments = mysql_query($query);
         if($comments)
        {
            echo "0";
        }
        else
            echo "1";
       
        
    }
  if($val=='0')
{
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
}
else if($val=='1'){
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
}

mysql_close($con);
?>
