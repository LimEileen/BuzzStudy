/*CARTOON QUESTIONS API START*/
$(document).ready(function () {
  var settings = {
    "url": "https://ipproject-f42a.restdb.io/rest/cartoon?access_token=BQDkBkYpJbSySoyFXUs7E2RCTzfowVaDzifbbt2bFuJCzUarMF6a0XwAu5rJLIYXhGof4oB-0gWn6_5YOZDxxzN620jTc0kJdvGpPbrQIAbBzZweIS2UJMCzfQk1ZX_JWSldrTiwn47qy5UeYqfrU-uNPO36I5MD__xDYVO2K-WX-2Y1e609-oP9Bgq3mySk_dsrwa7bk6dqquLvyXNgQTCGzgPC64T8wn2tZyVspo8WF8_uGj80JTmEIuxj1dRrzO9rSxzbrI_2oA_NbjotZlTkpQsqbNvkC8GgfPI",
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
        location.href = "cartoonresult.html";
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



