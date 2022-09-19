
let usuario
let nombre
let carrito = []

if (localStorage.getItem('usuario'))
{
    usuario = localStorage.getItem('usuario')
    nombre = localStorage.getItem('nombre')

    if (localStorage.getItem('carrito'))
{
    carrito = JSON.parse(localStorage.getItem('carrito'))
}
else {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

}
else {
    localStorage.setItem('usuario', "")
}


const divUsuario = document.getElementById("divUsuario")
 

if(usuario == undefined){

    divUsuario.innerHTML = `
    <div class="usuarioItem">
    <button class="btn btn-outline-secondary botonUsuario"><a href="./pages/inicio.html">Iniciar Sesion</a></button> 
</div>
<div class="usuarioItem">
    <button class="btn btn-outline-secondary botonRegistro"><a href="">Crear usuario</a></button> 
</div>
 
   `
}
else {

   let inicial = nombre.charAt(0).toUpperCase();
    

    divUsuario.innerHTML = `<div class="usuariologged id=usuarioLoggedId"> <h3>${inicial}</h3> 

      
    
    </div>
    
    <img class="carritoImg" src="./multimedia/carrito.png" alt="logo">`    
}







const carritoMenu = document.getElementById("carritoDeCompras")



