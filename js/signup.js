const submit=document.querySelector(".btn")
const username= document.querySelector(".username")
const password=document.querySelector(".password")
const email=document.querySelector(".email")
const error=document.querySelector(".error")

function signUp(){
    fetch('https://uwishema.herokuapp.com/users', {
    method: 'POST',
    body : JSON.stringify({
      name : username.value,
      email: email.value,
      password: password.value
    }),
    headers : {"Content-type": "application/json;charset=UTF-8"}
  }) 
  .then(res => res.json())
  .then(response => {
   if(response.name){
       alert("an account was succesfully created go to login page")
       window.location.href = './LOGIN.html'
   }
   else{
       error.innerHTML=response.error
   }
  })
  .catch(err => alert(err))
 
}
 submit.addEventListener("click",()=>{
     signUp();
 })
 

