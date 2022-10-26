const cvcInput = document.getElementById("cvcInput")//---> input del codigo de seguridad tarjeta (formulario)
const cvcBack = document.getElementById("cvcBack") //---> span del codigo de seguridad tarjeta
const fecha = document.querySelector(".inputFront-vencimiento")
const mes = document.getElementById("mes")
const año = document.getElementById("año")


const ladoDer = document.querySelector('.ladoDer');



cvcInput.addEventListener("input", (event) => {

    cvcBack.textContent = event.target.value

   // console.log(event.target.value)


})

mes.addEventListener("input", (event) => {


    fecha.children[0].textContent = event.target.value

    //console.log(fecha.children[0])


})



año.addEventListener("input", (event) => {

    fecha.children[1].textContent = event.target.value

   // console.log(event.target.value)


})


ladoDer.addEventListener("submit", (e) => {

    e.preventDefault()
    const formulario = document.querySelector(".formulario")
    formulario.innerHTML = '<button class="confirmar">Continuar</button>'


})

//console.log(ladoDer)