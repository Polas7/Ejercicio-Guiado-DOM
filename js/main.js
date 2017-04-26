function translate(){
    var titulo= document.getElementById("form-signin-heading");
    var email= document.getElementById("inputEmail");
    var password= document.getElementById("inputPassword");
    var remember= document.getElementsByTagName("span")[0];
    var button= document.getElementsByClassName("btn")[0];

    titulo.innerHTML= "Por favor inicia sesión";
    email.placeholder= "Correo Electrónico";
    password.placeholder= "Contraseña";
    remember.innerHTML= "Recordar Datos";
    button.innerHTML= "Iniciar sesión"; 
}

translate();

document.write("Datos de Formulario <br>");
document.write("El correo electrónico ingresado es: <br>");
document.write("hola@laboratoria.la <br>");
document.write("la clave correcta es: <br> 123456");