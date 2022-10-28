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
        const formulario = document.querySelector(".formulario") // busca el div del formulario
        formulario.innerHTML = '<button class="confirmar">Continuar</button>' //crea otro boton post-submit con la misma clase que el primero, borrando el div formulario
        
        
       
    }

})

//console.log(ladoDer)