var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");


var confirmBTN = document.getElementById("confirmBTN");


var countrysList = [];


function getListOfContrysFromServer(){
    countrysList = [
        { name:'Tunisia', value:"TN" },
        { name:'France', value:"FR" },
        { name:'Englend', value:"EN" },
        
    ]


    let blocOptions = '<option value="">please choose a country</option>';

    countrysList.map((c)=>{
        blocOptions+='<option value="'+c.value+'">'+c.name+'</option>';
    })

    document.getElementById("country").innerHTML = blocOptions;



}


confirmBTN.addEventListener('click',(e)=>{

    // we will strat with the username check
    const usernameValue = username.value;
    if (usernameValue == '' ) {
        username.style.border="1px solid red";
    }else{
        username.style.border="1px solid green";
    }

    const emailValue = email.value;
    if (emailValue == '' ) {
        email.style.border="1px solid red";
    }else if (emailValue.indexOf("@") == -1) {
        email.style.border="1px solid red";
    }else {
        email.style.border="1px solid green";
    }

    const passwordValue = password.value;
    if (passwordValue == '' ) {
        password.style.border="1px solid red";
    }else{
        password.style.border="1px solid green";
    }


});



getListOfContrysFromServer();