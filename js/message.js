

async function getmessages() {

    await fetch("https://uwishema.herokuapp.com/messages")
    .then(messages => messages.json())
    .then(data => {
       console.log(data)
       const messages = data.messages
       let tbody= document.querySelector(".tbody")
       messages.map( message=>{
        tbody.innerHTML += `
        <td>${message.author}</td>
        <td>${message.body}</td>
      </tr> `
       })
    })
  }
  getmessages();