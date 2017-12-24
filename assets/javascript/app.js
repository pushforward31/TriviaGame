    $(document).ready(function() {
        //Start timer
        $("#start").click(function() {
            //$("#start").hide()
            $(this).hide();
            run()
        });
        var Correct = 0;
        var Incorrect = 0;
        var number = 75;

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
                    $("#Final").html("<span> You are hype to the 90's! </span>")
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
        document.onkeyup = function() {

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
                    Incorrect++;
                    alert("Wrong!");
                    updateScore();
                }
              

                // Increment the questionIndex variable and call the renderQuestion function.
                questionIndex++;
                renderQuestion();
            }
        }
    })



   


    function stop() {
        clearInterval(intervalID);
        number = 0;

    }



