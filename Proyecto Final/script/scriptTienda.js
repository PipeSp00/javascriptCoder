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


//En caso de que no este logeado el usuario se lo envia a la pagina de inicio de sesión
if (usuario == undefined) {
  divUsuario.innerHTML = `
    <div class="usuarioItem">
    <button class="btn btn-outline-secondary botonUsuario"><a href="../pages/inicio.html">Iniciar Sesion</a></button> 
</div>
<div class="usuarioItem">
    <button class="btn btn-outline-secondary botonRegistro"><a href="">Crear usuario</a></button> 
</div>`;

//Caso contrario se muestra el nombre y el carrito presente en el local storage, a futuro el carrito se debe acomodar a los distintos usuarios
} else {
  let inicial = nombre.charAt(0).toUpperCase();

  divUsuario.innerHTML = `<div class="numberCircle id=usuarioLoggedId">${inicial}
    </div>
    <div id ="contador"></div>
    <img class="carritoImg" src="../multimedia/carrito.png" alt="logo">`;
}



// Desplegado del carrito de compras
function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

const divTienda = document.getElementById("divTienda");


//Carga asincrona de productos 
const loadproductos = async () => {
  const response = await fetch("../json/productos.json");
  const product = await response.json();
  return product;
};


//Mostrar todos los productos una vez que la carga de la ventana y de los mismos finalizo
window.addEventListener("load", (event) => {
  loadproductos().then((productos) => {
    productos.forEach((frutosArr) => {
      divTienda.innerHTML += `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
  });
  setTimeout(enlarger, 500);
  actualizarPrecio();
  updatecarrito();
});


//Declaracion de constantes para filtrado y busqueda
const filtroFrutos = document.getElementById("filtrarFrutos");
const filtroPasas = document.getElementById("filtrarPasas");
const filtroCereales = document.getElementById("filtrarCereales");
const filtroHarinas = document.getElementById("filtrarHarinas");
const busqueda = document.getElementById("searchbar");
const filtro = document.getElementById("filtroTexto");


//Busqueda por nombre 
busqueda.addEventListener("submit", (e) => {
  e.preventDefault(); 

  filtro.innerHTML = `Filtrar`;
  const searchInput = new FormData(e.target);
  const searchdata = searchInput.get("busqueda");
  loadproductos().then((productos) => {
    const tipoSelec = productos.filter((frutos) => frutos.nombre == searchdata);
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML = `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
    setTimeout(enlarger, 500);
  });
  busqueda.reset();
});


//Busqueda por filtrado 
filtroFrutos.addEventListener("click", (event) => {
  event.preventDefault();

  loadproductos().then((productos) => {
    filtro.innerHTML = `Frutos`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "frutos");

    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML += `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
    setTimeout(enlarger, 500);
  });
});

filtroHarinas.addEventListener("click", (event) => {
  event.preventDefault();

  loadproductos().then((productos) => {
    filtro.innerHTML = `Harinas`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "harinas");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML += `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
    setTimeout(enlarger, 500);
  });
});

filtroPasas.addEventListener("click", (event) => {
  event.preventDefault();

  let elementosEnCarrito = carrito.length;
  let contador = document.getElementById("contador");
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`;
  loadproductos().then((productos) => {
    filtro.innerHTML = `Pasas`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "pasas");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML += `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
    setTimeout(enlarger, 100);

    updatecarrito();
  });
});

filtroCereales.addEventListener("click", (event) => {
  event.preventDefault();

  loadproductos().then((productos) => {
    filtro.innerHTML = `Cereales`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "cereales");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML += `
       
      <div class="card">
      <img class='mx-auto img-thumbnail imagentienda'
          src="../multimedia/${frutosArr.img}"
          width="auto" height="auto"/>
          <h5  class="titulo font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });

    setTimeout(enlarger, 100);

    updatecarrito();
  });
});


//Funcion de agregado al carrito de compras
function enlarger() {
  const botonescompra = document.getElementsByClassName("cart");

  let contador = document.getElementById("contador");
  contador.innerHTML = `<h5>${carrito.length}</h5>`;

  //Tomo todos los botones de compra

  for (let i = 0; i < botonescompra.length; i++) {
    botonescompra[i].addEventListener("click", (event) => {
      event.preventDefault;

      //Si usuario esta logeado, procedo a agregar a carrito



      if (localStorage.getItem("usuario")) {

        class compra {
          constructor(nombre, valor, imagen) {
            this.nombre = nombre;
            this.valor = valor;
            this.imagen = imagen;
          }
        }

        let boton = event.target;
        let producto = boton.parentNode.parentNode.parentNode;

        //Obtengo imagen titulo y precio del elemento padre del boton seleccionado para poder mostrarlo en carrito



        let imagen = producto.getElementsByClassName("imagentienda")[0].src;
        let titulo = producto.getElementsByClassName("titulo")[0].innerText;
        let precio = producto.getElementsByClassName("precio")[0].innerText;

        mostrarencarrito(titulo, precio, imagen);


        //Enviar producto a local storage y a Array carrito



        carrito.push(new compra(titulo, precio, imagen));
        localStorage.setItem("carrito", JSON.stringify(carrito));

        Toastify({
          text: "Elemento agregado al carrito",
          duration: 2000,
          destination: "",
          newWindow: true,
          close: false,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();

        let valortotal = document.getElementById("valortotal");

        actualizarPrecio();



        //Si usuario no se logeo no permito agregar al carrito, debe iniciar sesión primero


      } else {
        function redirect() {
          window.location.href = "./inicio.html";
        }

        redirect();
      }
    });
  }
}

// Suma de los elementos.valor dentro de carrito de compras



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

botonFinalizar = document.getElementById("BotonFinalizarCompra");

botonFinalizar.addEventListener("click", (event) => {
  swal({
    icon: "success",
    text: "Muchas gracias por su compra, pronto sera redirigido a la Web de pago",
    timer: 4000,
  });
});

//Desplegado en div carrito 


function mostrarencarrito(titulo, precio, imagen) {
  let filaCarrito = document.createElement("div");

  filaCarrito.innerHTML = `<div class="rowCarrito">
  <img class="imagenCarrito" src="${imagen}" alt="">
  <h5>
    ${titulo}
  </h5>
  <h5>
  ${precio}
  </h5>
</div>`;
  let carritodiv = document.getElementById("contenidoCarrito");
  carritodiv.appendChild(filaCarrito);
}

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


//Borrado del ultimo elemento agregado


let botonborrar = document.getElementById("borrar");
botonborrar.addEventListener("click", function (event) {
  let carritodiv = document.getElementById("contenidoCarrito");
  carritodiv.innerHTML = ``;
  carrito.pop();
  localStorage.setItem("carrito", JSON.stringify(carrito));
  updatecarrito();
  actualizarPrecio();
});

//Contabilización de elementos en carrito para desplegar numero


function counter() {
  let elementosEnCarrito = carrito.length;
  let contador = document.getElementById("contador");
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`;
}

setInterval(counter, 1000);
