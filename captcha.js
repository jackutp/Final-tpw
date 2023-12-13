// Generar el código CAPTCHA al cargar la página
window.onload = generateCaptcha;

// Generar un código CAPTCHA aleatorio
function generateCaptcha() {
    var captchaText = generateRandomCaptcha(6);
    document.getElementById("captcha-text").textContent = captchaText;
    document.getElementById("captcha-input").value = "";
    document.getElementById("captcha-result").textContent = "";
}

// Generar una cadena de caracteres al azar para el CAPTCHA
function generateRandomCaptcha(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha = "";
    for (var i = 0; i < length; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Verificar si el código ingresado coincide con el CAPTCHA
function verifyCaptcha() {
    var captchaText = document.getElementById("captcha-text").textContent;
    var userInput = document.getElementById("captcha-input").value;

    if (userInput === captchaText) {
        document.getElementById("captcha-result").textContent = "Código CAPTCHA correcto.";
    } else {
        document.getElementById("captcha-result").textContent = "Código CAPTCHA incorrecto. Intenta de nuevo.";
    }
}

