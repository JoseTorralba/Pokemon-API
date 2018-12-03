$(function () {
    // Gets Input & Button Back by ID
    var pokemonSearchBar = document.getElementById('pokemon-search');
    var pokemonRandomButton = document.getElementById('random-pokemon');
    var pokeCard = document.getElementById('poke-card');
    pokeCard.style.opacity = "0";
    pokeCard.style.transition = "all .3s";

    // Pokemon Search Bar
    $(pokemonSearchBar).on("keypress", function (event) {

        if (event.which == 13) {

            var value = this.value;
            var pokemonDescription = "https://api.codetabs.com/v1/proxy?quest=https://pokeapi.co/api/v2/pokemon-species/"
                + value;

            var pokemonByName = "https://api.codetabs.com/v1/proxy?quest=https://pokeapi.co/api/v2/pokemon/"
                + value;
            
            $.getJSON(pokemonByName, function (details) {
                console.log(details);

                // Displays Pokemon Card
                // pokeCard.style.display = "block";
                pokeCard.style.opacity = "1";

                // Gets element by id
                var pokemonInfoDiv = $('#poke-card__info');

                // Hides previous results
                document.getElementById('poke-card__info').innerHTML = "";

                // Shows Pokemon Name
                const pokeName = document.createElement('h3');
                pokeName.textContent = details.species.name;
                pokeName.classList = "poke-card__heading";
                pokemonInfoDiv.append(pokeName);

                // Shows Pokemon's Type
                const pokeType = document.createElement('p');
                pokeType.textContent = 'Pokemon Type: ' + details.types[0].type.name
                //pokemonInfoDiv.append('<p>' + details.types[1].type.name + '</p>');
                pokeType.classList = "poke-card__text";
                pokemonInfoDiv.append(pokeType);

                // Shows Pokemon Dex. Entry
                const pokeEntry = document.createElement('p');
                pokeEntry.textContent = 'Pokemon Dex. Entry No.' + details.game_indices[0].game_index;
                pokeEntry.classList = "poke-card__text";
                pokemonInfoDiv.append(pokeEntry);

                // Shows Original Pokemon
                const pokeImg = document.createElement('img');
                pokeImg.src = details.sprites.front_default;
                pokeImg.classList = "poke-card__img";

                // Shows Shiny Pokemon
                const shinyPokeImg = document.createElement('img');
                shinyPokeImg.src = details.sprites.front_shiny;
                shinyPokeImg.classList = "poke-card__img";

                pokemonInfoDiv.append(pokeImg);
                pokemonInfoDiv.append(shinyPokeImg);

                $.getJSON(pokemonDescription, function (descriptions) {
                    console.log(descriptions);

                    // Shows Pokemon Description
                    const pokeDesc = document.createElement('p');
                    pokeDesc.textContent = descriptions.flavor_text_entries[1].flavor_text;
                    pokeDesc.classList = "poke-card__desc";
                    pokemonInfoDiv.append(pokeDesc);
                });
            });
        };
    });

    // Random Pokemon Button
    $(pokemonRandomButton).click(function (event) {

            var randomPokemon = Math.round(Math.random() * 100);
            var pokemonDescription = "https://api.codetabs.com/v1/proxy?quest=https://pokeapi.co/api/v2/pokemon-species/"
                + randomPokemon;

            var pokemonByName = "https://api.codetabs.com/v1/proxy?quest=https://pokeapi.co/api/v2/pokemon/"
                + randomPokemon;

            $.getJSON(pokemonByName, function (details) {
                console.log(details);

                // Displays Pokemon Card
                // pokeCard.style.display = "block";
                pokeCard.style.opacity = "1";
                
                // Gets element by id
                var pokemonInfoDiv = $('#poke-card__info');

                // Hides previous results
                document.getElementById('poke-card__info').innerHTML = "";
                // document.getElementById('poke-card__info').style.backgroundColor = "rgba(0, 0, 0, 0.53)";

                // Shows Pokemon Name
                const pokeName = document.createElement('h3');
                pokeName.textContent = details.species.name;
                pokeName.classList = "poke-card__heading";
                pokemonInfoDiv.append(pokeName);

                // Shows Pokemon's Type
                const pokeType = document.createElement('p');
                pokeType.textContent = 'Pokemon Type: ' + details.types[0].type.name
                //pokemonInfoDiv.append('<p>' + details.types[1].type.name + '</p>');
                pokeType.classList = "poke-card__text";
                pokemonInfoDiv.append(pokeType);

                // Shows Pokemon Dex. Entry
                const pokeEntry = document.createElement('p');
                pokeEntry.textContent = 'Pokemon Dex. Entry No.' + details.game_indices[0].game_index;
                pokeEntry.classList = "poke-card__text";
                pokemonInfoDiv.append(pokeEntry);

                // Shows Original Pokemon
                const pokeImg = document.createElement('img');
                pokeImg.src = details.sprites.front_default;
                pokeImg.classList = "poke-card__img";

                // Shows Shiny Pokemon
                const shinyPokeImg = document.createElement('img');
                shinyPokeImg.src = details.sprites.front_shiny;
                shinyPokeImg.classList = "poke-card__img";

                // Appends Pokemon Sprite & Shiny Sprite
                pokemonInfoDiv.append(pokeImg);
                pokemonInfoDiv.append(shinyPokeImg);

            $.getJSON(pokemonDescription, function (descriptions) {
                console.log(descriptions);

                // Shows Pokemon Description
                const pokeDesc = document.createElement('p');
                pokeDesc.textContent = descriptions.flavor_text_entries[1].flavor_text;
                pokeDesc.classList = "poke-card__desc";
                pokemonInfoDiv.append(pokeDesc);
            });
        });
    });
});

