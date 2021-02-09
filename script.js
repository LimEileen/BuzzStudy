$(document).ready(function(){

    displayProfile();
    
    $("#frm-user").submit(function (e) {
        e.preventDefault();
        let name = $('#username').val();
        let mail = $('#email').val();
        let pwd = $('#password').val();

        let users = new User(name,mail,pwd);

        //empty list
        let userList = [];

        //take from local storage
        if (localStorage.getItem('userList')){
        userList = JSON.parse(localStorage.getItem('userList'));
        }
  
        //add object into list
        userList.push(users);
    
        //add object to local storage
        localStorage.setItem('userList', JSON.stringify(userList));

        displayProfile();
    });
});

function User(name,mail,pwd){
    this.names = name;
    this.mails = mail;
    this.passW = pwd;
}

function displayProfile(){
    let userProfile = "";

    //check if there is local storage first
    if (localStorage.getItem('userList')) {
        let userList = JSON.parse(localStorage.getItem('userList'));
    
        if (userList.length){
    
            for(let i = 0; i<userList.length; i++){
            userProfile += `<tr>
            <td>${userList[i].names}</td>
            <td>${userList[i].mails}</td>
            <td>${userList[i].passW}</td>
            </tr>`;
            }
      
            $('#user-profile').html(userProfile);
        } else{
            $('user-profile').html('None');
        }
    }
}










/*QUESTIONS API START*/
$(document).ready(function () {
    const APIKEY = "602194e63f9eb665a16892ce";

    function getContacts(limit = 10, all = true) {

        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://ipproject-f42a.restdb.io/rest/questions",
          "method": "GET", 
          "headers": {
            "content-type": "application/json",
            "x-apikey": "602194e63f9eb665a16892ce",
            "cache-control": "no-cache"
          },
        }

        $.ajax(settings).done(function (response) {
            $("#question").html(response.question);
        }
}


let que_count = 0;

function showQns(){
    const qns = document.querySelector(".qns");
    let qns_text = question;
    qns.innerHTML = qns_text;
}
/*QUESTIONS API END*/