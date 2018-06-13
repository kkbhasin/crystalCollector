
        // Setting up global variables.
        var counter = 0;
        var wins = 0
        var losses = 0
        var crystal = $(".crystals");
        var crystalScore;
        var targetScore;
        var buttons;



        function newGame() {
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#target-score").empty();
            $("#user-score").empty();

            counter = 0;

            // Set a target score between 19 and 120.
            targetScore = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];

            // Attributing values to the images of the crystals. 
            for (i = 0; i < 4; i++) {
                buttons = {
                    // jewels: ["#fire", "#lightning", "#water", "#earth"],
                    // value: 0,
                    generator: function () {
                        return [Math.floor(Math.random() * 11) + 1];
                    }
                };

                $(".crystals").each(function () {
                    $(this).attr("data-crystalValue", buttons.generator());
                    i++;
                });
            }

            // Setting up targetScore to appear on page.
            $("#target-score").html(targetScore);
        }

        newGame();

        // Setting up on-click functionality for the images, and creating the newGame sequence.
        $(".crystals").on("click", function () {
            var crystalValue = ($(this).attr("data-crystalValue"));
            crystalValue = parseInt(crystalValue);
            counter = counter + crystalValue;
            $("#user-score").html(counter);
            console.log(counter);

            if (counter == targetScore) {
                alert("You win!");
                wins++
                newGame();
            }

            else if (counter > targetScore) {
                alert("You lose!!");
                losses++
                newGame();
            }
        })

