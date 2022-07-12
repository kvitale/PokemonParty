function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(function (pokemon) {
            pokemon.results.forEach(function (poke) {
                pokemonData(poke)
            })
        })
}


