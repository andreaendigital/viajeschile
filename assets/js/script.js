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
  $("a").click(function () {
    let redirect = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(redirect).offset().top - 60,
      },
      1200
    );
  });

  $(window).scroll(function () {
    let navegador = $(".navbar");
    if ($(this).scrollTop() > 100) {
      navegador.css("background", "#0DCAF0");
    } else {
      navegador.css("background", "none");
    }
  });
});
/* Ocultar y Mostrar el texto de las tarjetas al hacer click en el título de las mismas, todas por igual*/

$(".card-title").click(function () {
  $(".card-text").toggle("slow");
});
