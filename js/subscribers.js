

async function getusers() {

    await fetch("https://uwishema.herokuapp.com/users")
    .then(users => users.json())
    .then(data => {
       console.log(data)
       const users = data.users
       let tbody= document.querySelector(".tbody")
       users.map( user=>{
       tbody.innerHTML += `<tr data-id="${user._id}">
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><i class="fa fa-trash-o" style="font-size:24px; color: red" onclick="deleteuser(this.parentElement.parentElement.getAttribute('data-id'))"></i></td>
      </tr> `
       })
    })
  }
  getusers();