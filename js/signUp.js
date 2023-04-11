let signUpName = document.querySelector("#signUpName");
let NameAlert = document.querySelector("#NameAlert");
let signUpEmail = document.querySelector("#signUpEmail");
let EmailAlert = document.querySelector("#EmailAlert");
let signUpPassword = document.querySelector("#signUpPassword");
let PassAlert = document.querySelector("#PassAlert");
let signUpBtn = document.querySelector("#signUpBtn");
let success = document.querySelector("#success");
let alreadyExists = document.querySelector("#alreadyExists");

// array decleration
let clientArray;
if (localStorage.getItem("clientArray") == null) {
    clientArray = [];
} else {
    clientArray = JSON.parse(localStorage.getItem("clientArray"))
}
console.log("clientArray = "+clientArray);
//signUp
signUpBtn.addEventListener("click", function() {
  let validName = validateName();
  let validEmail = validateEmail();
  let validPass = validatePass();
  if (validEmail && validPass && validName) {
    let client = {
      name: signUpName.value,
      Email: signUpEmail.value,
      password: signUpPassword.value,
    };

    if (newUser(signUpEmail.value)) {
      clientArray.push(client)
      localStorage.setItem("clientArray", JSON.stringify(clientArray));
    }else{
      console.log('error email error');
    }
  }
});
// email already exists ??
function newUser(UserEmail) {
  console.log("newUser function entered");
  let flage = false;
  if (clientArray.length == 0) {
    alreadyExists.classList.add("d-none");
        success.classList.remove("d-none");
        console.log("new user");
    flage = true;
  } else {
    for(let i = 0; i < clientArray.length; i++) {
      console.log("clientArray[i].Email = "+clientArray[i].Email)

      if (clientArray[i].Email == UserEmail) {
        success.classList.add("d-none");
        alreadyExists.classList.remove("d-none");
        console.log("not a new user");
        flage = false;
      } else {
        alreadyExists.classList.add("d-none");
        success.classList.remove("d-none");
        console.log("new user");
        flage = true;
      }
    }
  }
  console.log("flage = "+flage);
  return flage;
}

// validation
function validateEmail() {
  let regex = /(@)(gmail)(.com)$/gm;
  if (regex.test(signUpEmail.value)) {
    EmailAlert.classList.add("d-none");
    console.log("email is ok");
    return true;
  } else {
    EmailAlert.classList.remove("d-none");
    console.log("email isnt ok");
    return false;
  }
}

function validatePass() {
  let regex = /(?=^.{8,15}$)(?=.*[A-Za-z])(?=.*\d)/gm;
  if (regex.test(signUpPassword.value)) {
    PassAlert.classList.add("d-none");
    console.log("pass is ok");
    return true;
  } else {
    PassAlert.classList.remove("d-none");
    console.log("pass isnt ok");
    return false;
  }
}

function validateName() {
  let regex = /\w{1,}/gm;
  if (regex.test(signUpName.value)) {
    NameAlert.classList.add("d-none");
    console.log("name is ok");
    return true;
  } else {
    NameAlert.classList.remove("d-none");
    console.log("name isnt ok");
    return false;
  }
}
// login js