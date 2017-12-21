$(document).ready(function(){

    //Start timer
    $("#start").click(function() {
        //$("#start").hide()
        $(this).hide();
        run()
    });
    var Correct = 0;
    var Incorrect = 0;
    var number = 90;

    //Set Countdown function
    function run() {
        intervalID = setInterval(decrement, 1000);

    }

    function decrement() {
        number--;
        //Place timer on html
        $("#timer").html("<div>" + "Time left remaining!" + "  " + number + "</div>");

        if (number <= -1) {


            //Alert time is up
            alert("Time Up!");

            stop();
        }
    }

    //})

    /*
                    function choices(){
                        $("#question1").html("<span> Gandolf was a powerful wizard in the film series Harry Potter? </span>")

                        $("#question2").html("<span> The tv show The Simpsons aired before the show Family Guy </span>")

                        $("#question3").html("<span> Darkwing Duck, Gargoyles, and Talespin were popular cartoons in the 90's?</span>")

                        $("#question4").html("<span> Street Sharks, Battletoads, and the Teenage Mutant Ninja Turtles all were 4 brothers teams that fought crime.</span>")

                        $("#question5").html("<span> In the cartoon Dragon Ball Z, Goku turned Super Saiyan because Frieza put Gohan in coma.</span>")

                        $("#question6").html("<span> In the show Power Rangers, Tommy was the first leader of the team.</span>")

                        //create choices
                       var option = $("<input>").text("True");
                        var option2 = $("<input>False<br>")
                        option.attr("type", "radio");
                       // option2.attr("type", "radio");
                        option.attr("value", true);
                        //option.attr("text", "True")
                        //option2.attr("value", false);
                        $("#question6").append(option);
                       // $(".option").append(option2);
                       //$("<button></button>").text("True");
                       //$("button")addClass()
    */

    //Set Questions variable
    var score = 0
    var questions = {

        Q1: ["Gandolf was a powerful wizard in the film series Harry Potter", "f"],


        Q2: ["The tv show The Simpsons aired before the show Family Guy", "t"],


        Q3: ["Darkwing Duck, Gargoyles, and Talespin were popular cartoons in the 90's?", "t"],


        Q4: [" Street Sharks, Battletoads, and the Teenage Mutant Ninja Turtles all were 4 brothers teams that fought crime.", "f"],


        Q5: ["Every Disney movie in the 90's has a major support character thats an animal", "t"],


        Q6: ["In the show Power Rangers, Tommy was the first leader of the team.", "f"],

        Q7: ["Mortal Kombat had a character that slides in from the corner screen that say's TOASTY!!!", "t"],

        Q8: ["In the cartoon Dragon Ball Z, Goku turned Super Saiyan because Frieza put Gohan in coma.", "f"],

        Q9: ["When you were between the ages of 8 - 13  playing outside, you used a water hose for nourishment", "t"]


    };
    //Set Questions array
    var questionsArray = [questions.Q1, questions.Q2, questions.Q3, questions.Q4, questions.Q5, questions.Q6, questions.Q7, questions.Q8, questions.Q9];
    var questionIndex = 0;
    //for(var i = 0; i < questions.length; i++){
    //console.log(questions[i]);

    //Place Questions on html

    function renderQuestion() {
        if (questionIndex <= (questionsArray.length - 1)) {
            document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
        }

        //Results after game     
        else {
            document.querySelector("#question").innerHTML = "Game Over!";
            if (Correct >= Incorrect) {
                $("#Final").html("<span> You are hype to my era! </span>")
            } else {
                $("#Final").html("<span> Seems you are to young to know anything!</span>")

            }

            document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
        }

    }


    // Function that updates the score...
    function updateScore() {
        document.querySelector("#Correct").innerHTML = "Number Correct: " + Correct;
        document.querySelector("#Incorrect").innerHTML = "Number Incorrect: " + Incorrect;
    }

    renderQuestion();
    updateScore();

    // Set up function for user choices
    document.onkeyup = function(event) {

        // If there are no more questions, stop the function.
        if (questionIndex === questionsArray.length) {
            return;
        }

        //function for user chocies
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();


        if (userInput === "t" || userInput === "f") {

            // Function for scoring
            if (userInput === questionsArray[questionIndex][1]) {
                alert("Correct!");
                Correct++;
                updateScore();
            } else {
                Incorrect++
                alert("Wrong!");
                updateScore();
            }

            // Increment the questionIndex variable and call the renderQuestion function.
            questionIndex++;
            renderQuestion();
        }
    }
})



// choosing the choices
/*
                    $(".option").on("click", function() {
                        var correctCounter = 0;
                        var incorrectCounter = 0;
                        var choiceOption = 
                        //($(".option").attr("value"));
                            console.log(choiceOption);

                        if (choiceOption === true) {
                            correctCounter++
                        } else {
                            incorrectCounter++
                        }

                        $("#Correct").html("<span>" + "Lucky you, you have answered" + " " + correctCounter + " " + "properly!" + "</span>");
                        $("#Incorrect").html("<span>" + "Since you got" + " " + incorrectCounter + " " + "wrong, you must to young" + "</span>");
                    })
  */


/*      

2. //click choices for each crystal


            $(".crystal").on("click", function() {

                var crystalChoices = ($(this).attr("data-crystalvalue"));
                crystalChoices = parseInt(crystalChoices);
                // Each time the user clicks the crystal the counter goes up by 1.
                counter += crystalChoices;

                //document.getElementById("sumtotal").innerHTML
                console.log("New score" + "" + counter);
                $("#sumtotal").html("<div>" + counter + "</div>")



                //Wins and losses

                if (counter === target) {
                    alert("You win")
                } else if (counter >= target) {
                    alert("you lose")

1. var crystal = $("<img>")
                //var choices = choiceArray[Math.round((Math.random()))];

                //add class
                crystal.addClass("crystal");

                //add attributes for picture and data value
                crystal.attr("src", "http://www.johnbetts-fineminerals.com/jhbnyc/mineralmuseum/53560.jpg");

                crystal.attr("data-crystalvalue", choiceArray[i]);

                //add this class and attributes to div

                $("#crystal").append(crystal); 
*/



function stop() {
    clearInterval(intervalID);


}




//run();





//Create a timer a for the session
//Create an array of questions
//Create the true or false options
//Create winner/loser prompts