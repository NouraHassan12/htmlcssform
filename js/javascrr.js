function validation(){
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;

    if(user == ""){
document.getElementById("username").innerHTML=" **please fill the username field";
return false;
    }
    
    if((pass.lenghth <= 2) || (pass.lenghth > 20)){
        document.getElementById("password").innerHTML=" **password must be between 5 and 20"; 
        return false;
    }
      
 


            
}


