function circulo (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("circulo")
}
function ovalh (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("ovalh")
}
function rombo (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("rombo")
}
function huevo (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("huevo")
}
function rH (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("rH")
}
function rV (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("rV")
}
function oval (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("oval")
}
function arriba (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("arriba")
}
function abajo (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("abajo")
}
function iQ (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("iQ")
}
function dC (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("dC")
}
function paralelogramo (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("paralelogramo")
}
function diagonal (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("diagonal")
}
function rombo2 (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("rombo2")
}
function tG (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("tG")
}
function img (){
    var figura= document.getElementById("figura")
    figura.classList.toggle ("img")
}
function capturarDatos (){
    var nombre = document.getElementById("nombre"). value;
    var edad    = document.getElementById("edad"). value;
    var fecha   = document.getElementById("fecha"). value;
    var genero  = document.getElementById("genero").value;
    var email   = document.getElementById("email"). value;
    var descripcion = document.getElementById("descripcion").value;
    var color   = document.getElementById("color"). value;

    var mFoto = document.getElementById("mFoto");
    var mNombre = document.getElementById("mNombre");
    var mEdad   = document.getElementById("mEdad");
    var mFecha  = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail  = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");

    mNombre.textContent = nombre;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if(genero == "Masculino") {
        mFoto.src = "img/man.png"
    }
    else if(genero == "Femenino") {
        mFoto.src = "img/woman.png"
    }
    else {
        mFoto.src = "img/transgenero.png"
    }

    switch (color) {
        case "Azul":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Azul");
            break;
        case "Rojo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Rojo");
            break;
        case "Naranja":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Naranja");
            break;
    }
}
