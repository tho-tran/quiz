$(document).ready(function() { //start på ready

var url = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz";

$.get(url, function(data){ // Hämtar API från var URL
var getObj = data; // Placerar alla object i var getObj

//console.log(getObj); // Data = alla object i arrayen

for (var i = 0; i <= getObj.length; i++){ // loopar igenom object och...
  var question = getObj[i].question;
  var correctAnswer = getObj[i].correct_answer; //...sorter ut i olika var
  var wrongAnswer = getObj[i].incorrect_answers;

  //console.log(wrongAnswer);// Felsvaren är en egen array.

  var row = $(".form").append("<p></p>"); // appendar p på form med class form.
  $(".form").append("<p>" + question + "</p>" ); // appendar questiion på tillagd p-elemement.

  var correctAnswerIndex = Math.floor(Math.random() * wrongAnswer.length); // Math.random() slumpar ett tal, den behöver kombineras med math.floor() för att inte bli ett decimaltal. I detta fallet ett tal mellan 0 och *wrongAnswers.length.

  for (var j = 0; j < wrongAnswer.length + 1; j++) {  //För varje gång j är mindre än längden på wrongAnswere arrayen appendas ett rätt svar tillsammans med en input där value är ”correct”.
    if (j == correctAnswerIndex) {
      row.append('<div>'+
        '<input type="radio" name="svar' +   //För att kunna välja endast ett alternativ per fråga behöver inputsen loopas ut med varje fråga och vara märkta med vilka som är fel alternativ och vilka som är rätt.
          i +
          '" id="correctAnswer' + //Id
          i +
          '1" value="correct" >' +
          '<label for="svar' +
          i +
          '1">' +
          correctAnswer +
          "</label>"+'</div>'
      );
      // $('label').css('color','blue');
      continue;
    }
    var k = j;
    if (j > correctAnswerIndex) {
      k -= 1;
    }
    row.append('<div>'+
      '<input type="radio" name="svar' +
        i +
        '" id="wrongAnswer' + //Id
        i +
        (k + 2) +
        '" value="wrong">' +  //Samtidigt appendas felsvar(+2) tillsammans med en input där value är ”wrong”
        '<label for="svar' +
        i +
        (k + 2) +
        '">' +
        wrongAnswer[k] +
        "</label>" +
        '</div>'
    );
  }
  $("#btn").click(function() {

    // $("input[value=correct]").addClass("correct_answer_green");
    // $(".correct_answer_green").css("color", "green");
    // //funkar inte
    var score = 0;
    var answers = $('input[value="correct"]');
    for (var answer of answers) {
      if (answer.checked == true) {
        score += 1;
        $("input[value=correct]:checked").next().css('color', 'green');
      } else {
        score += 0;
        $("input").parents('div>div').css('color', 'red');
      }
      //slut på if
    } // slut på for var answer of
    $(".score").text('Totalt ' + score + ' rätt');
  // alert("Du fick " + score + " poäng av " + answers.length + " möjliga ");
  
  
  });

}// slut på for var


});//slut på get

//Knappen som rättar svar och redovisar resultat via en alert.

 //slut på kapp-funktion

}); //slut på ready


//$(".correctAnswerIndex").addClass("correct_answer_green");
//$(".correct_answer_green").css("color", "green");

//$("correct_answer").addClass("correct_answer_green");
//$(".correct_answer_green").css("color", "green");

//$("correctAnswer").addClass("correct_answer_green");
//$(".correct_answer_green").css("color", "green");


//$("input[id=correctAnswer]").closest("label").css("color","green");
//$("input[id=wrongAnswer]").closest("label").css("color","red");

//$("input[value=correct]").closest('lable').css("color","green");
//$("input[value=wrong]").closest('lable').css("color","green");

//document.getElementById("correctAnswer").style.color = "red";
//document.getElementById("wrongAnswer").style.color = "green";

//$("input[value=correctAnswer]").closest('lable').css("color","green");
//$("input[value=wrongAnswer]").closest('lable').css("color","green");

//$("input[value=correctAnswer]").closest("label").css("color","green");
//$("input[value=wrongAnswer]").closest("label").css("color","red");
