document.getElementById('submit').onclick = function(){
  var name= document.getElementById('name').value;
  var email= document.getElementById('email').value;
  var message= document.getElementById('message').value;
  if(name==="" || email===""){
    alert("YOU MUST ENTER SOMETHING FOR ME TO SUBMIT!");
  }else{
    console.log(name + " " + email + " " + message);
  document.getElementById('contact-form').reset();
       alert("We have now stolen your email and will blast you with emails have a great day! :)");
     }
   };
