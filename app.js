
/* ==========================================
   1. DATOS DE LA GRADUACIÓN
   ========================================== */

const EVENTO = {
    fechaTexto: "Sábado 30 de enero de 2027",
    hora: "5:00 p. m.",
    lugar: "Nombre del salón de eventos",
    mapa: "https://maps.google.com/"
};


/* ==========================================
   2. LISTA DE INVITADOS
   Cada código corresponde a una persona.
   ========================================== */

const INVITADOS = {
    carlos: "Carlos Martínez",
    maria: "María López",
    juan: "Juan Pérez",
    familia: "Familia Hernández"
};


/* ==========================================
   3. PERSONALIZAR EL NOMBRE DEL INVITADO
   Lee el código que viene en el enlace.
   ========================================== */

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("id");
const nombre = codigo ? INVITADOS[codigo] : null;

const seccionDestinatario = document.getElementById(
    "seccionDestinatario"
);

const elementoNombre = document.getElementById("nombreInvitado");

if (seccionDestinatario && elementoNombre) {
    if (nombre) {
        elementoNombre.textContent = nombre;
        seccionDestinatario.hidden = false;
    } else {
        elementoNombre.textContent = "";
        seccionDestinatario.hidden = true;
    }
}


/* ==========================================
   4. MOSTRAR LOS DATOS DEL EVENTO
   ========================================== */

const elementoFecha = document.getElementById("fechaEvento");
const elementoHora = document.getElementById("horaEvento");
const elementoLugar = document.getElementById("lugarEvento");
const botonMapa = document.getElementById("botonMapa");

if (elementoFecha) {
    elementoFecha.textContent = EVENTO.fechaTexto;
}

if (elementoHora) {
    elementoHora.textContent = EVENTO.hora;
}

if (elementoLugar) {
    elementoLugar.textContent = EVENTO.lugar;
}

if (botonMapa) {
    botonMapa.href = EVENTO.mapa;
}
