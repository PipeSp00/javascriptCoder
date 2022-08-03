

// Establecimiento de constantes para diferentes metodos de pago

const porcEfectivo = 0.85

const porcTarjeta = 1.10

const porcMercadoPago = 1.05

const interesCuotas = 0.03

// calculo con ingresos de usuario con constantes

const pagoEfectivo = (precio) => (precio * porcEfectivo).toFixed()

const pagoTarjeta = (precio, cuotas) => ((precio * porcTarjeta) * (1 + interesCuotas * cuotas)).toFixed()

const pagoMercadoPago = (precio) => (precio * porcMercadoPago).toFixed()


//Calculo total de interes con tarjeta para console.log





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
    let precio, formaDePago, cuotas // variables creadas para inputs funcion
    

    let cantidad = parseInt(prompt("ingrese cantidad de productos"))
    const productos = []
    for(let i = 0 ; i < cantidad ; i++){
    
    productos [i] = prompt("Ingrese el nombre de su producto").toLowerCase()
        
    
    }
    console.log (`Usted ha ingresado los siguientes productos ${productos}`)
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







