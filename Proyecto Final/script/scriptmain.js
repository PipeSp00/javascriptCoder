let usuario;
let nombre;
let carrito = [];

//Definicion de variables de usuario

if (localStorage.getItem("usuario")) {
  usuario = localStorage.getItem("usuario");
  nombre = localStorage.getItem("nombre");
} else {
  localStorage.setItem("usuario", "");
}

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Condicional para creacion de local storage 

const divUsuario = document.getElementById("divUsuario");

if (usuario == undefined) {
  divUsuario.innerHTML = `
    <div class="usuarioItem">
    <button class="btn btn-outline-secondary botonUsuario"><a href="../pages/inicio.html">Iniciar Sesion</a></button> 
</div>
<div class="usuarioItem">
    <button class="btn btn-outline-secondary botonRegistro"><a href="../pages/inicio.html">Crear usuario</a></button> 
</div>
 
   `;
} else {
  let inicial = nombre.charAt(0).toUpperCase();

  divUsuario.innerHTML = `<div class="numberCircle id=usuarioLoggedId">${inicial}
    </div>
    <div id ="contador"></div>
    <img class="carritoImg" src="../multimedia/carrito.png" alt="logo">`;
}

divUsuario.addEventListener("click", (e) => {
  console.log("aa");
});

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

if (usuario == undefined) {
  divUsuario.innerHTML = `
    <div class="usuarioItem">
    <button class="btn btn-outline-secondary botonUsuario"><a href="./pages/inicio.html">Iniciar Sesion</a></button> 
</div>
<div class="usuarioItem">
    <button class="btn btn-outline-secondary botonRegistro"><a href="">Crear usuario</a></button> 
</div>
 
   `;
} else {
  let inicial = nombre.charAt(0).toUpperCase();

  divUsuario.innerHTML = `<div class="usuariologged numberCircle id=usuarioLoggedId">${inicial}

      
    
    </div>
    
    <img class="carritoImg" src="./multimedia/carrito.png" alt="logo">`;
}

const carritoMenu = document.getElementById("carritoDeCompras");


window.addEventListener("load", (event) => {updatecarrito(), actualizarPrecio()})


botonFinalizar = document.getElementById("BotonFinalizarCompra");

botonFinalizar.addEventListener("click", (event) => {
  swal({
    icon: "success",
    text: "Muchas gracias por su compra, pronto sera redirigido a la Web de pago",
    timer: 4000,
  });
});

  
  function updatecarrito() {
    carrito.forEach((carrito) => {
      let filaCarrito = document.createElement("div");
      filaCarrito.innerHTML = `<div class="rowCarrito">
    <img class="imagenCarrito" src="${carrito.imagen}" alt="">
    <h5>
      ${carrito.nombre}
    </h5>
    <h5>
    ${carrito.valor}
    </h5>
  </div>`;
      let carritodiv = document.getElementById("contenidoCarrito");
      carritodiv.appendChild(filaCarrito);
    });
  }
  

  let botonborrar = document.getElementById("borrar");
botonborrar.addEventListener("click", function (event) {
  let carritodiv = document.getElementById("contenidoCarrito");
  carritodiv.innerHTML = ``;
  carrito.pop();
  localStorage.setItem("carrito", JSON.stringify(carrito));
  updatecarrito();
  actualizarPrecio();
});



function actualizarPrecio() {
    let valorinicial = parseInt(0);
    for (let i = 0; i < carrito.length; i++) {
      valorinicial += parseInt(carrito[i].valor);
    }
    divPrecio = document.getElementById("divPrecio");
    {
      divPrecio.innerHTML = `<div class="DivTotal"> <p>Valor total ${valorinicial}<p></div>`;
    }
  }


function counter() {
  let elementosEnCarrito = carrito.length;
  let contador = document.getElementById("contador");
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`;
}

setInterval(counter, 1000);
