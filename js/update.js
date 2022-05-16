let title= document.querySelector(".title")
let author=document.querySelector(".author")
let text=document.querySelector(".text")
let btn= document.querySelector(".send-btn")
let error= document.querySelector(".error")
let imageURL = document.querySelector(".image").files[0]; 


let id= localStorage.getItem("post_id")
  function  fetchData(){
      fetch(`https://uwishema.herokuapp.com/posts/${id}`)
      .then((res)=>res.json())
      .then(res =>{
         title.value=res.post[0].title
         author.value=res.post[0].author
         text.value=res.post[0].body
         imageURL=res.post[0].image
        console.log(res)
      })
    
      
  }
  fetchData();

async function postBlog(){
    let token = localStorage.getItem('token')
   
    const formData = new FormData();
  formData.append("title", title.value)
  formData.append("body",text.value)
  formData.append("author", author.value)
  formData.append("image", imageURL)
  
 await fetch(`https://uwishema.herokuapp.com/posts/${id}`, {
    method: 'PUT',
    body : formData,
    headers : {"x-auth-token":`${token}`}
  }) 
  .then(res => res.json())
  .then(response =>{
      if(response.success==true){
        alert("post successfully updated")
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
