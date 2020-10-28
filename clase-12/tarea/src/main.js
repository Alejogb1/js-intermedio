

const $botonEnviar = document.querySelector("#boton-enviar")
const $textoResultado = document.querySelector("#resultado").textContent
$botonEnviar.onclick = function pedirInformacionApi (e) {
    e.preventDefault()
    let valorBase = document.querySelector("#base").value;
    let valorFecha = document.querySelector("#fecha").value;
    fetch( `https://api.exchangeratesapi.io/${valorFecha}?base=${valorBase}`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        $("#resultado").text(`Base: ${respuestaJSON.base} Fecha: ${respuestaJSON.date}`)
        Object.keys(respuestaJSON.rates).forEach( moneda => {
            $("ul").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}<li>`))
        })
    })
    .catch(error => console.error("ERROR", error));

}




console.log("Esto pasa antes de que tenga la info")