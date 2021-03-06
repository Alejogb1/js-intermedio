

const botonNext = document.querySelector("#button-next")
const botonPrevious = document.querySelector("#button-previous")

let valueNext; 
botonNext.onclick = () => {
  console.log("En onclick: "+ valueNext)
  fetch(valueNext)
}

 fetch('https://pokeapi.co/api/v2/pokemon')
 .then(response => response.json())
 .then(function(allpokemon){
   valueNext = allpokemon.next // valor de la url 
   console.log( "dentro de fetch: ", valueNext)
 allpokemon.results.forEach((pokemon) => {
   fetchPokemonData(pokemon); 
 })
})
  function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    console.log(pokemon.url)
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){ 
    renderPokemon(pokeData)
    })
}
function renderPokemon(pokeData) {
  let allPokemonContainer = document.getElementById("poke-container")

  allPokemonContainer.classList.add("all-pokemon-container")
  
  let pokeContainer = document.createElement("div")

  pokeContainer.classList.add("poke-container")

  let pokeName = document.createElement("h4")

  let pokeHeight = document.createElement("p")

  pokeName.innerText = "NAME: " + pokeData.name

  pokeHeight.innerText ="HEIGHT: " + pokeData.height

  let pokeUl = document.createElement("ul")


  createTypes(pokeUl, pokeData.types)

  createPokeImage(pokeData.id, pokeContainer)

  allPokemonContainer.appendChild(pokeContainer)
  pokeContainer.append(pokeName, pokeHeight, pokeUl)
}
function createTypes (ul, type) {
  
  type.forEach((type) => {

    let pokeLi = document.createElement("li")

    pokeLi.innerText = type["type"]["name"]

    ul.append(pokeLi)
  })
}
function createPokeImage (pokeId, container){

  let pokeImg = document.createElement("img")

  pokeImg.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`

  container.append(pokeImg)
}

