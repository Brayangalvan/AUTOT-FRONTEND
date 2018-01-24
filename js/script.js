icono = document.getElementById("icon");
menu = document.getElementById("menu");
icono.addEventListener("click",esconder);

function esconder() {
    console.log("entra");
 var clase = menu.className;
 if (clase == "invisible"){
     console.log("entra");
     menu.classList.remove("invisible");
     menu.classList.add("visible");
     icono.classList.add("activo");
 }
 else
 {
    menu.classList.remove("visible");
    menu.classList.add("invisible");
    icono.classList.remove("activo"); 
 }
}