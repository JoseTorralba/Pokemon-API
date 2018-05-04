$(function() {

    // url
    var pokemonApiUrl = "https://pokeapi.co/api/v2/generation/3";
    var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

    // console.log(pokemonApiUrl);

    // data returns pokemon info
    $.getJSON(pokemonApiUrl, function(data) {
        $.each(data.pokemon_species, function(index, pokemon) {

            var pokemonDiv = document.getElementById('pokemon');

            // console.log(data);

            // Capitalizes first letter in every pokemon name
            // without it, pokemon name would stay lowercase
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);


            // creates 'a' tag
            // with id and href attribute
            var pokemonLink = $("<input>")
                .attr("type", "button")
                .attr("value", "Pokemon No." + (index + 1) + " is " + name)
                .attr("id", pokemon.name)
                .attr("href", "#");

            // When a pokemon name is clicked
            // shows name and image of that pokemon
            pokemonLink.click(function(event) {
                $.getJSON(pokemonByName + pokemon.name, function(details) {

                    console.log(details);
                    var pokemonInfoDiv = $('#pokemon-info')

                    // Hides previous results
                    document.getElementById('pokemon-info').innerHTML = "";
                    
                    pokemonInfoDiv.append('<h3>' + name + '</h3>');
                    pokemonInfoDiv.append("<img src='" + details.sprites.front_default + "'>")
                    pokemonInfoDiv.append("<img src='" + details.sprites.front_shiny + "'>")
                });
            });

            // a tags inside div append towards the div id #pokemon
            pokemonLink.appendTo(pokemonDiv);

        });
    });
});