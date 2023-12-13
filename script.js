const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    displayMessage('Cliente: ' + message, 'cliente'); // Cambiado 'Cliente' a 'cliente'
    userInput.value = '';

    const botResponse = getBotResponse(message);
    displayMessage('Causabot: ' + botResponse, 'bot'); // Agregado 'bot' como segundo argumento
}

function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.textContent = message;

    messageContainer.classList.add(sender === 'cliente' ? 'client-message' : 'bot-message'); // Cambiado 'Cliente' a 'cliente'

    chatDisplay.appendChild(messageContainer);
}


function getBotResponse(userMessage) {
    // Lógica simple del chatbot, puedes personalizar esto según tus necesidades
    switch (userMessage.toLowerCase()) {
        case 'hola':
            return '¡Hola! Mi nombre es Causabot. ¿En qué puedo ayudarte?';
        case 'productos':
            return '¡Bien! En ese caso, te encantará la variedad de maquinarias que podemos vender y alquilar en esta empresa, Alogroup.';
        case 'precios':
            return 'Hay una variedad de precios para ello. Puedes dirigirte a "Productos" y luego al carrito, donde verás la variedad de precios disponibles.';
        case 'gama':
            return 'Ofrecemos una amplia gama de maquinaria pesada, que incluye excavadoras, retroexcavadoras, bulldozers y más. Además, contamos con vehículos especializados para diversas industrias, como camiones mineros y maquinaria agrícola.';
        case 'servicios':
            return 'Sí, contamos con expertos en la industria que pueden asesorarte para seleccionar la maquinaria más adecuada para tus necesidades. Nuestros servicios postventa incluyen mantenimiento regular y reparaciones, y ofrecemos capacitación para operadores.';
        case 'costos y financiamiento':
            return 'Nuestros productos varían en precio según el modelo y las especificaciones. Ofrecemos opciones flexibles de financiamiento y arrendamiento para adaptarnos a tus requisitos. Los costos de mantenimiento a largo plazo son transparentes y competitivos.';
        case 'innovación y tecnología':
            return 'Nos enorgullece incorporar las últimas tecnologías en nuestras maquinarias, como sistemas de telemetría y asistencia avanzada al operador. Estamos constantemente actualizándonos para mantenernos a la vanguardia de la industria.';
        case 'disponibilidad y plazos de entrega':
            return 'Los plazos de entrega pueden variar según el producto y la ubicación. Contamos con un amplio inventario y trabajamos diligentemente para garantizar entregas rápidas y eficientes.';
        case 'sostenibilidad y cumplimiento normativo':
            return 'Nos comprometemos con la sostenibilidad y cumplimos con todas las normativas medioambientales. Nuestras máquinas están diseñadas considerando la eficiencia energética y la reducción de emisiones.';
        case 'experiencias de clientes anteriores':
            return 'Con gusto proporcionaremos referencias de clientes satisfechos que han confiado en nuestros productos y servicios. También puedes explorar nuestros casos de éxito en nuestro sitio web.';
        case 'personalización de equipos':
            return 'Sí, ofrecemos opciones de personalización para adaptarnos a necesidades específicas. Trabajamos estrechamente con nuestros clientes para desarrollar soluciones a medida que satisfagan sus requisitos únicos.';
        case 'garantías y políticas':
            return 'Nuestros productos están respaldados por garantías sólidas para proporcionar tranquilidad a nuestros clientes. Además, contamos con políticas claras para abordar cualquier problema o defecto.';
        case 'tendencias del mercado':
            return 'Estamos constantemente monitoreando las tendencias del mercado y estamos comprometidos a adaptarnos a los cambios. Exploramos activamente nuevas tecnologías y productos para mantenernos a la vanguardia.';
        case 'adios':
            return '¡Hasta luego! 😊';
        case '¿aprobe?':
            return 'Si el ingeniero dijo que estaba bien, sí. De lo contrario, volverás a dar el curso 🤨';
        default:
            return 'No entiendo. ¿Puedes preguntar de otra manera?';
    }
}

