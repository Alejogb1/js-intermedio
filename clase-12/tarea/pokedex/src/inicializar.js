

function inicializar () {
    function cambiarPaginas () {
        const limit = 1;
        const offset = 1;

        const PaginaActual = document.querySelector(".page-item active")

        const NumeroPagina = PaginaActual.value
        
    }

    const listadoPokemones = cargarPokemones()


    function cargarPokemones() {
        return (fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20").json())
    }  

    console.log(listadoPokemones)
    /*
    mostrarlistadoPokemones(listadoPokemones.name)

    function mostrarlistadoPokemones (listadoPokemones) {
        listadoPokemones.forEach(() => {
            const $link = document.createElement("a") 
            $link.
        })
    }*/
}

inicializar()