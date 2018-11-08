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

    // PokeAPI
    $.getJSON(pokemonByName, function (details) {
        console.log(details);

        // Gets element by id
        var pokeImgDiv = document.getElementById('pokemon-img');
        var pokemonButtonName = document.getElementById('pokemon-names');
        // Hides previous results
        pokeImgDiv.innerHTML = "";

        // Creates Img with Pokemon Sprite
        var pokeImg = document.createElement('img');
        pokeImg.id = 'img';
        pokeImg.className = ('poke-info__img');
        pokeImg.src = details.sprites.front_default;
        pokeImgDiv.append(pokeImg);

        // Pokemon json
        $.getJSON('pokemons.json', function (pokemons) {

            // randomizes button position
            var randomPokeName = Math.floor(Math.random() * 5);
            // Shows Pokemon Name
            var name = details.species.name;

            for (var i = 0; i < 6; i++) {
                if (randomPokeName == i) {

                    // Creates correct button
                    var rightPokeBtn = document.createElement('button');
                    rightPokeBtn.textContent = name;
                    rightPokeBtn.className = ('btn btn--blue');
                    rightPokeBtn.id = 'correct';
                    pokemonButtonName.append(rightPokeBtn);
                    
                } else {

                    // Randomizes Pokemon Names
                    var r = Math.floor(Math.random() * pokemons.length);
                    
                    // Creates wrong buttons
                    var wrongButton = document.createElement('button');
                    wrongButton.textContent = pokemons[r];
                    wrongButton.className = ('btn btn--blue');
                    wrongButton.id = "btn" + [i];
                    pokemonButtonName.append(wrongButton);
                }
            }

            // Gets Elements by ID
            var pokeText = document.getElementById('message');
            var correctPokemon = document.getElementById('correct');
            var retry = document.getElementById('retry');
            // Retry Button
            retry.style.display = 'none';

            // When User Clicks on the Right Pokemon
            correctPokemon.onclick = function() {
                
                // Removes Filter from Image
                document.getElementById('img').style.filter = 'none';

                // Displays one of the correct messages
                pokeText.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];;

                // Displays Retry Button
                retry.style.display = "block";
            };
            
            // When User Clicks on the Wrong Pokemon
            // Displays one of the wrong messages
            document.getElementById('btn0').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn1').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn2').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn3').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn4').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

            document.getElementById('btn5').onclick = function() {
                pokeText.textContent = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];;
            };

        });
    });
});