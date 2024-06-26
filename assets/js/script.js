
// Funcion 2.2 y 2.3 juntos
function pintar(elementId, color = "green"){
    let ele = document.querySelector("#" + elementId)
    ele.style.backgroundColor = color
    ele.addEventListener("click", function(){
        ele.style.backgroundColor = "yellow"
    })
}

pintar("ele1") // Añadiendo un color como 2do parametro cambia el color por defecto
    