//INICIALIZANDO LIBRERÍAS
//Llamando librería Wow.js
document.write('<script src="./js/wow.min.js"></script>');
document.write('<script>new WOW().init();</script>');

//Inicializando librería Swiper.js y sus parámetros para sección de testimonios
const testimonios = new Swiper('.swiper.contenedor-testimonios', {
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
 });

//Inicializando librería Swiper.js y sus parámetros para sección de doctores
const doctores = new Swiper('.card-dr-certificado', {
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
 });


//VARIABLES Y CONSTANTES
const /* btnCalcularImc = document.getElementById("btn-calcular-imc"), */
      btnResetearFormulario = document.getElementById("resetear-formulario"),
      formularioImc = document.getElementById("formulario-imc"),
      resultado = document.getElementById("resultado");

//FUNCIONES
function calculadorIMC()
{
  let pies = document.getElementById("pies").value,
    pulgadas = document.getElementById("pulgadas").value,
    peso = document.getElementById("peso").value,
    piesAMetros = pies / 3.281,
    pulgadasAMetros = pulgadas / 39.37,
    estatura = piesAMetros + pulgadasAMetros,
    librasAKilos = peso / 2.205;

    //Llamando las funciones para ejecutarlas
    crearCuadroResultado();
    insertarTextoResultado();

  //Crear resultado
  function crearCuadroResultado()
  {
    resultado.style.opacity = "1";
    resultado.style.position = "static";
    resultado.style.transition = "all .3s linear";
  }

  function insertarTextoResultado()
  {
    if (isNaN(pies) && isNaN(pulgadas) && isNaN(peso))
    {
      resultado.innerHTML = "<p>Completa el formulario</p>";
      console.log(pies, pulgadas, peso);
    }
    else if(pies != '' && pulgadas != '' && peso != '')
    {
      let imc = (librasAKilos / estatura ** 2).toFixed(2);
      console.log(resultado);

      if(pies < 0 && pulgadas < 0 && peso < 0)
      {
        resultado.style.backgroundColor = "red";
        resultado.style.color = "white";
        resultado.innerHTML = "<p>Introduzca valores reales</p>";
        console.log(pies, pulgadas, peso);
      }
      else if(imc == 0)
      {
        resultado.style.backgroundColor = "red";
        resultado.style.color = "white";
        resultado.innerHTML = "<p>Introduzca un peso real</p>";
      }
      else if(imc == Infinity)
      {
        resultado.style.backgroundColor = "red";
        resultado.style.color = "white";
        resultado.innerHTML = "<p>Introduzca una altura real</p>";
      }
      else if(imc >= 0 && imc < 15.99)
      {
        resultado.style.backgroundColor = "#F2DEDE";
        resultado.style.color = "#A94442";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Delgadez Severa)</span>
        `;
      }
      else if(imc >= 16 && imc < 18.5)
      {
        resultado.style.backgroundColor = "#FCF8E3";
        resultado.style.color = "#8A6D3B";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Delgadez Moderada)</span>
        `;
      }
      else if(imc == 18.5 || imc <= 24.99)
      {
        console.log(imc);
        resultado.style.backgroundColor = "#DFF0D8";
        resultado.style.color = "#3c763d";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Peso Normal)</span>
        `;
      }
      else if(imc == 25 || imc <= 29.99)
      {
        console.log(imc);
        resultado.style.backgroundColor = "#D9EDF7";
        resultado.style.color = "#055160";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Pre Obeso)</span>
        `;
      }
      else if(imc == 30 || imc <= 35)
      {
        console.log(imc);
        resultado.style.backgroundColor = "#FCF8E3";
        resultado.style.color = "#8A6D3B";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Obeso Tipo 1)</span>
        `;
      }
      else if(imc == 35 || imc <= 40)
      {
        console.log(imc);
        resultado.style.backgroundColor = "#FCF8E3";
        resultado.style.color = "#8A6D3B";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Obeso Tipo 2)</span>
        `;
      }
      else if(imc >= 40)
      {
        console.log(imc);
        resultado.style.backgroundColor = "#F2DEDE";
        resultado.style.color = "#A94442";
        resultado.innerHTML = 
        `
        <span>Su IMC es de: ${imc}</span>
        <span>(Obeso Tipo 3)</span>
        `;
      }
    }
    else if(pies == '' || pulgadas == '' || peso == '')
    {
      resultado.style.backgroundColor = "red";
      resultado.style.color = "white";
      resultado.innerHTML = "<p>Completa el formulario</p>";
      console.log(pies, pulgadas, peso);
    }
  }
}

//Para limpiar formulario al resetear
function limpiarFormulario()
{
  resultado.style.opacity = "0";
  resultado.style.position = "absolute";
  resultado.style.transition = "none";
}


//EVENTOS
formularioImc.addEventListener('keyup', calculadorIMC);
/* btnCalcularImc.addEventListener('click', calculadorIMC); */
btnResetearFormulario.addEventListener('click', limpiarFormulario);


//JQUERY
//Función para que las demás funciones se ejecuten cuando carga el documento completamente
$(document).ready(function(){
  //Función para desplegar tabla de IMC debajo de la calculadora de IMC
  $(".titulo-tabla-imc").click(function(){
    $("table").slideToggle();
  });

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