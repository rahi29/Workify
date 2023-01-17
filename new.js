const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})
var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');

 function validateName(){
  var name= document.getElementById('contact-name').value;
  if(name.length==0){
    nameError.innerHTML='Name is required';
    return false
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='Write full name';
    return false
   }
   nameError.innerHTML = 'valid';
   return true
 }
 function validateEmail(){
  var email= document.getElementById('contact-email').value;
  if(email.length==0){
    emailError.innerHTML='Email is required'
    return false;
  }
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.emailAddr.value)){
    return true
  }
  alert('you have entered an invalid email address!')
  return(false)
 
  }
function validateMessage(){
  var message= document.getElementById('contact-message').value;
  var required= 30;
  var left= required-message.length;

  if(left>0){
    messageError.innerHTML=left+'more characters required';
    return false;
  }
  messageError.innerHTML='<i class="fa-solid fa-square-check"></i>';
  return true;
}
function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display= 'block';
    submitError.innerHTML='please fix error to submit';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;

  }
}
function validateFormu(){
  let x= document.forms["myForm"]["fname"].value;
  if (x==""){
    alert("Name  must be filled out");
    return false;
  }
}





