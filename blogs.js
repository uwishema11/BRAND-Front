
// const blogCards= document.querySelector(".cards")
// const blogs = await
//  fetch("http://localhost7000/routes/posts")
//  .then((response) => {
//     return response.json();  
//   })
// .then( data =>{
// console.log(data)
// })
  function  fetchData(){
      fetch("https://uwishema.herokuapp.com/posts")
      .then((res)=>res.json())
      .then(res =>{
          console.log(res);
          const values= res.posts
          let post="";
          values.map((value)=>{
              let id=value._id
              post += `<div class="card">
              <div class="image-section">
                 <img src="https://res.cloudinary.com/uwishema/image/upload/v1651312437/${value.image}.jpg" alt="">
              </div>
              <div class="article">
                  <h4>${value.title}</h4>
                  <P>${value.body}<br> 
               
               </P>
              </div>
              <div class="blog-view">
                  <a href="goalstips.html?blog_id=${value._id}"  class="button">Read more</a>
              </div>
              <div class="posted-date">
                  <p style="color: white;">posted on ${value.createdAt}</p>
              </div>
          </div>`
          })

          console.log(values)
          document.getElementById("cards").innerHTML=post
      })
    
      
  }
  fetchData();
  console.log("helo world")