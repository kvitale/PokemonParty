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
            pokemonCard(pokemon)
        })
}
fetchPokemon()

function pokemonTypes(types, ul) {
    types.forEach(function (type) {
        const li = document.createElement('li');
        li.addEventListener('mouseover', listColor);
        li.addEventListener('mouseout', listColor);
        li.innerText = type['type']['name'];
        ul.append(li)
    })
}

function pokemonCard(pokeData) {
    const pokemonPack = document.getElementById('poke-container');
    const pokemonContainer = document.createElement("div")
    pokemonContainer.className = "poke-card";
    const pokemonName = document.createElement('h4')
    pokemonName.innerText = pokeData.name
    const pokemonNumber = document.createElement('p')
    pokemonNumber.innerText = `#${pokeData.id}`
    const pTypes = document.createElement('ul')
    pTypes.className = "text"
    const img = pokeData.sprites.front_default
    const shinyImg = pokeData.sprites.front_shiny
    const finalImg = `<img src="${img}" data-img="${shinyImg}" onclick="shinyPokemon(this)">`
    const btn = document.createElement('button')
    const heart = document.createElement('button')
    btn.addEventListener('click', movePokemon);
    btn.className = 'add-btn'
    btn.textContent = 'Add Pokemon To Party!'
    heart.textContent = '♥'
    heart.addEventListener('click', likeButton);





    pokemonTypes(pokeData.types, pTypes)
    pokemonContainer.append(pokemonName, pokemonNumber);
    pokemonContainer.innerHTML += finalImg;
    pokemonContainer.append(pTypes, btn, heart);
    pokemonPack.appendChild(pokemonContainer);
}

function shinyPokemon(item) {
    let holdSrc = item.src;
    item.src = item.dataset.img;
    item.setAttribute("data-img", holdSrc);

}



function movePokemon() {

    const myParty = document.getElementById('mypartyEA');
    const notMine = document.getElementById('poke-container');
    const pokeCard = this.parentElement;
    if (this.classList.contains('right')) {
        notMine.append(pokeCard);
        this.textContent = "Add Pokemon To Party!"
        this.classList.remove('right')
        console.log("YEAHHH")
    } else {
        myParty.append(pokeCard);
        console.log(pokeCard);
        this.textContent = "Remove from Party"
        this.classList.add("right")
    }

}

function likeButton() {

    if (this.style.color.includes('red')) {
        this.style.color = 'black';

    } else { this.style.color = "red" };
}

function listColor(e) {
    if (e.type == "mouseover") {
        e.target.style.border = "2px solid black";
        e.target.style.fontSize = "20px";
        e.target.style.color = "blue";
        e.target.style.background = "orange";

    } else {
        e.target.style.border = "none";
        e.target.style.fontSize = "14px";
        e.target.style.color = "black";
        e.target.style.background = "none";

    }
}













