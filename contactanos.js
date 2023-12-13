// Selecciona el elemento del mensaje y el formulario
var message = document.getElementById("message");
var form = document.querySelector("form");

// Agrega un evento al formulario para mostrar el mensaje después de enviar
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío por defecto para este ejemplo
    message.classList.remove("hidden");
    message.classList.add("show");
});
