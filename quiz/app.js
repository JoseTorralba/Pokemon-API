$(function () {

    // Pokemon Search Bar
    var pokemonSearchBar = document.getElementById('pokemon-search');
    var pokemonRandomButton = document.getElementById('random-pokemon');

    $(pokemonSearchBar).on("keypress", function (event) {

        if (event.which == 13) {

            var value = this.value;
            var pokemonDescription = "https://pokeapi.co/api/v2/pokemon-species/"
                + value;

            var pokemonByName = "https://pokeapi.co/api/v2/pokemon/"
                + value;


            $.getJSON(pokemonByName, function (details) {
                console.log(details);

                // Gets element by id
                var pokemonInfoDiv = $('#pokemon-info');

                // Hides previous results
                document.getElementById('pokemon-info').innerHTML = "";

                document.getElementById('pokemon-info').style.backgroundColor = "rgba(0, 0, 0, 0.53)";

                // Shows Pokemon Name
                pokemonInfoDiv.append('<h3>' + details.species.name + '</h3>');

                // Shows Pokemon's Type
                // prob need to make loop or if for it to work properly
                pokemonInfoDiv.append('<p>' + 'Pokemon Type: ' + details.types[0].type.name + '</p>');
                //pokemonInfoDiv.append('<p>' + details.types[1].type.name + '</p>');

                // Shows Pokemon Dex. Entry
                pokemonInfoDiv.append('<p>' + 'Pokemon Dex. Entry No. ' + details.game_indices[0].game_index + '</p>');

                // Shows Pokemon Sprite & Shiny 
                pokemonInfoDiv.append("<img src='" + details.sprites.front_default + "'>")
                pokemonInfoDiv.append("<img src='" + details.sprites.front_shiny + "'>")



                $.getJSON(pokemonDescription, function (descriptions) {
                    console.log(descriptions);

                    // Shows Pokemon Description
                    pokemonInfoDiv.append('<p>' + descriptions.flavor_text_entries[1].flavor_text + '</p>');


                });
            });
        };
    });

    // Random Pokemon Button
    $(pokemonRandomButton).click(function (event) {

        console.log(pokemonRandomButton);

 
            var randomPokemon = Math.round(Math.random() * 100);
            var pokemonDescription = "https://pokeapi.co/api/v2/pokemon-species/"
                + randomPokemon;

            var pokemonByName = "https://pokeapi.co/api/v2/pokemon/"
                + randomPokemon;


            $.getJSON(pokemonByName, function (details) {
                console.log(details);
                
                // Gets element by id
                var pokemonInfoDiv = $('#pokemon-info');

                // Hides previous results
                document.getElementById('pokemon-info').innerHTML = "";
                document.getElementById('pokemon-info').style.backgroundColor = "rgba(0, 0, 0, 0.53)";

                // Shows Pokemon Name
                pokemonInfoDiv.append('<h3>' + details.species.name + '</h3>');

                // Shows Pokemon's Type
                // prob need to make loop or if for it to work properly
                pokemonInfoDiv.append('<p>' + 'Pokemon Type: ' + details.types[0].type.name + '</p>');
                //pokemonInfoDiv.append('<p>' + details.types[1].type.name + '</p>');

                // Shows Pokemon Dex. Entry
                pokemonInfoDiv.append('<p>' + 'Pokemon Dex. Entry No. ' + details.game_indices[0].game_index + '</p>');

                // Shows Pokemon Sprite & Shiny 
                pokemonInfoDiv.append("<img src='" + details.sprites.front_default + "'>")
                pokemonInfoDiv.append("<img src='" + details.sprites.front_shiny + "'>")



                $.getJSON(pokemonDescription, function (descriptions) {
                    console.log(descriptions);

                    // Shows Pokemon Description
                    pokemonInfoDiv.append('<p>' + descriptions.flavor_text_entries[1].flavor_text + '</p>');


            });
        });
    });

});

