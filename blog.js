

// const blogCards= document.querySelector(".cards")
// const blogs = await
//  fetch("http://localhost7000/routes/posts")
//  .then((response) => {
//     return response.json();  
//   })
// .then( data =>{
// console.log(data)
// })
const blog_id=location.search.split("=")[1]
  function  fetchData(){
      fetch(`https://uwishema.herokuapp.com/posts/${blog_id}`)
      .then((res)=>res.json())
      .then(res =>{
          console.log(res);
          const values= res.post
          let post="";
          values.map((value)=>{
              let id=value._id
              post += ` <img src="https://res.cloudinary.com/uwishema/image/upload/v1651312437/${value.image}.jpg" alt="">
              <h4>${value.title}</h4>
              <P>${value.body}
           </P>
          `
          })

          document.querySelector(".article").innerHTML=post
      })
    
      
  }
  fetchData();