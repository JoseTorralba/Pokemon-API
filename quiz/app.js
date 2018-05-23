// Array of Correct Responses
var correctMessages = [
    'YASSS QUEEN',
    'SLAYYYYYYYY',
    'nicee'
];

// Array of Wrong Responses
var wrongMessages = [
    "you're trash",
    'go watch the show or something',
    'google it my guy'
];

$(document).ready(function() {

    // Random Pokemon
    var offset = Math.round(Math.random() * 300);
    
    // Pokemon API Url
    var pokemonByName = "https://pokeapi.co/api/v2/pokemon/"
        +offset;

    $.getJSON(pokemonByName, function (details) {
        console.log(details);

        // Gets element by id
        var pokemonInfoDiv = $('#pokemon-info');
        var pokemonButtonName = $('#pokemon-names');

        // Hides previous results
        document.getElementById('pokemon-info').innerHTML = "";

        // Adds Transparent Background
        document.getElementById('pokemon-info').style.backgroundColor = "rgba(0, 0, 0, 0.53)";

        // Shows Pokemon Sprite
        pokemonInfoDiv.append("<img id='img' src='" + details.sprites.front_default + "'>")

        // Shows Pokemon Name
        var name = details.species.name;

        $.getJSON('pokemons.json', function (pokemons) {

            // n randomizes button position
            var n = Math.floor(Math.random() * 5);
            for (var i = 0; i < 6; i++) {
                if (n == i) {
                    // Shows correct pokemon name
                    pokemonButtonName.append('<button id="correct">' + name + '</button>');
                    
                } else {
                    // Shows Pokemon Name
                    var r = Math.floor(Math.random() * pokemons.length);
                    
                    // Creates Buttons with Wrong Pokemon
                    var wrongButton = document.createElement('button');
                    wrongButton.textContent = pokemons[r];
                    wrongButton.id = "btn" + [i];
                    pokemonButtonName.append(wrongButton);
                }
            }

            // Gets Elements by ID
            var message = document.getElementById('message');
            var retry = document.getElementById('retry');
            var correctPokemon = document.getElementById('correct');
            
            // When User Clicks on the Right Pokemon
            correctPokemon.onclick = function() {
                
                // Removes Filter from Image
                document.getElementById('img').style.filter = 'none';

                // Displays one of the correct messages
                message.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];;

                // Displays Retry Button
                retry.style.display = "block";
            };

            // When User Clicks on the Wrong Pokemon
            // Displays one of the wrong messages
            document.getElementById('btn0').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn1').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn2').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn3').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn4').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn5').onclick = function() {
                message.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };
        });
    });
});