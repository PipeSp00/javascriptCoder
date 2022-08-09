

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
     constructor(nombre, tipo, valor){
        this.nombre =  nombre
        this.tipo = tipo
        this.valor = valor }

     } //pendiente inclusion de imagen en objeto
// Creacion de objetos productos 
const producto1 = new producto ("mani", "fruto seco", 500)
const producto2 = new producto ("nuez", "fruto seco", 400)
const producto3 = new producto ("avellanas", "fruto seco", 250)
const producto4 = new producto ("pistacho", "fruto seco", 100)
const producto5 = new producto ("pasas de uva", "pasas", 200)
const producto6 = new producto ("harina de coco", "harinas", 220)
const producto7 = new producto ("pasas de ciruela", "pasas", 120)
const producto8 = new producto ("aritos de miel", "cereales", 190)
const producto9 = new producto ("bolitas de chocolate", "cereales", 230)
const producto10 = new producto ("harina de almendra", "harinas", 420)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10] // Array de productos
  
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

// variable para volver a hacer cuenta
let repetir 
    
do {
    console.log("Los productos con los que tenemos son cereales, pasas, harinas y frutos secos") //Mostrar categorias disponibles

do {
    
    var invalido = false // Variable para error de seleccion de categoria 
    let tipoProducto = prompt("Ingrese que tipo de producto le interesa").toLowerCase()

    // Muestro los productos cuya categoria coinicide con la solicitada por el usuarui
    if (tipoProducto == "frutos secos") {
        const tipoSelec = productos.filter(frutos => frutos.tipo == "fruto seco")
        console.log("contamos con los siguientes productos de la categoria seleccionada")
        tipoSelec.forEach ( (frutosArr) =>  console.log (frutosArr.nombre))
        break
    }

    if (tipoProducto == "pasas") {
        const tipoSelec = productos.filter(frutos => frutos.tipo == "pasas")
        console.log("contamos con los siguientes productos de la categoria seleccionada")
        tipoSelec.forEach ( (frutosArr) =>  console.log (frutosArr.nombre))
        break
    }
    if (tipoProducto == "cereales") {
        const tipoSelec = productos.filter(frutos => frutos.tipo == "cereales")
        console.log("contamos con los siguientes productos de la categoria seleccionada")
        tipoSelec.forEach ( (frutosArr) =>  console.log (frutosArr.nombre))
        break
    }
    if (tipoProducto == "harinas") {
        const tipoSelec = productos.filter(frutos => frutos.tipo == "harinas")
        console.log("contamos con los siguientes productos de la categoria seleccionada")
        tipoSelec.forEach ( (frutosArr) =>  console.log (frutosArr.nombre))
        break
    }
    // Si no es ninguna publico el error 
    else {
        console.log ("tipo de producto seleccionado no disponible o invalido")
        invalido = true
    } 
}while (invalido == true) //Lo hago en loop hasta que el usuario ingrese una categoria correcta
    

    let precio, formaDePago, cuotas // variables creadas para inputs funcion
    


    let cantidad = parseInt(prompt("ingrese cantidad de productos")) //Consulta de cantidad de productos

    if (isNaN(cantidad)) {
        console.log("la cantidad ingresada no es valida") //Si la cantidad ingresada no es un numero termino la operacion
        break
    }
    const compras = []
    const resultado = []
    const preciosSeleccion =  []
    let sum = 0
    let total = 0

    //Itero por todos los productos tantas veces como cantidad de productos el usuario eligio y guardo aquellos resultados coincidentes en una nueva array
    for(let i = 0 ; i < cantidad ; i++){   

    compras[i] = prompt("Ingrese el nombre de su producto").toLowerCase()
    resultado[i] = productos.find((match) => match.nombre == compras[i])
    
      if (resultado[i] == undefined) {
        console.log("el producto ingresado no es valido o no se encuentra disponible") 
        break   // Si el usuario ingresa productos no disponibles muestro el error y finalizo operacion
      }
        resultado [i] = preciosSeleccion[i] = resultado[i].valor
        total = sum += preciosSeleccion[i]; // Tomo los valores de los productos coincidentes y los sumo
      }
      
      
 console.log (`Usted ha ingresado los siguientes productos ${compras}`) //Expongo los productos seleccionados 


    
    
    //Proceso de seleccion de pago
    do {

        precio = total
        console.log (`el monto total de su seleccion es de ${precio}`)
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




