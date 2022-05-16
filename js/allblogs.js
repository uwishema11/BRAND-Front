const tbody= document.querySelector(".tbody")

function  fetchData(){
    fetch("https://uwishema.herokuapp.com/posts")
    .then((res)=>res.json())
    .then(res =>{
        console.log(res);
        const values= res.posts
        let post="";
        values.map((value)=>{
            let id=value._id
            post += `<tr>
            <td><img src=https://res.cloudinary.com/uwishema/image/upload/v1651312437/${value.image} width="40px" height="40px" alt=""></td>
               <td> ${value.title}</td>
               <td>${value.body}</td>
               <td data-id="${value._id}">
                <button onClick=" editButton(this.parentElement.getAttribute('data-id'))"><span class="las la-edit">Edit</span></button>
                <button onClick="deleteblog(this.parentElement.getAttribute('data-id'))"><span class="las la-trash-alt"></span></button>
               </td>
           </tr> `

        })

        console.log(values)
       tbody.innerHTML=post
    })
  
    
}
fetchData();

async function deleteblog(id) {
    let token = localStorage.getItem('token')
    await fetch (`https://uwishema.herokuapp.com/posts/${id}`, {
      method: 'DELETE',
      headers : {
        "Content-type": "application/json;charset=UTF-8",
        "x-auth-token": `${token}`
      }
    })
    .then(res => res.json())
    .then(response => {
      alert(response.message)
      location.reload()
    })
  }

  function editButton(id){
      localStorage.setItem("post_id",id)
      window.location.href = './updateBlog.html'
  }

