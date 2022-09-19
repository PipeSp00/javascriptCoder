

const formularioInicio = document.getElementById("formularioInicio")



formularioInicio.addEventListener('submit', (e) =>{
    e.preventDefault ()// agregar que te lleve al inicio SI! se da la condicion

    const loginInput =  new FormData(e.target)



    const infoUsuarioLogin = (loginInput.get("usuario"))
    

    const infoContrasenaLogin = (loginInput.get("contrasena"))
    


    if (infoUsuarioLogin === "" || infoContrasenaLogin === "") {
        swal({
            icon: "warning",
            text: "Es necesario completar ambos campos para inciar sesión"
          });
    }

else {
   

fetch('../json/usuarios.json')
.then(response => response.json())
.then(usuarios => {

        

    

        
        for (let i = 0; i < usuarios.length; i++) {
            

            
            if (usuarios[i].usuario === infoUsuarioLogin && usuarios[i].contrasena === infoContrasenaLogin)
            {
                
                swal({
                    icon: "success",
                    text: "Pronto seras redirigdo a nuestra web",
                    timer: 2000,
                    
                  });

                localStorage.setItem('usuario', usuarios[i].usuario)  
                localStorage.setItem('nombre', usuarios[i].nombre)  
                localStorage.setItem('apellido', usuarios[i].apellido) 

                function redirect(){
                window.location.href="../index.html";
                }
                
                redirectTimeout = setTimeout(redirect, 2000);
                   
            }

           
                
                  
            
        
        
} } )
}

})


