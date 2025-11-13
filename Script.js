let boton = document.getElementById("btn5")
let input = document.getElementById("pokeInput5")
let contenedor = document.getElementById("pokeData")

boton.addEventListener("click", ()=>{
    async function atraer() {
        let datos = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
        let respuesta = await datos.json()

        let buscador = input.value.toLowerCase();
        contenedor.textContent = ""

        for (let i = 0; i < respuesta.results.length; i++) {
            let item = await fetch(respuesta.results[i].url)
            let pokemon = await item.json()

        if (pokemon.name.toLowerCase().includes(buscador)) {
    
            let letra = document.createElement("li")

            let imagen = document.createElement("img")
            imagen.src = pokemon.sprites.front_default

            let span = document.createElement("span")
            span.textContent += pokemon.types.map(tipo => tipo.type.name)

            letra.textContent = pokemon.name + ""
            

            letra.appendChild(imagen)
            letra.appendChild(span)
            contenedor.appendChild(letra)
            
        }
    }
    }
    atraer()
})