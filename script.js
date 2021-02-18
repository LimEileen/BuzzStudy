/*QUIZ JS START*/

//click on button to change page
//var lot = "https://assets7.lottiefiles.com/packages/lf20_raijrjlw.json"  
function changePage() {
  document.getElementsByClassName("start_btn").innerHTML = lot;
  //setTimeout(function(); 3000);
  location.replace("quiz.html");  //change from instruction to start quiz
}



/*QUESTIONS API START*/
$(document).ready(function () {
  var settings = {
    "url": "https://ipproject-f42a.restdb.io/rest/questions?access_token=BQDkBkYpJbSySoyFXUs7E2RCTzfowVaDzifbbt2bFuJCzUarMF6a0XwAu5rJLIYXhGof4oB-0gWn6_5YOZDxxzN620jTc0kJdvGpPbrQIAbBzZweIS2UJMCzfQk1ZX_JWSldrTiwn47qy5UeYqfrU-uNPO36I5MD__xDYVO2K-WX-2Y1e609-oP9Bgq3mySk_dsrwa7bk6dqquLvyXNgQTCGzgPC64T8wn2tZyVspo8WF8_uGj80JTmEIuxj1dRrzO9rSxzbrI_2oA_NbjotZlTkpQsqbNvkC8GgfPI",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-api-key": "602194e63f9eb665a16892ce"
    },
  };

  var completed = [];  //complete qns number
  var qnsCount = 1; //question 1 of 10
  var userAns = [];
  var score = {  
    correct: 0,
    incorrect: 0,
  }
  var timer = 30;
  $.ajax(settings).done(function (response) {
    // console.log(response);

    allData = response; //store all the questions into a global variable first 
    //create random number between 0-49
    var no = Math.floor((Math.random() * 50));
    var qns = response[no];
    completed.push(no);
    $("#question").html(qns.question);
    $("#question").data("question-number", 0);

    $(".opt_container").html(`
        <div class="option" data-answer="yes" id="option01" data-id="option01">${qns.option01}</div>
        <div class="option" data-answer="yes" id="option02" data-id="option02">${qns.option02}</div>
        <div class="option" data-answer="yes" id="option03" data-id="option03">${qns.option03}</div>
        <div class="option" data-answer="yes" id="option04" data-id="option04">${qns.option04}</div>`);
    console.log(`correct answer ${qns.correct_ans}`);

    $("#correct_answer").html(qns.correct_ans);
    

    var downloadTimer = setInterval(function(){
      document.getElementsByClassName("countdown").innerHTML = timer;
       timer -= 1;
    }, 1000);
  });

  $(".nxt_qns_btn").on("click", function () {
    //create random number between 0-49
    var no = Math.floor((Math.random() * 50));
    qnsCount += 1;
    //event listner to detect he complete one question
    completed.push(no);
    if (completed.length < 11) {
      $("#question-number").html(qnsCount);
      //get question from allData
      var qns = allData[no];
      $("#question").html(qns.question);
      $("#question").data("question-number", 0);

      $(".opt_container").html(`
          <div class="option" data-answer="yes" data-id="option01">${qns.option01}</div>
          <div class="option" data-answer="yes" data-id="option02">${qns.option02}</div>
          <div class="option" data-answer="yes" data-id="option03">${qns.option03}</div>
          <div class="option" data-answer="yes" data-id="option04">${qns.option04}</div>`

      );
      
      $("#correct_answer").html(qns.correct_ans);
      console.log(`correct answer ${qns.correct_ans}`);
    }
    else {
      document.getElementsByClassName("nxt_qns_btn").innerHTML = lot;
      location.replace("result.html");
    }
  });




  $(".opt_container").on("click", ".option", function (e) {
 e.preventDefault();
 
 let correctAnswer = $("#correct_answer").html();
 let userAnswer = $(this).data("id");
 
 //[cher] check answer match 
 if(correctAnswer === userAnswer){
 $(this).css("background", "green");
 score.correct++;
 }else{
 $(this).css("background", "red");
 score.incorrect++;
 }
 console.log(`correct answer : ${correctAnswer} : userAns: ${userAnswer}`);
 console.log($(this).data("answer"));
 console.log(`correct: ${score.correct} | wrong: ${score.incorrect}`);
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
      "url": "https://ipproject-f42a.restdb.io/rest/profile?max=2",
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
      "url": "https://ipproject-f42a.restdb.io/rest/profile?max=2",
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
      /*for(var i = 0; i<3; i++) {
        output = `${output}
        <p>${response[i].username}</p>`;
      }*/
      if(response.length){
        console.log(`User found`);
      }
      $("#card-text-name").html(output);
    });
  }
  function checkUsername(username){
  }
});

