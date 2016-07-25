<?php
   $con = mysql_connect("localhost","root","password");
mysql_select_db("tutorial", $con);
$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
 $name=$request->name;
        $email =$request->email;
        $gender =$request->gender;
        $address =$request->address;
        $phone = $request->phone;
        $date = $request->date;
        $intime = $request->intime;
        $contact_person = $request->contact_person;
        $query = "insert into  add_visitor values(DEFAULT,'$name','$email','$gender','$date','$phone','$address','$contact_person','$intime')";

        $comments = mysql_query($query);
         if($comments)
        {
            echo "0";
        }
        else
            echo "1";
       
        

mysql_close($con);

?>
