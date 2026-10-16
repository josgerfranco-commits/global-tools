// Función para cambiar de pestaña/herramienta de forma interactiva
function switchTool(toolId) {
    // 1. Ocultar todas las tarjetas de herramientas
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => card.classList.remove('active'));

    // 2. Desactivar todos los botones de la barra de navegación
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Mostrar la tarjeta de la herramienta seleccionada
    const activeCard = document.getElementById(toolId);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    // 4. Activar visualmente el botón sobre el que se hizo clic
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Lógica de Interés Compuesto
function calcularInteres() {
    const capital = parseFloat(document.getElementById('capital').value) || 0;
    const tasa = (parseFloat(document.getElementById('tasa').value) || 0) / 100;
    const tiempo = parseFloat(document.getElementById('tiempo').value) || 0;

    const montoFinal = capital * Math.pow((1 + tasa), tiempo);
    const ganancia = montoFinal - capital;

    const resultadoDiv = document.getElementById('resultado-interes');
    resultadoDiv.innerHTML = `Monto Final: <strong>$${montoFinal.toFixed(2)}</strong> | Ganancia Neta: <strong>$${ganancia.toFixed(2)}</strong>`;
}

// Lógica de Conversor de Divisas
function convertirDivisa() {
    const monto = parseFloat(document.getElementById('monto').value) || 0;
    const de = document.getElementById('moneda-de').value;
    const a = document.getElementById('moneda-a').value;

    const tasas = {
        USD: 1.0,
        EUR: 0.92,
        GTQ: 7.85
    };

    const enUSD = monto / tasas[de];
    const resultado = enUSD * tasas[a];

    const resultadoDiv = document.getElementById('resultado-divisa');
    resultadoDiv.innerHTML = `${monto} ${de} = <strong>${resultado.toFixed(2)} ${a}</strong>`;
}

// Lógica de Generador de Contraseñas
function generarPassword() {
    const length = parseInt(document.getElementById('pass-length').value) || 16;
    const incNumeros = document.getElementById('inc-numeros').checked;
    const incSimbolos = document.getElementById('inc-simbolos').checked;

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incNumeros) chars += "0123456789";
    if (incSimbolos) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const resultadoDiv = document.getElementById('resultado-password');
    resultadoDiv.innerHTML = `Contraseña generada: <code style="background:#e2e8f0; padding:2px 6px; border-radius:4px; font-weight:bold;">${password}</code>`;
}

// Lógica de Contador de Palabras y Caracteres
function contarTexto() {
    const texto = document.getElementById('texto-analizar').value.trim();
    
    const caracteres = texto.length;
    const palabras = texto === "" ? 0 : texto.split(/\s+/).length;

    document.getElementById('count-words').innerText = palabras;
    document.getElementById('count-chars').innerText = caracteres;
}

// Lógica de Monetización / PayPal
function donarPayPal() {
    const resultadoDiv = document.getElementById('resultado-paypal');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `Redirigiendo a PayPal para completar tu donación... <br><a href="https://www.paypal.com" target="_blank" style="color: #0070ba; font-weight: bold;">Haz clic aquí si no se abre automáticamente</a>`;
    
    setTimeout(() => {
        window.open('https://www.paypal.com', '_blank');
    }, 1000);
}