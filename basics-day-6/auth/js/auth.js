var username = document.getElementById('username');
var password = document.getElementById('password');
var connect = document.getElementById('connect');


connect.addEventListener('click',()=>{
    const passValue = password.value;
    const usernameValue = username.value;


    if (passValue == 'admin' && usernameValue == 'admin' ) {
        console.log("ok");
        localStorage.setItem('session',new Date().getTime());

        window.location="index.html";
    }else{
        console.log("wrong username or password");
    }
    
})