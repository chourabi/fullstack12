const session  = localStorage.getItem('session');

if (session == null) {
    window.location = "login.html";
}