const boton = document.createElement("button");
boton.textContent = "Haz clic";

boton.addEventListener("click", function() {
alert("Hola desde un archivo externo de javascript");
});
document.getElementById("contenedor").appendChild(boton);