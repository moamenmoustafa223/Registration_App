var signUpName= document.querySelector('#signUpName');
var signUpEmail= document.querySelector('#signUpEmail');
var signUpPassword= document.querySelector('#signUpPassword');
var signupBtn= document.querySelector('#signupBtn');
var signUpFlag= document.querySelector('#signUpFlag');
var emailExsit= document.querySelector('#emailExsit');
var logoutBtn= document.querySelector('#logoutBtn');
var signInEmail= document.querySelector('#signInEmail');
var signInPassword= document.querySelector('#signInPassword');
var loginBtn= document.querySelector('#loginBtn');
var loginFlag=document.querySelector('#loginFlag');
var welName = document.querySelector("#welName");
var username = localStorage.getItem('welcomeUsername')

if(welName){
if (username) {
    welName.innerHTML = `welcome <span class=" text-warning">${username} </span> `
}}

if (username == null) {
  window.open("./index.html")
}

var userList;
if (localStorage.getItem('userList') == null) {
    userList = []
} else {
    userList = JSON.parse(localStorage.getItem('userList'))
}

function addUser(){

    if(validateUserName() && validateUserEmail () && validateUserPassword()){ 

   var user={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value,
    }

    if(checkEmail() == false){
        emailExsit.classList.replace('d-none','d-block')
        signUpFlag.classList.replace('d-block','d-none')
    }else{

        userList.push(user);
        localStorage.setItem("userList",JSON.stringify(userList))
        emailExsit.classList.replace('d-block','d-none')

        signUpFlag.classList.replace('d-none','d-block')
        setTimeout("redirecttologin()", 2000)
       

    
    }
}
}
function redirecttologin() {
    window.location.href = "./index.html"
    
}
if(signupBtn){
signupBtn.addEventListener('click', function(){
    addUser();
});}

function checkEmail(){
    for(var i=0 ;i<userList.length ;i++){

        if(userList[i].email == signUpEmail.value){
           
            return false
        }
    }
}

function validateUserName(){
    var regex= /^[a-zA-Z0-9_-]{3,16}$/
    
        if (regex.test(signUpName.value) == true){
            signUpName.style.border="none"
            wrongUserName.classList.replace("d-block", "d-none")
            return true;
        }else{
            signUpName.style.border="2px solid red"
            wrongUserName.classList.replace("d-none", "d-block")
            return false;
           
        }

}

function validateUserEmail(){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if (regex.test(signUpEmail.value) == true ){
            signUpEmail.style.border="none"
            wrongUserEmail.classList.replace("d-block", "d-none")
            return true;
        }else{
            signUpEmail.style.border="2px solid red"
            wrongUserEmail.classList.replace("d-none", "d-block")
            return false;
           
        }

}

function validateUserPassword(){
    var regex= /^[0-9a-zA-Z ]{6,60}$/
    
    if (regex.test(signUpPassword.value) == true){
        signUpPassword.style.border="none"
        wrongUserPassword.classList.replace("d-block", "d-none")
        return true;
    }else{
        signUpPassword.style.border="2px solid red"
        wrongUserPassword.classList.replace("d-none", "d-block")
        return false;
       
    }

}

function logIn(){
    if( validateLoginEmail () && validateLoginPassword ()){ 
   
    for(var i=0 ;i<userList.length ;i++){

        if(userList[i].email == signInEmail.value && userList[i].password == signInPassword.value){
            localStorage.setItem('welcomeUsername', userList[i].name)
            loginBtn.href= "./home.html"
          
        }
        else{
            document.getElementById('loginFlag').innerHTML = '<span class="text-danger">INVALID EMAIL OR PASSWORD</span>'
         
        }

    }

}
}

if(loginBtn){

loginBtn.addEventListener('click', function(){
   
    logIn();
});}

function validateLoginEmail(){
    var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if (regex.test(signInEmail.value) == true ){
            signInEmail.style.border="none"
            wrongUserEmail.classList.replace("d-block", "d-none")
            return true;
        }else{
            signInEmail.style.border="2px solid red"
            wrongUserEmail.classList.replace("d-none", "d-block")
            return false;
           
        }

}

function validateLoginPassword(){
    var regex= /^[0-9a-zA-Z ]{6,60}$/
    
    if (regex.test(signInPassword.value) == true){
        signInPassword.style.border="none"
        wrongUserPassword.classList.replace("d-block", "d-none")
        return true;
    }else{
        signInPassword.style.border="2px solid red"
        wrongUserPassword.classList.replace("d-none", "d-block")
        return false;
       
    }

}

function logout() {
    localStorage.removeItem('welcomeUsername')
    logoutBtn.href= "./index.html"
    console.log("deleted");
}

if(logoutBtn){
    logoutBtn.addEventListener("click", function(){
        logout()
    })
}