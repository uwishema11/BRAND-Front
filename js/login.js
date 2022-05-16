const submit=document.querySelector(".btn")
const password=document.querySelector(".password")
const email=document.querySelector(".email")
const error=document.querySelector(".error")

function login(){
    fetch('https://uwishema.herokuapp.com/auth', {
    method: 'POST',
    body : JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers : {"Content-type": "application/json;charset=UTF-8"}
  }) 
  .then(res => res.json())
  .then(response => {
     
   if(response.token && !response.user.isAdmin){
       alert("successfully loged in now you can perform an action")
       window.location.href = './index.html'
       localStorage.setItem('token', response.token)
       localStorage.setItem('user', response.user.name)

   }
   else if(response.token && response.user.isAdmin){
    alert("successfully loged in now you can perform an action")
    window.location.href = './dashboard.html'
    localStorage.setItem('token', response.token)
    localStorage.setItem('user', response.user.name)
   }
   else{
     error.innerHTML= response.error
   }
  })
  .catch(err => alert(err))
 
}
 submit.addEventListener("click",()=>{
     login();
 })
 

