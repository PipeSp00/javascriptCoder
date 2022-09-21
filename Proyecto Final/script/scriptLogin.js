


//Formulario
const formularioInicio = document.getElementById("formularioInicio");

formularioInicio.addEventListener("submit", (e) => {
  e.preventDefault(); // 

  const loginInput = new FormData(e.target);

  const infoUsuarioLogin = loginInput.get("usuario");

  const infoContrasenaLogin = loginInput.get("contrasena");

  //Si el usuario no coloco información muestro advertencia de espacios incompletos

  if (infoUsuarioLogin === "" || infoContrasenaLogin === "") {
    swal({
      icon: "warning",
      text: "Es necesario completar ambos campos para inciar sesión",
    });

  }
  // Traigo los usuarios del json y los comparo con los input, si son correctos autorizo el login
  else {
    fetch("../json/usuarios.json")
      .then((response) => response.json())
      .then((usuarios) => {
        for (let i = 0; i < usuarios.length; i++) {
          if (
            usuarios[i].usuario === infoUsuarioLogin &&
            usuarios[i].contrasena === infoContrasenaLogin
          ) {
            swal({
              icon: "success",
              text: "Pronto seras redirigdo a nuestra web",
              timer: 2000,
            });

            localStorage.setItem("usuario", usuarios[i].usuario);
            localStorage.setItem("nombre", usuarios[i].nombre);
            localStorage.setItem("apellido", usuarios[i].apellido);

            function redirect() {
              window.location.href = "../pages/tienda.html";
            }

            redirectTimeout = setTimeout(redirect, 2000);
          }
            else {
          swal({
            icon: "error",
            text: "usuario o contraseña incorrecta",
            timer: 1000,
          })
        };
        }
      });
  }
});
