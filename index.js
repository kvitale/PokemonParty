function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(function (pokemon) {
            pokemon.results.forEach(function (poke) {
                pokemonData(poke)
            })
        })
}

function pokemonData(pokemon) {
    const url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(function (pokemon) {
            console.log(pokemon)
            pokemonCard(pokemon)
        })
}
fetchPokemon()

function pokemonTypes(types, ul) {
    types.forEach(function (type) {
        const li = document.createElement('li');
        li.innerText = type['type']['name'];
        ul.append(li)
    })
}

function pokemonCard(pokeData) {

    
}