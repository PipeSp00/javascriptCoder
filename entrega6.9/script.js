// Establecimiento de constantes para diferentes metodos de pago

const porcEfectivo = 0.85

const porcTarjeta = 1.10

const porcMercadoPago = 1.05

const interesCuotas = 0.03

// calculo con ingresos de usuario con constantes

const pagoEfectivo = (precio) => (precio * porcEfectivo).toFixed()

const pagoTarjeta = (precio, cuotas) => ((precio * porcTarjeta) * (1 + interesCuotas * cuotas)).toFixed()

const pagoMercadoPago = (precio) => (precio * porcMercadoPago).toFixed()

//Funcion constructora
class producto {
    constructor(nombre, tipo, valor) {
        this.nombre = nombre
        this.tipo = tipo
        this.valor = valor
    }

} //pendiente inclusion de imagen en objeto
// Creacion de objetos productos 

/*
const producto1 = new producto("mani", "frutos", 500)
const producto2 = new producto("nuez", "frutos", 400)
const producto3 = new producto("avellanas", "frutos", 250)
const producto4 = new producto("pistacho", "frutos", 100)
const producto5 = new producto("pasas de uva", "pasas", 200)
const producto6 = new producto("harina de coco", "harinas", 220)
const producto7 = new producto("pasas de ciruela", "pasas", 120)
const producto8 = new producto("aritos de miel", "cereales", 190)
const producto9 = new producto("bolitas de chocolate", "cereales", 230)
const producto10 = new producto("harina de almendra", "harinas", 420)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10] // Array de productos
*/
//funcion con prints de valores finales con console.log concatenado con constantes anteriores

function calculoInteres(formaDePago, precio, cuotas) {

    switch (formaDePago) {

        case "efectivo":
            console.log(`pagando con efectivo el precio final es de ${pagoEfectivo(precio)} `)

            break

        case "mercadopago":
            console.log(`pagando con mercadopago, el precio final es de ${pagoMercadoPago(precio)} `)

            break

        case "tarjeta":
            console.log(`pagando con tarjeta en ${cuotas} cuotas, el precio final es de ${pagoTarjeta(precio, cuotas)} `)

            break

        default:
            console.log("metodo de pago no valido")

            break
    }

}


fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
// variable para volver a hacer cuenta



const tipoProducto = document.getElementById("tipoProducto")


    
tipoProducto.addEventListener('submit', (event) => {
    event.preventDefault()
    const entrada = document.getElementById("idBusqueda").value
    

    

    if (entrada == "frutos") {

        const tipoSelec = productos.filter(frutos => frutos.clase == "frutos")
        divProductos.innerHTML = ``
        tipoSelec.forEach((frutosArr) => {

            divProductos.innerHTML += `
            
            <div class="item">
            <div class="card-body card-contenido" id="${frutosArr.tipo}">
              <h5 class="card-title card-contenido ">${frutosArr.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted card-contenido">${frutosArr.tipo}</h6>
              <p class="card-text card-contenido">${frutosArr.valor}</p>
            </div>
            <button type="button" class="btn btn-dark botondecompra">Comprar</button>

         
           `
        })

    }
    if (entrada == "pasas") {

        const tipoSelec = productos.filter(frutos => frutos.clase == "pasas")
        divProductos.innerHTML = ``
        tipoSelec.forEach((frutosArr) => {

            divProductos.innerHTML += `<div class="item">
            <div class="card-body card-contenido" id="${frutosArr.tipo}">
              <h5 class="card-title card-contenido ">${frutosArr.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted card-contenido">${frutosArr.tipo}</h6>
              <p class="card-text card-contenido">${frutosArr.valor}</p>
            </div>
            <button type="button" class="btn btn-dark botondecompra">Comprar</button>
           `
        })

    }
    if (entrada == "cereales" ) {

        const tipoSelec = productos.filter(frutos => frutos.clase == "cereales")
        divProductos.innerHTML = ``
        tipoSelec.forEach((frutosArr) => {

            divProductos.innerHTML += `<div class="item">
            <div class="card-body card-contenido" id="${frutosArr.tipo}">
              <h5 class="card-title card-contenido ">${frutosArr.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted card-contenido">${frutosArr.tipo}</h6>
              <p class="card-text card-contenido">${frutosArr.valor}</p>
            </div>
            <button type="button" class="btn btn-dark botondecompra">Comprar</button>
           `
        })

    }

    if (entrada == "harinas") {

        const tipoSelec = productos.filter(frutos => frutos.clase == "harinas")
        divProductos.innerHTML = ``
        tipoSelec.forEach((frutosArr) => {

            divProductos.innerHTML += `<div class="item">
            <div class="card-body card-contenido" id="${frutosArr.tipo}">
              <h5 class="card-title card-contenido ">${frutosArr.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted card-contenido">${frutosArr.tipo}</h6>
              <p class="card-text card-contenido">${frutosArr.valor}</p>
            </div>
            <button type="button" class="btn btn-dark botondecompra">Comprar</button>
           `
        })

    }
    
})
    
    const botonescomprar = document.getElementsByClassName("botondecompra")  
    
    for (let i = 0; i < botonescomprar.length; i++) {
        botonescomprar[i].addEventListener('click', () => {
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                //destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }) 
        
    }
    
    
} )


const formularioSeleccion = document.getElementById("eleccionProducto")

var productoSeleccion =  []





formularioSeleccion.addEventListener('submit', (e) => {

    
    e.preventDefault()
    const selecData = document.getElementById("idseleccion").value

    const compra = productos.filter(compra => compra.nombre == selecData)

        productoSeleccion.push(compra)
    

            localStorage.setItem('productoSeleccion', JSON.stringify(productoSeleccion))
})





do {

    console.log("Los productos con los que tenemos son cereales, pasas, harinas y frutos secos") //Mostrar categorias disponibles








    let precio, formaDePago, cuotas // variables creadas para inputs funcion



    let cantidad = parseInt(document.getElementById) //Consulta de cantidad de productos

    if (isNaN(cantidad)) {
        console.log("la cantidad ingresada no es valida") //Si la cantidad ingresada no es un numero termino la operacion
        break
    }
    const compras = []
    const resultado = []
    const preciosSeleccion = []
    let sum = 0
    let total = 0

    //Itero por todos los productos tantas veces como cantidad de productos el usuario eligio y guardo aquellos resultados coincidentes en una nueva array
    for (let i = 0; i < cantidad; i++) {

        compras[i] = prompt("Ingrese el nombre de su producto").toLowerCase()
        resultado[i] = productos.find((match) => match.nombre == compras[i])

        if (resultado[i] == undefined) {
            console.log("el producto ingresado no es valido o no se encuentra disponible")
            break   // Si el usuario ingresa productos no disponibles muestro el error y finalizo operacion
        }
        resultado[i] = preciosSeleccion[i] = resultado[i].valor
        total = sum += preciosSeleccion[i]; // Tomo los valores de los productos coincidentes y los sumo
    }


    console.log(`Usted ha ingresado los siguientes productos ${compras}`) //Expongo los productos seleccionados 




    //Proceso de seleccion de pago
    do {

        precio = total
        console.log(`el monto total de su seleccion es de ${precio}`)
        formaDePago = prompt("ingrese la forma de pago (efectivo, tarjeta o MercadoPago)").toLowerCase()


        if (formaDePago == "tarjeta") {
            do {
                cuotas = parseInt(prompt("ingrese cantidad de cuotas"))

                if (isNaN(cuotas)) {
                    console.log("El numero de cuotas ingresado no es valido")
                }

            } while (isNaN(cuotas))
        }
        if (isNaN(precio)) {
            console.log("El precio ingresado no es valido")
        }

    } while (isNaN(precio))


    calculoInteres(formaDePago, precio, cuotas)


    do {
        repetir = prompt("¿Desea ingresar otra operacion?").toLowerCase()
    } while (repetir != "si" && repetir != "no")

} while (repetir != "no")










/*
formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault () // Agregar que te lleve al inicio
    
    const infoUsuario = new FormData(e.target)

    const usuarioDataInput = new Usuario (infoUsuario.get("usuario"), infoUsuario.get("contrasena"), infoUsuario.get("nombre"), infoUsuario.get("apellido"), infoUsuario.get("email"), infoUsuario.get("telefono"))
    
    const usuarioUser = (usuarioDataInput.usuario)
    const usuarioContrasena = (usuarioDataInput.contrasena)

    usuariosDataInput.push(usuariosData)


    localStorage.setItem('usuario', usuarioUser)
    localStorage.setItem('contrasena', usuarioContrasena)
})
*