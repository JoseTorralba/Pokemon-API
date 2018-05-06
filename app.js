$(function () {

    // Pokemon Search Bar
    var pokemonSearchBar = document.getElementById('pokemon-search');

    $(pokemonSearchBar).on("keypress", function (event) {

        if (event.which == 13) {

            var value = this.value;
            var pokemonDescription = "https://pokeapi.co/api/v2/pokemon-species/"
                + value;

            var pokemonByName = "https://pokeapi.co/api/v2/pokemon/"
                + value;


            $.getJSON(pokemonByName, function (details) {
                console.log(details);

                var pokemonInfoDiv = $('#pokemon-info')

                // Hides previous results
                document.getElementById('pokemon-info').innerHTML = "";

                // Shows Pokemon Name
                pokemonInfoDiv.append('<h3>' + details.species.name + '</h3>');

                // Shows Pokemon's Type
                pokemonInfoDiv.append('<p>' + details.types[0].type.name + '</p>');
                //pokemonInfoDiv.append('<p>' + details.types[1].type.name + '</p>');

                // Shows Pokemon Dex. Entry
                pokemonInfoDiv.append('<p>' + details.game_indices[0].game_index + '</p>');

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
});















