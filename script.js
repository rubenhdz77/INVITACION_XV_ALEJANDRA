/* ==========================================
CUENTA REGRESIVA
========================================== */

// Fecha del evento
const fechaEvento = new Date("September 5, 2026 16:00:00").getTime();

function actualizarContador() {

```
const ahora = new Date().getTime();

const diferencia = fechaEvento - ahora;

if (diferencia <= 0) {

    document.getElementById("dias").innerText = "00";
    document.getElementById("horas").innerText = "00";
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";

    return;
}

const dias = Math.floor(
    diferencia / (1000 * 60 * 60 * 24)
);

const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60))
    / (1000 * 60)
);

const segundos = Math.floor(
    (diferencia % (1000 * 60))
    / 1000
);

document.getElementById("dias").innerText =
    String(dias).padStart(2, "0");

document.getElementById("horas").innerText =
    String(horas).padStart(2, "0");

document.getElementById("minutos").innerText =
    String(minutos).padStart(2, "0");

document.getElementById("segundos").innerText =
    String(segundos).padStart(2, "0");
```

}

actualizarContador();

setInterval(actualizarContador, 1000);

/* ==========================================
MÚSICA
========================================== */

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;

// Intentar reproducir automáticamente
window.addEventListener("load", function () {

```
musica.volume = 0.5;

const intento = musica.play();

if (intento !== undefined) {

    intento
        .then(function () {

            reproduciendo = true;
            botonMusica.innerHTML = "🔊";

        })
        .catch(function () {

            reproduciendo = false;
            botonMusica.innerHTML = "🎵";

        });

}
```

});

// Botón de música
botonMusica.addEventListener("click", function () {

```
if (reproduciendo) {

    musica.pause();

    botonMusica.innerHTML = "🎵";

    reproduciendo = false;

} else {

    musica.play();

    botonMusica.innerHTML = "🔊";

    reproduciendo = true;

}
```

});

/* ==========================================
ANIMACIÓN AL HACER SCROLL
========================================== */

const secciones = document.querySelectorAll(".seccion");

const observador = new IntersectionObserver(

```
function (entradas) {

    entradas.forEach(function (entrada) {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";

            entrada.target.style.transform =
                "translateY(0)";

        }

    });

},

{
    threshold: 0.15
}
```

);

secciones.forEach(function (seccion) {

```
seccion.style.opacity = "0";

seccion.style.transform =
    "translateY(30px)";

seccion.style.transition =
    "opacity 1s ease, transform 1s ease";

observador.observe(seccion);
```

});

/* ==========================================
INVITACIÓN POR SECCIONES
========================================== */

const pasos = document.querySelectorAll(".paso");

const botonesSiguiente =
document.querySelectorAll(".boton-siguiente");

/* ==========================================
MOSTRAR PRIMERA SECCIÓN
========================================== */

function iniciarInvitacion() {

```
if (pasos.length > 0) {

    pasos.forEach(function(paso) {

        paso.classList.remove("activo");

    });

    pasos[0].classList.add("activo");

}
```

}

/* ==========================================
ABRIR INVITACIÓN
========================================== */

const abrirInvitacion =
document.getElementById("abrirInvitacion");

const portada =
document.querySelector(".portada");

const invitacion =
document.getElementById("invitacion");

if (abrirInvitacion) {

```
abrirInvitacion.addEventListener("click", function(event) {

    event.preventDefault();

    // Ocultar completamente la portada
    portada.classList.add("portada-oculta");

    // Iniciar la invitación
    iniciarInvitacion();

    // Llevar al comienzo de la invitación
    setTimeout(function() {

        invitacion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 150);

});
```

}

/* ==========================================
BOTONES SIGUIENTE
========================================== */

botonesSiguiente.forEach(function(boton, indice) {

```
boton.addEventListener("click", function() {

    // Ocultar el paso actual
    pasos[indice].classList.remove("activo");

    // Mostrar el siguiente
    if (pasos[indice + 1]) {

        pasos[indice + 1].classList.add("activo");

        setTimeout(function() {

            pasos[indice + 1].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

});
```

});

/* ==========================================
MAPA
========================================== */

const abrirMapa =
document.getElementById("abrirMapa");

const cerrarMapa =
document.getElementById("cerrarMapa");

const ventanaMapa =
document.getElementById("ventanaMapa");

/* Abrir mapa */

if (abrirMapa) {

```
abrirMapa.addEventListener("click", function() {

    ventanaMapa.classList.add("mostrar-mapa");

    document.body.classList.add("mapa-abierto");

});
```

}

/* Cerrar mapa */

if (cerrarMapa) {

```
cerrarMapa.addEventListener("click", function() {

    ventanaMapa.classList.remove("mostrar-mapa");

    document.body.classList.remove("mapa-abierto");

});
```

}

/* Cerrar mapa tocando fuera */

if (ventanaMapa) {

```
ventanaMapa.addEventListener("click", function(event) {

    if (event.target === ventanaMapa) {

        ventanaMapa.classList.remove("mostrar-mapa");

        document.body.classList.remove("mapa-abierto");

    }

});
```

}

/* Cerrar mapa con tecla ESC */

document.addEventListener("keydown", function(event) {

```
if (event.key === "Escape") {

    if (ventanaMapa) {

        ventanaMapa.classList.remove("mostrar-mapa");

        document.body.classList.remove("mapa-abierto");

    }

}
```

});
