/*Document ready para que cargue el DOM antes que los scripts*/
$(document).ready(function () {
  /*Habilitacion de tooltips de Bootstrap 5*/
  let tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /*Animación de smooth scroll para los <a> del navbar*/
  // $("a").click(function () {
  //   let redirect = this.hash;
  //   $("html,body").animate(
  //     {
  //       scrollTop: $(redirect).offset().top - 60,
  //     },
  //     1200
  //   );
  // });

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
});

/* Ocultar y Mostrar el texto de las tarjetas al hacer click en el título de las mismas, todas por igual*/

$(".card-title").click(function () {
  $(".card-text").toggle("slow");
});
