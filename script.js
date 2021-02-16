/*QUIZ JS START*/

//click on button to change page
var lot = "https://assets7.lottiefiles.com/packages/lf20_raijrjlw.json"  
function changePage() {
  document.getElementsByClassName("start_btn").innerHTML = lot;
  setTimeout(function(), 3000);
  location.replace("quiz.html")  //change from instruction to start quiz
}


/*QUESTIONS API START*/
$(document).ready(function(){
  var settings = {
    "url": "https://ipproject-f42a.restdb.io/rest/questions?access_token=BQDkBkYpJbSySoyFXUs7E2RCTzfowVaDzifbbt2bFuJCzUarMF6a0XwAu5rJLIYXhGof4oB-0gWn6_5YOZDxxzN620jTc0kJdvGpPbrQIAbBzZweIS2UJMCzfQk1ZX_JWSldrTiwn47qy5UeYqfrU-uNPO36I5MD__xDYVO2K-WX-2Y1e609-oP9Bgq3mySk_dsrwa7bk6dqquLvyXNgQTCGzgPC64T8wn2tZyVspo8WF8_uGj80JTmEIuxj1dRrzO9rSxzbrI_2oA_NbjotZlTkpQsqbNvkC8GgfPI",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-api-key": "602194e63f9eb665a16892ce"
    },
  };
  
 var completed = [];
 var qnsCount = 1;
 var userAns = [];
 var score = {
   correct: 0,
   incorrect: 0,
 }
 var option = [];
  $.ajax(settings).done(function (response) {
    allData = response; //store all the questions into a global variable first 
    //create random number between 0-49
    var no = Math.floor((Math.random() * 50));
    var qns = response[no];
    completed.push(no);
    $("#question").html(qns.question);
    $("#question").data("question-number",0);

    $(".opt_container").html(`
        
                <div class="option">${qns.option01}</div>
                <div class="option">${qns.option02}</div>
                <div class="option">${qns.option03}</div>
                <div class="option">${qns.option04}</div>`);

  option.push(qns.option01);
  option.push(qns.option02);
  option.push(qns.option03);
  option.push(qns.option04);
  console.log(option);
  });



 
  $(".nxt_qns_btn").on("click", function(){
    //create random number between 0-49
    var no = Math.floor((Math.random() * 50));
    qnsCount += 1;
    $("#question-number").html(qnsCount);
    //event listner to detect he complete one question
    completed.push(no);
    if (completed.length < 11){
      //get question from allData
    var qns = allData[no];
    $("#question").html(qns.question);
    $("#question").data("question-number",0);

    $(".opt_container").html(`
        
                <div class="option">${qns.option01}</div>
                <div class="option">${qns.option02}</div>
                <div class="option">${qns.option03}</div>
                <div class="option">${qns.option04}</div>`);
    }
    else{
      document.getElementsByClassName("nxt_qns_btn").innerHTML = lot;
      location.replace("result.html");
    }

    
  });


  function myFunction() { 
    if (document.getElementById("option01") == option[0]) {
    document.getElementById("option01").style.background = "green";
} else{
    document.getElementById("demo").style.background = "#ff77ee";
}
}

$(".option").on("click", function() {
    $(this).css("background", "green");
}); 

  var  option01= document.getElementById("option01");
  var  option02= document.getElementById("option02");
  var  option03= document.getElementById("option03");
  var  option04= document.getElementById("option04");
  $(".option").on("click", function(){
    var qns = response[no];
    console.log(qns);
    if (option01 == qns.correct_ans){
      option02.style.backgroundColor = "green";
    }
    else{
      option01.style.backgroundColor = "red";
    }
  });

    option01.onclick = function(){
        option01.style.backgroundColor = "red";
        console.log(option01);
    }

    option02.onclick = function(){
        option02.style.backgroundColor = "green";
    }


  $(".option").on("click",function(showAns){
    completed.push(no);
    console.log(completed);
  });


})

/* PROFILE START */
function none(){
  //var less = //for stationery
  if (less<300){
    alert("You have yet to reach 300 points");
  } else{
    alert("You have redeem a whole set of stationery. Thank You!")
  }

  //var bbt = //for bbt
  if (bbt<600){
    alert("You have yet to reach 600 points");
  } else{
    alert("You have redeem a free bubble tea. Thank You!")
  }

  //var des = //for dessert
  if (des<1000){
    alert("You have yet to reach 1000 points");
  } else{
    alert("You have redeem a free dessert. Thank You!")
  }

  //var ani = //for animal badge
  if (ani<1000){
    alert("You have yet to complete the qns? or yet to reach 400 points?");
  } else{
    alert("You have redeem a free dessert. Thank You!")
  }

  //var car = //for cartoon badge
  if (car<1000){
    alert("You have yet to complete the qns? or yet to reach 800 points?");
  } else{
    alert("You have redeem a free dessert. Thank You!")
  }
}

/* LOGIN PAGE START*/
$(document).ready(function () {
  const APIKEY = "602194e63f9eb665a16892ce";
  $("#btn-login").on("click", function (e) {
    e.preventDefault();

    let username = $("#username").val();
    let password = $("#password").val();
    
    login(username, password);
    location.replace("categories.html")
  });

  function check(username, password){
    var jsondata = {"username": username,"password": password};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idtest-b890.restdb.io/rest/contact",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  function login(username, password){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idtest-b890.restdb.io/rest/contact",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      let output = "";
      for(var i = 0){
        optput = `${output}
        <td>${response[i].username}</td>`;
      }
      if(response.length){
        console.log(`User found`);
      }
      $("#card-text-name").html(output);
    });
  )
  function checkUsername(username){
  }
});

