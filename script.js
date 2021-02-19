/*QUIZ JS START*/

/*ANIMAL QUESTIONS API START*/
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
  var option = [];
  var totalPoints = 0;
  $.ajax(settings).done(function (response) {

    allData = response; //store all the questions into a global variable first 
    //create random number between 0-49
    var no = Math.floor((Math.random() * 50));
    var qns = response[no];
    completed.push(no);
    
    $("#question").html(qns.question);
    //$("#question").data("question-number", 0);

    $(".opt_container").html(`
        <div class="option" data-answer="yes" id="option01" data-id="option01">${qns.option01}</div>
        <div class="option" data-answer="yes" id="option02" data-id="option02">${qns.option02}</div>
        <div class="option" data-answer="yes" id="option03" data-id="option03">${qns.option03}</div>
        <div class="option" data-answer="yes" id="option04" data-id="option04">${qns.option04}</div>`);
    //console.log(`correct answer ${qns.correct_ans}`);

    $("#correct_answer").html(qns.correct_ans);

  });

  $(".nxt_qns_btn").on("click", function () {
    timer = 30;
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
          <div class="option" data-answer="yes" id="option01" data-id="option01">${qns.option01}</div>
          <div class="option" data-answer="yes" id="option02" data-id="option02">${qns.option02}</div>
          <div class="option" data-answer="yes" id="option03" data-id="option03">${qns.option03}</div>
          <div class="option" data-answer="yes" id="option04" data-id="option04">${qns.option04}</div>`

      );

      $("#correct_answer").html(qns.correct_ans);
      //console.log(`correct answer ${qns.correct_ans}`);
    }
    if(completed.length ==10) {
      document.getElementById("next").onclick = function () {
        location.href = "animalsresult.html";
    };
    }
  });


  $(".opt_container").on("click", ".option", function (e) {
    e.preventDefault();
    let correctAnswer = $("#correct_answer").html();
    let userAnswer = $(this).data("id");


    if (correctAnswer === userAnswer) {
      $(this).css("background", "green");
      score.correct++;
      totalPoints += 10;
    } else {
      $(this).css("background", "red");
      score.incorrect++;
      if (totalPoints <= 0) {
        totalPoints = 0;
      } else {
        totalPoints -= 10;
      }     
    }
    
    $( ".option" ).each(function( index ) {
      //let correctAnswer = $("#correct_answer").html();
      let opt = $(this).data("id"); //this relates to each option that was found
      if (userAnswer !== opt) { 
        $( this ).prop( "disabled", true );
        $(this).css({"background": "grey","border":"1px solid #333"});
      }

    });

    //console.log(`correct answer : ${correctAnswer} : userAns: ${userAnswer}`);
    console.log($(this).data("answer"));
    console.log(`correct: ${score.correct} | wrong: ${score.incorrect}`);
    console.log(points);
  });


  var timer = 30;
  var downloadTimer = setInterval(function () {
    if (timer < 0) {
      document.getElementById('option01').disabled = true;
      document.getElementById('option02').disabled = true;
      document.getElementById('option03').disabled = true;
      document.getElementById('option04').disabled = true;
      document.getElementById('option01').style.background="grey";
      document.getElementById('option02').style.background="grey";
      document.getElementById('option03').style.background="grey";
      document.getElementById('option04').style.background="grey";
      if (totalPoints <= 0) {
        totalPoints = 0;
      } else {
        totalPoints -= 10;
      }     
    } else {
      document.getElementById("countdown").innerHTML = timer;
    }
    timer -= 1;
  }, 1000);


})



//PROFILE START//
function station() {//stationery
  if (totalPoints<350){
    alert("You have yet to reach 350 points");
  } else{
    alert("You have redeemed a set of stationery. Thank You!");
  }
}
function bbt() {//bbt
  if (totalPoints<650){
    alert("You have yet to reach 650 points");
  } else{
    alert("You have redeemed a bubble tea. Thank You!");
  }
}
function dess() {//dessert
  if (totalPoints<1000){
    alert("You have yet to reach 1000 points");
  } else{
    alert("You have redeemed a dessert. Thank You!");
  }
}
function animal() {//animal
  if (totalPoints<500){
    alert("You have yet to reach 500 points");
  } else{
    alert("You have collected animal badge. Congrats!");
  }
}
function cart() {//cartoon
  if (totalPoints<500){
    alert("You have yet to reach 500 points");
  } else{
    alert("You have collected cartoon badge. Congrats!");
  }
}

function login() {
  location.replace("categories.html");
}

function logout() {
  location.replace("index.html");
}

$(document).ready(function () {
  const APIKEY = "602194e63f9eb665a16892ce";
  $("#btn-login").on("click", function (e) {
    e.preventDefault();

    let username = $("#username").val();
    let password = $("#password").val();
    var points = $("#number").val();
    console.log(username);
    login(username, password);
    
  });

  function check(username, password, points){
    var jsondata = {"name": username,"password": password, "points": points};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-f42a.restdb.io/rest/profile",
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

  function login(username, password, points){
    let query = `{"name": "${username}", "password": "${password}"}`;
    var settings = {
      //"async": true,
      //"crossDomain": true,
      "url": "https://ipproject-f42a.restdb.io/rest/profile",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      if(response.length){
        console.log(`User found`);
        location.replace("categories.html")
      }
      $("#card-text-name").html(query);
    });
  }
  function checkUsername(username){
  }

  function num(points){
    var jsondata = {"points": "totalPoints"};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://ipproject-f42a.restdb.io/rest/profile/(points)",
      "method": "PUT",
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
});