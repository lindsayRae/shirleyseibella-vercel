"use strict"

function sendMessage(){

    let body = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    console.log(body);

    let url = "/api/email"

    fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(json);
        })
        .catch(error => 
            console.error("Error:", error)
          
      );


}

document.getElementById("sendMessage").addEventListener("click", sendMessage)