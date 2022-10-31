const cvcInput = document.getElementById("cvcInput")//---> input del codigo de seguridad tarjeta (formulario)
const cvcBack = document.getElementById("cvcBack") //---> span del codigo de seguridad tarjeta
const fecha = document.querySelector(".inputFront-vencimiento") //---> elige toda la linea
const mes = document.getElementById("mes")
const año = document.getElementById("año")
const nombreFront = document.getElementById("nombreFront")
const nombre = document.getElementById("nombre")
const numeroFront = document.getElementById("numeroFront")
const numero = document.getElementById("numero")
const img = document.querySelector(".imagenConfirmar")

const ladoDer = document.querySelector('.ladoDer');


nombre.addEventListener("input", (event) => {
    nombreFront.textContent = event.target.value
})


numero.addEventListener("input", (event) => {
    numeroFront.textContent = event.target.value
})


cvcInput.addEventListener("input", (event) => {
    cvcBack.textContent = event.target.value
})


mes.addEventListener("input", (event) => {
    fecha.children[0].textContent = event.target.value // al usar querry selector, se eligió toda la linea de span (padre) y se ubicó la posicion de cada span (hijo) dentro del padre 
})


año.addEventListener("input", (event) => {
    fecha.children[1].textContent = event.target.value //idem mes
})


ladoDer.addEventListener("submit", (e) => {

    e.preventDefault()

    if (!nombre.value || !numero.value || !cvcInput.value || !mes.value || !año.value) {
        alert('Faltan datos')
    } else {

        //OPCION 3
        
        const gracias = document.getElementById("gracias")
        const nene = document.getElementById("nene")

        nene.style = "display: none;"        
        gracias.style = "text-align: center;"






        //OPCION 2

        // const formulario = document.getElementById("ladoDer") // busca el div padre del formulario
        // const nene = document.getElementById("nene")
        // const div = document.createElement("div")
        // div.setAttribute("class", "formulario")
        // div.style = "text-align: center;"
        // // creamos etiqueta IMG
        // const img = document.createElement("img")
        // //seteamos atributos ALT y SRC
        // img.alt = "check"
        // img.src = "icon-complete.svg"
        // //agregamos al div padre
        // div.appendChild(img)
        // //creamos el H1
        // const titulo = document.createElement("h1")
        // titulo.textContent = "Gracias!"
        // div.appendChild(titulo)
        // //creamos el <p>
        // const mensaje = document.createElement("p")
        // mensaje.textContent = "Tenemos agregados los detalles de tu tarjeta"
        // div.appendChild(mensaje)
        // mensaje.style = "font-size: 15px;"
        // //creamos el botton
        // const button = document.createElement("button")
        // button.textContent = "Continuar"
        // button.setAttribute("class", "confirmar")
        // div.appendChild(button)
        // //remueve del div padre, el hijo (nene)
        // formulario.removeChild(nene)
        // //agregamos al div padre, el div creado
        // formulario.appendChild(div)

        //OPCION 1

        //     <div class="formulario" style="text-align: center;">
        //     <img src="icon-complete.svg" alt="check">      
        //     <h1>Gracias!</h1>
        //     <p>Pudimos agregar los detalles de tu tarjeta</p>
        //     <button class="confirmar">Continuar</button>
        // </div>` //crea otro boton post-submit con la misma clase que el primero, borrando el div formulario



    }

})

//console.log(ladoDer)