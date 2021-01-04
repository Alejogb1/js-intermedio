

const botonNext = document.querySelector("#button-next")

botonNext.Onclick = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
 .then(response => response.json())
 .then(function(allpokemon){
 allpokemon.results.forEach(function(pokemon){
   fetchPokemonData(pokemon); 
 })
})
}

function verificarFetch () {
  return new Promise(function(resolve, reject){
    console.log("cargando...")
    if()
  })
}

 fetch('https://pokeapi.co/api/v2/pokemon')
 .then(response => response.json())
 .then(function(allpokemon){
 allpokemon.results.forEach(function(pokemon){
   fetchPokemonData(pokemon); 
 })
})
  function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
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

  console.log(pokeData.id)

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

