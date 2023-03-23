function press(){
    open("pj2.html");  
}


function pressing(){
    open("pj3.html");  
}







window.addEventListener(scroll,function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);


    });


      /*filterable cards*/

      let list=document.querySelectorAll('.list');
      let card=document.querySelectorAll('.card');
   
     

    for(let i=0; i<list.length; i++){
     list[i].addEventListener('click',function(){
       for(let j=0; j<list.length; j++){
         list[j].classList.remove('active');

       }
         this.classList.add('active');
       
         let dataFilter = this.getAttribute('data-filter');

         for(let k=0; k<card.length; k++)
         {
           card[k].classList.remove('active');
           card[k].classList.add('hide');
         

           if(card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
             card[k].classList.remove('hide');
             card[k].classList.add('active');
           }
         
         }

     })
   
    }


    function validate(){
        var name = document.getElementById("name").value;
        var subject = document.getElementById("subject").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");

       error_message.style.padding = "10px";

       var text;
   if(name.length < 5){
   text = "Please Enter valid Name";
   error_message.innerHTML = text;
   return false;
   }
  if(subject.length < 10){
  text = "Please Enter Correct Subject";
  error_message.innerHTML = text;
  return false;
  }
  if(isNaN(phone) || phone.length != 10){
  text = "Please Enter valid Phone Number";
  error_message.innerHTML = text;
  return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
  text = "Please Enter valid Email";
  error_message.innerHTML = text;
  return false;
  }
  if(message.length <= 140){
  text = "Please Enter More Than 140 Characters";
  error_message.innerHTML = text;
  return false;
 }
 alert("Form Submitted Successfully!");
 return true;
 }





