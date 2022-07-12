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
    const pokemonPack = document.getElementById('poke-container');
    const pokemonContainer = document.createElement("div")
    const pokemonName = document.createElement('h4')
    pokemonName.innerText = pokeData.name
    const pokemonNumber = document.createElement('p')
    pokemonNumber.innerText = `#${pokeData.id}`
    const pTypes = document.createElement('ul')
    const img = pokeData.sprites.front_default
    const shinyImg = pokeData.sprites.front_shiny
    const finalImg = `<img src="${img}" data-img="${shinyImg}">`
    const btn = document.createElement('button')
    btn.className = 'add-btn'
    btn.textContent = 'Add Pokemon To Party!'

    btn.addEventListener('click', (e) => {
        
    })
}