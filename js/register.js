"use strict"
function validateform(){
  var name=document.forms["myform"]["dname"].value;
  var email=document.forms["myform"]["demail"].value;
  var password=document.forms["myform"]["password"].value;

      if(name==null || name=="" || name.length<2){
            alert("Please enter your real name");  
            return false;
      } else if(password.length<4){  
            alert("Password must be at least 4 characters long.");  
            return false;  
      }  else if(email==null || email=="" || !email.includes('@') || !email.includes('.') ){
            alert("Please enter a valid e-mail address");  
            return false;
      } 
      else alert("Reistration successful!")
} 