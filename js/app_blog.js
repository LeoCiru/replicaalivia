//VARIABLES Y CONSTANTES
const btnRegistro = document.getElementById("btnRegistro"),
      btnCerrarRegistro = document.getElementById("btnCerrarRegistro"),
      contenedorRegistro = document.querySelector(".contenedor-registro");

//EVENTOS
btnRegistro.addEventListener('click', () => contenedorRegistro.style.display = "block");
btnCerrarRegistro.addEventListener('click', () => contenedorRegistro.style.display = "none");

//JQUERY
//Función para que las demás funciones se ejecuten cuando carga el documento completamente
$(document).ready(function(){
    //Función para desplegar sidebar de carrito de compras
    $("#btn-cart").click(function(){
      $(".contenedor-cart").addClass("cart-activo");
      $(".contenedor-cart").removeClass("cart-oculto");
    });
    //Función para ocultar sidebar de carrito de compras
    $("#btn-cerrar").click(function(){
      $(".contenedor-cart").removeClass("cart-activo");
      $(".contenedor-cart").addClass("cart-oculto");
    });
  });