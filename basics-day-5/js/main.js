/*var contactList = [
    { 'fullname':"CHOURABI taher", 'phonenumber':"96557744" },
    { 'fullname':"Test user", 'phonenumber':"11111111" },
    { 'fullname':"Ninja user", 'phonenumber':"11223366" },
    
];


var q = "11111111";
var res = contactList.filter((c)=> (

    (c.fullname.toLowerCase().indexOf(q.toLowerCase()) != -1 )

    ||

    c.phonenumber.toLowerCase().indexOf(q.toLowerCase()) != -1 

 ) )

console.log(res);*/


// calculator
/*
var errorMsg = document.getElementById("errorMsg");


function calculate() {

    let op = document.getElementById("op");
    let o = op.value;



    let inputA = document.getElementById("a");
    let inputB = document.getElementById("b");

    let va = Number.parseInt(inputA.value);
    let vb = Number.parseInt(inputB.value);




    if (isNaN(va) == false) {
        // we are good to go !!
        if (isNaN(vb) == false) {
            errorMsg.innerHTML = "";

            switch (o) {
                case '+':
                    document.getElementById("res").innerHTML = (va + vb);
                    break;
                case '-':
                    document.getElementById("res").innerHTML = (va - vb);
                    break;

                case '*':
                    document.getElementById("res").innerHTML = (va * vb);
                    break;
                default:
                    break;
            }
        } else {
            errorMsg.innerHTML = "Second field must be a number";
        }
    } else {
        // error
        errorMsg.innerHTML = "First field must be a number";
    }
}*/



// contact app
/*
var contactList = [
    { 'fullname': "CHOURABI taher", 'phonenumber': "96557744" },
    { 'fullname': "Test user", 'phonenumber': "11111111" },
    { 'fullname': "Ninja user", 'phonenumber': "11223366" },
    { 'fullname': "Mohamed user", 'phonenumber': "88996655" },
    { 'fullname': "Balkis user", 'phonenumber': "33669988" },
    { 'fullname': "Nadine user", 'phonenumber': "22448855" },


]

var blocList = document.getElementById("blocList");
var queryElement = document.getElementById("query");


queryElement.addEventListener("keyup", (e) => {

    const q = e.target.value;
    var res = contactList.filter((c) => (

        (c.fullname.toLowerCase().indexOf(q.toLowerCase()) != -1)

        ||

        c.phonenumber.toLowerCase().indexOf(q.toLowerCase()) != -1

    ))


    blocList.innerHTML = "";
    res.map((c) => {
        let bloc = '<li class="list-group-item">';
        bloc += '<p class="">';
        bloc += '<strong>' + c.fullname + '</strong><br>';
        bloc += '<small>' + c.phonenumber + '</small></p></li>';


        blocList.innerHTML = blocList.innerHTML + bloc;


    })

})


contactList.map((c) => {
    let bloc = '<li class="list-group-item">';
    bloc += '<p class="">';
    bloc += '<strong>' + c.fullname + '</strong><br>';
    bloc += '<small>' + c.phonenumber + '</small></p></li>';


    blocList.innerHTML = blocList.innerHTML + bloc;


})*/


// chat app

var chats = [];

var sendBtnA = document.getElementById("sendBtnA");
var inputa = document.getElementById("inputa");
var chatzonea = document.getElementById("chat-zone-a");



var sendBtnB = document.getElementById("sendBtnB");
var inputb = document.getElementById("inputb");
var chatzoneb = document.getElementById("chat-zone-b");





function initChat(){

        chatzonea.innerHTML='';
        chats.map((m)=>{
            const blocMessage = '<li> '+m.sender+' : '+m.message+' <br/> <small>'+m.date+'</small>  </li>';
            chatzonea.innerHTML = chatzonea.innerHTML + blocMessage;
        })
    
        chatzoneb.innerHTML='';
        chats.map((m)=>{
            const blocMessage = '<li> '+m.sender+' : '+m.message+' <br/> <small>'+m.date+'</small>  </li>';
            chatzoneb.innerHTML = chatzoneb.innerHTML + blocMessage;
        })
    
}


sendBtnA.addEventListener('click',function(){
    // recu value input a
    const message = inputa.value;

    const messageToChat = {
        message:message,
        date: new Date(),
        sender:'a'
    }

    chats.push(messageToChat);
    inputa.value="";

    initChat();

});

sendBtnB.addEventListener('click',function(){
    // recu value input a
    const message = inputb.value;

    const messageToChat = {
        message:message,
        date: new Date(),
        sender:'b'
    }

    chats.push(messageToChat);
    inputb.value="";

    initChat();

});