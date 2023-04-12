let UserName= document.querySelector("#UserName")
if (localStorage.getItem("sessionUserName")==null) {
    window.open("index.html","_self")
}else{
console.log(`localStorage.getItem("sessionUserName")  = `+localStorage.getItem("sessionUserName"));
UserName.innerHTML="Welcome "+ localStorage.getItem("sessionUserName")
}