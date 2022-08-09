

// Establecimiento de constantes para diferentes metodos de pago

const porcEfectivo = 0.85

const porcTarjeta = 1.10

const porcMercadoPago = 1.05

const interesCuotas = 0.03

// calculo con ingresos de usuario con constantes

const pagoEfectivo = (precio) => (precio * porcEfectivo).toFixed()

const pagoTarjeta = (precio, cuotas) => ((precio * porcTarjeta) * (1 + interesCuotas * cuotas)).toFixed()

const pagoMercadoPago = (precio) => (precio * porcMercadoPago).toFixed()


class producto {
     constructor(nombre, tipo, valor){
        this.nombre =  nombre
        this.tipo = tipo
        this.valor = valor }

     } //pendiente inclusion de imagen en objeto

const producto1 = new producto ("mani ", "fruto seco", 500)
const producto2 = new producto ("nuez ", "fruto seco", 400)
const producto3 = new producto ("avellanas", "fruto seco", 250)
const producto4 = new producto ("pistacho", "fruto seco", 100)
const producto5 = new producto ("pasas de uva", "pasas", 200)
const producto6 = new producto ("harina de coco", "harinas", 220)
const producto7 = new producto ("pasas de ciruela", "pasas", 120)
const producto8 = new producto ("aritos de miel ", "cereales", 190)
const producto9 = new producto ("bolitas de chocolate ", "cereales", 230)
const producto10 = new producto ("harina de almendra", "harinas", 420)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

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
       
    var invalido = false
    let tipoProducto = prompt("Ingrese que tipo de producto le interesa").toLowerCase()

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

    else {
        console.log ("tipo de producto seleccionado no disponible o invalido")
        invalido = true
    } 
}while (invalido == true)
    
do {
    let precio, formaDePago, cuotas // variables creadas para inputs funcion
    


    let cantidad = parseInt(prompt("ingrese cantidad de productos"))
    const compras = []

    for(let i = 0 ; i < cantidad ; i++){
    
    compras[i] = prompt("Ingrese el nombre de su producto").toLowerCase()
    
      
    
    }
 console.log (`Usted ha ingresado los siguientes productos ${compras}`)
/*
 for(let i = 0 ; i < cantidad ; i++){
 resultado [i] = productos.find((el) => el.nombre == compras[i])
 }
    console.log (resultado.reduce ((prev,act) => prev + act, 0)) */
    productos.forEach((item) => { resultado[i] = item.nombre})
    
    do {

        precio = parseFloat(prompt("ingrese el precio de su orden")) 
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







