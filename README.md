# Desafio 2 - Funciones

 ## Link de la pagina web
 Enlace a la GitHub Page: [https://modulo3-desafio3.github.io/index.html](https://nicolas-tolosa.github.io/modulo3-desafio3.github.io/)

 ## Requisitos del desafio

1. Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado `1_funcion.js`

2. Transforma la siguiente función a una arrow function de una línea. Este ejercicio debe quedar en un archivo llamado `2_arrow.js`. Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de HTML al hacerle click.
   
    2.1  El código debe estar en 2 archivos: pintar.html y script.js. El script debe estar dentro de la carpeta assets/js.
   
    2.2  Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función.

    2.3  Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color.

```html
<div id="ele1"> hello </div>
<script>
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
</script>
```
3. Construye una página web "4_colores.html" con las siguientes características:
    3.1  Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener un identificador único.

    3.2  Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de color al color negro. Utiliza addEventListener para agregar el evento.

4.  Crea una página junto a un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada.

    4.1  La letra a guardará el color rosado.

    4.2  La letra s guardará el color naranjo.

    4.3  La letra d guardará el color celeste.

    4.4  Para guardar el color revisa el tip al final del enunciado.

    4.5  Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de color blanco y borde negro.

    4.6  Al presionar las teclas a, s o d, se deberá cambiar el color del div “key” a rosado, naranjo o celeste respectivamente.

5.  Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se deberá crear un div nuevo de las mismas dimensiones antes mencionadas con los colores morado, gris y café respectivamente. 

## Capturas
![Desafio cambiar colores y añadir elementos](https://github.com/Nicolas-Tolosa/modulo3-desafio3.github.io/blob/main/screenshot1.jpg)
![Desafio hello con fondo verde por defecto](https://github.com/Nicolas-Tolosa/modulo3-desafio3.github.io/blob/main/screenshot2.jpg)
![Desafio 4 colores](https://github.com/Nicolas-Tolosa/modulo3-desafio3.github.io/blob/main/screenshot3.jpg)
