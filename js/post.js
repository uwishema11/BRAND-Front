const title= document.querySelector(".title")
const author=document.querySelector(".author")
const text=document.querySelector(".text")
const btn= document.querySelector(".send-btn")
const error= document.querySelector(".error")



async function postBlog(){
    let token = localStorage.getItem('token')
    const imageURL = document.querySelector(".image").files[0]; 
    const formData = new FormData();
  formData.append("title", title.value)
  formData.append("body",text.value)
  formData.append("author", author.value)
  formData.append("image", imageURL)
  
 await fetch('https://uwishema.herokuapp.com/posts', {
    method: 'POST',
    body : formData,
    headers : {"x-auth-token":`${token}`}
  }) 
  .then(res => res.json())
  .then(response =>{
      if(response.success==true){
        alert("post successfully created")
        window.location.href = './seeAllBlogs.html'
      }
      else{
        error.innerHTML=response.message
      }
  })
  .catch(err => console.log(err));
}

btn.addEventListener("click", (e)=>{
    e.preventDefault()
postBlog()

})
