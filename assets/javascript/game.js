
        // Creates an array that lists out all of the options for the computer(alphabet)
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // Creating variables to hold the number of wins, losses, and guesses left. 
        var wins = 0;
        var losses = 0;
        var guesses = 9;
        var choices = [];


        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

            // Determines which key was pressed.
            var userGuess = event.key;

            // Randomly chooses a choice from the options array. This is the Computer guess.
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess)

            // Creates an array that lists out all of the options for the user to choose (alphabet)
            var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            // This logic determines if the letter picked is correct/incorrect

            if (alphabet.indexOf(userGuess) > -1) {

                if (userGuess === computerGuess) {
                    wins++;
                    guesses = 9;
                    choices = [];
                }

                if (userGuess != computerGuess) {
                    guesses--;
                    choices.push(userGuess);
                }

                if (guesses === 0) {

                    guesses = 9;
                    losses++;
                    choices = [];
                }

                //this prints the outcomes to the wepage so the user can see how they are doing
                var html =
                    "<h1> The Psychic Game </h1>" +
                    "<p> Guess what letter I'm thinking of! </p>" +
                    "<p> Wins: " + wins + "</p>" +
                    "<p> Losses: " + losses + "</p>" +
                    "<p> Guesses Left: " + guesses + "</p>" +
                    "<p> Your Guesses so far: " + choices.join(", ") + "</p>";

                document.querySelector("#game").innerHTML = html;
            }

        };



 