// Habilitación de tooltips de Bootstrap 5
//selecciona todos los elementos del documento que tienen "data-bs-toggle=tooltip" y los enlista
var tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
//cada elemento de la lista lo llaman "tooltipTriggerEl" y para cada uno está creando un "tooltip".
//forEach es una función que hace de bucle y asegura que esta acción se repita para todos los elmentos de la lista
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl);
});

// Cada vez que se desplace el navegador(se haga scroll en la ventana), se cambiará el fondo de la barra de navegación.
$(window).scroll(function () {
  //se selecciona el elemento con clase .navbar y se almacena en la variable "navegador"
  let navegador = $(".navbar");
  //si se desplaza más de 100 píxeles desde la parte superior
  if ($(this).scrollTop() > 100) {
    //cambia al color indicado
    navegador.css("background", "#0DCAF0");
    //sino (si el desplazamiento es menor a 100 píxeles), se elimina el fondo de la barra de navegación
  } else {
    navegador.css("background", "none");
  }
});

//  Ocultar y Mostrar el texto de las tarjetas al hacer click en el título de las mismas, todas por igual
$(".card-title").click(function () {
  $(".card-text").toggle("slow");
});

//Smooth Scrool: Al hacer click en elementos con etiqueta "a" se desplaza suavemente a la posición del ID especificado
$("a").click(function (event) {
  //verifica si el atributo href referido como this.hash no está vacío
  if (this.hash !== "") {
    //previene el comportamiento predeterminado del enlace, es decir, navegar de manera directa al enlace
    event.preventDefault();
    //almacena el atributo href (this.hash) en una variable llamada hash
    var hash = this.hash;
    //anima un desplazamiento vertical (scrolltop) de html y body
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      //este valor especifica la duración de la animación en milisegundos, en este caso 3 segundos.
      3000
    );
  }
});
