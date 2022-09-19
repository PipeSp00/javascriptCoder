let usuario;
let nombre;
let carrito = [];

if (localStorage.getItem("usuario")) {
  usuario = localStorage.getItem("usuario");
  nombre = localStorage.getItem("nombre");

  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  } else {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
} else {
  localStorage.setItem("usuario", "");
}

const divUsuario = document.getElementById("divUsuario");

if (usuario == undefined) {
  divUsuario.innerHTML = `
    <div class="usuarioItem">
    <button class="btn btn-outline-secondary botonUsuario"><a href="../pages/inicio.html">Iniciar Sesion</a></button> 
</div>
<div class="usuarioItem">
    <button class="btn btn-outline-secondary botonRegistro"><a href="">Crear usuario</a></button> 
</div>
 
   `;
} else {
  let inicial = nombre.charAt(0).toUpperCase();

  divUsuario.innerHTML = `<div class="usuariologged id=usuarioLoggedId"> <h3>${inicial}</h3> 

      
    
    </div>
    
    <img class="carritoImg" src="../multimedia/carrito.png" alt="logo">`;
}

const divTienda = document.getElementById("divTienda");


const loadproductos = async () => {
  const response = await fetch("../json/productos.json");
  const product = await response.json();
  return product;
};

window.addEventListener("load", (event) => {
  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;
  loadproductos().then((productos) => {
    productos.forEach((frutosArr) => {
    
      divTienda.innerHTML += `
       
      <div class="card mx-auto col-md-3 col-10 mt-5">
      <img class='mx-auto img-thumbnail'
          src=""
          width="auto" height="auto"/>
          <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
    });
  })
  setTimeout (enlarger, 2000);;
});

const filtroFrutos = document.getElementById("filtrarFrutos");
const filtroPasas = document.getElementById("filtrarPasas");
const filtroCereales = document.getElementById("filtrarCereales");
const filtroHarinas = document.getElementById("filtrarHarinas");
const busqueda = document.getElementById("searchbar");
const filtro = document.getElementById("filtroTexto");

busqueda.addEventListener("submit", (e) => {
  e.preventDefault(); // agregar que te lleve al inicio SI! se da la condicion

  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;

  const searchInput = new FormData(e.target);
  const searchdata = searchInput.get("busqueda");
  loadproductos().then((productos) => {
    const tipoSelec = productos.filter((frutos) => frutos.nombre == searchdata);
    divTienda.innerHTML = ``
    tipoSelec.forEach((frutosArr) => {
      divTienda.innerHTML = `
       
    <div class="card mx-auto col-md-3 col-10 mt-5">
    <img class='mx-auto img-thumbnail'
        src=""
        width="auto" height="auto"/>
        <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
    <div class="card-body text-center mx-auto">
        
            
            <p class="card-text precio">${frutosArr.precio}</p>
            <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
            
            <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
    </div>
</div> `;
})
setTimeout (enlarger, 2000);;
});

})



filtroFrutos.addEventListener("click", (event) => {
  event.preventDefault();

  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;
  loadproductos().then((productos) => {
    filtro.innerHTML = `Frutos`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "frutos");

    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => { 
     
      divTienda.innerHTML +=  `
       
      <div class="card mx-auto col-md-3 col-10 mt-5">
      <img class='mx-auto img-thumbnail'
          src=""
          width="auto" height="auto"/>
          <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
  })
  setTimeout (enlarger, 2000);;
});

})

filtroHarinas.addEventListener("click", (event) => {
  event.preventDefault();

  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;

  loadproductos().then((productos) => {
    filtro.innerHTML = `Harinas`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "harinas");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => { 
     
      divTienda.innerHTML +=  `
       
      <div class="card mx-auto col-md-3 col-10 mt-5">
      <img class='mx-auto img-thumbnail'
          src=""
          width="auto" height="auto"/>
          <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
  })
  setTimeout (enlarger, 2000);;
});

})

filtroPasas.addEventListener("click", (event) => {
  event.preventDefault();

  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;
  loadproductos().then((productos) => {
    filtro.innerHTML = `Pasas`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "pasas");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => { 
     
      divTienda.innerHTML +=  `
       
      <div class="card mx-auto col-md-3 col-10 mt-5">
      <img class='mx-auto img-thumbnail'
          src=""
          width="auto" height="auto"/>
          <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
  })
  setTimeout (enlarger, 2000);;
});

})

filtroCereales.addEventListener("click", (event) => {
  event.preventDefault();

  let carrito =[]
  let elementosEnCarrito = carrito.length
  let contador = document.getElementById("contador")
  contador.innerHTML = `<h5>${elementosEnCarrito}</h5>`
  ;
  loadproductos().then((productos) => {
    filtro.innerHTML = `Cereales`;
    const tipoSelec = productos.filter((frutos) => frutos.clase == "cereales");
    divTienda.innerHTML = ``;
    tipoSelec.forEach((frutosArr) => { 
     
      divTienda.innerHTML +=  `
       
      <div class="card mx-auto col-md-3 col-10 mt-5">
      <img class='mx-auto img-thumbnail'
          src=""
          width="auto" height="auto"/>
          <h5 id="aa" class="card-title font-weight-bold">${frutosArr.nombre}</h5>
      <div class="card-body text-center mx-auto">
          
              
              <p class="card-text precio">${frutosArr.precio}</p>
              <button class="btn details px-auto"> <a href="#" >view details</a><br /> </button>
              
              <button id= "${frutosArr.index}" class="btn cart px-auto"> <a href="#">ADD TO CART</a> </button>
      </div>
  </div> `;
  })
  
  setTimeout (enlarger, 2000);
});

})











  function enlarger () 
  {
    const botonescompra = document.getElementsByClassName('cart');
    

      for (let i = 0; i < botonescompra.length; i++) 
        {
          let boton = botonescompra[i];

          
          boton.addEventListener('click', event =>
            {

              class compra {
                constructor(nombre, valor) {
                    this.nombre = nombre
                    this.valor = valor
                }
              }

              let boton = event.target
              let producto = boton.parentNode.parentNode.parentNode
            

              let titulo = producto.getElementsByClassName("card-title")[i].innerText
              let precio = producto.getElementsByClassName("precio")[i].innerText
              

              carrito.push ( new compra (titulo, precio))

              console.log(carrito)
              
              
              
            })

    }
  }




































