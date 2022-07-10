function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(function(pokemon){
        pokemon.results.forEach(function(poke){
            pokemonData(poke)
        })
    })
}


function pokemonData(single){
    let url = single.url 
      fetch(url)
      .then(response => response.json())
      .then(function(pokemon){
      console.log(pokemon)
      })
    }
fetchPokemon()



function createPokeCard(data){
    
    const img = createElement('img')
    img.src = data.sprites.front_default
    img.setAttribute('data-shiny', data.sprites.front_shiny)
    img.className = 'poke-avatar'

   const h2 = document.createElement('h2')
   h2.textContent = data.name

   const btn = document.createElement('button')
   btn.id = ('id', data.id)
   btn.className = 'add-btn'
   btn.textContent = 'Add Pokemon'
   btn.addEventListener('click', (e) => {

   })

   const pokeCard = document.querySelector('.poke-container')
   div.append(img, h2, btn)
   pokeCard.append(div)
}






//    function fetchPoke(data){
//        const img = createElement('img')
//    }
