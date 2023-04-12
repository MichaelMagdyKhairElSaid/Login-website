let signinEmail= document.querySelector("#signinEmail");
let signinPassword= document.querySelector("#signinPassword");

let logInError= document.querySelector("#logInError")
let loginBtn= document.querySelector("#loginBtn")

// array decleration
let clientArray;
if (localStorage.getItem("clientArray") == null) {
    clientArray = [];
} else {
    clientArray = JSON.parse(localStorage.getItem("clientArray"))
}

// logIn function
loginBtn.addEventListener('click',function () {
findUser(signinEmail.value)


}
)
function findUser(userEmail) {
    for (let i = 0; i < clientArray.length; i++) {
      if(clientArray[i].Email == userEmail){
          if(signinPassword.value == clientArray[i].password){
              console.log("lets log in");
              localStorage.setItem('sessionUserName',clientArray[i].name)
              window.open("home.html","_self")
          }else{
            console.log("wrong (pass)");
            logInError.classList.remove("d-none");
          }
      }else{
        console.log("wrong (email)");
        logInError.classList.remove("d-none");
      }  
        
    }
}