
/* ==========================================
   1. DATOS DE LA GRADUACIÓN UNIVERSITARIA
   Modifica estos datos por los reales.
   ========================================== */

const EVENTO = {
  fechaTexto: "Sábado 30 de enero de 2027",
  hora: "5:00 p. m.",
  lugar: "Nombre del salón de eventos",
  mapa: "https://maps.google.com/"
};


/* ==========================================
   2. LISTA DE INVITADOS
   Agrega aquí a todas las personas.
   Cada código debe ser único y sin espacios.
   ========================================== */

const INVITADOS = {
  carlos: {
    nombre: "Carlos Martínez",
    mensaje: "Gracias por acompañarme en este logro."
  },

  maria: {
    nombre: "María López",
    mensaje: "Será una alegría compartir este momento contigo."
  },

  familia: {
    nombre: "Familia Hernández",
    mensaje: "Los espero para celebrar juntos este día especial."
  },

  juan: {
    nombre: "Juan Pérez",
    mensaje: "Tu compañía hará este día aún más especial."
  }

};


/* ==========================================
   3. MOSTRAR LOS DATOS DEL INVITADO
   Lee el código que viene en el enlace.
   Ejemplo: ?id=carlos
   ========================================== */

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("id");
const invitado = codigo ? INVITADOS[codigo] : null;

const nombreElemento = document.getElementById("nombreInvitado");
const mensajeElemento = document.getElementById("mensajeInvitado");

if (nombreElemento && mensajeElemento) {
  if (invitado) {
    nombreElemento.textContent = invitado.nombre;
    mensajeElemento.textContent = invitado.mensaje;
  } else {
    nombreElemento.textContent = "Invitado especial";
    mensajeElemento.textContent =
      "Tu presencia hará este momento aún más especial.";
  }
}


/* ==========================================
   4. MOSTRAR FECHA, HORA Y LUGAR
   ========================================== */

const fechaElemento = document.getElementById("fechaEvento");
const horaElemento = document.getElementById("horaEvento");
const lugarElemento = document.getElementById("lugarEvento");

if (fechaElemento) {
  fechaElemento.textContent = EVENTO.fechaTexto;
}

if (horaElemento) {
  horaElemento.textContent = EVENTO.hora;
}

if (lugarElemento) {
  lugarElemento.textContent = EVENTO.lugar;
}


/* ==========================================
   5. BOTÓN DE GOOGLE MAPS
   Pega el enlace real de la ubicación.
   ========================================== */

const botonMapa = document.getElementById("botonMapa");

if (botonMapa) {
  botonMapa.href = EVENTO.mapa;
  botonMapa.target = "_blank";
  botonMapa.rel = "noopener noreferrer";
}
