//login system 

document.getElementById('login_btn').addEventListener('click',function(){
    //input email and password
   const emailFild=document.getElementById('email');
   const passwordFild=document.getElementById('password');

   const email=emailFild.value;
   const password=passwordFild.value;
   
   if(email=='rahadislam.web@gmail.com' && password=='1234'){
    window.location.href = "account.html";
   }
   

   
})