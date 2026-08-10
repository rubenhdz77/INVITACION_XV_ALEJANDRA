/* ==========================================
CUENTA REGRESIVA
========================================== */

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
    (diferencia % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
);

const minutos = Math.floor(
    (diferencia % (1000 * 60 * 60)) /
    (1000 * 60)
);

const segundos = Math.floor(
    (diferencia % (1000 * 60)) /
    1000
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

if (musica && botonMusica) {

```
window.addEventListener("load", function () {

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

});


botonMusica.addEventListener("click", function () {

    if (reproduciendo) {

        musica.pause();

        botonMusica.innerHTML = "🎵";

        reproduciendo = false;

    } else {

        musica.play();

        botonMusica.innerHTML = "🔊";

        reproduciendo = true;

    }

});
```

}

/* ==========================================
   INVITACIÓN POR PASOS
========================================== */

const pasos = document.querySelectorAll(".paso");

const botonesSiguiente =
    document.querySelectorAll(".boton-siguiente");


/* ==========================================
   MOSTRAR PRIMERA SECCIÓN
========================================== */

function iniciarInvitacion() {

    pasos.forEach(function(paso) {

        paso.classList.remove("activo");

    });

    if (pasos.length > 0) {

        pasos[0].classList.add("activo");

    }

}


/* ==========================================
   BOTONES SIGUIENTE
========================================== */

botonesSiguiente.forEach(function(boton, indice) {

    boton.addEventListener("click", function() {

        if (pasos[indice]) {

            pasos[indice].classList.remove("activo");

        }

        if (pasos[indice + 1]) {

            pasos[indice + 1].classList.add("activo");

            pasos[indice + 1].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   ABRIR INVITACIÓN
========================================== */

const abrirInvitacion =
    document.querySelector('a[href="#invitacion"]');

const portada =
    document.querySelector(".portada");

const invitacion =
    document.getElementById("invitacion");


if (abrirInvitacion) {

    abrirInvitacion.addEventListener("click", function(event) {

        event.preventDefault();

        /* Ocultar portada */

        if (portada) {

            portada.style.display = "none";

        }

        /* Mostrar primera sección */

        iniciarInvitacion();

        /* Ir a la invitación */

        if (invitacion) {

            invitacion.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}

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

if (abrirMapa && ventanaMapa) {

```
abrirMapa.addEventListener("click", function () {

    ventanaMapa.classList.add("mostrar-mapa");

    document.body.classList.add("mapa-abierto");

});
```

}

/* Cerrar mapa */

if (cerrarMapa && ventanaMapa) {

```
cerrarMapa.addEventListener("click", function () {

    ventanaMapa.classList.remove("mostrar-mapa");

    document.body.classList.remove("mapa-abierto");

});
```

}

/* Cerrar tocando fuera */

if (ventanaMapa) {

```
ventanaMapa.addEventListener("click", function (event) {

    if (event.target === ventanaMapa) {

        ventanaMapa.classList.remove("mostrar-mapa");

        document.body.classList.remove("mapa-abierto");

    }

});
```

}

/* Cerrar con ESC */

document.addEventListener("keydown", function (event) {

```
if (event.key === "Escape" && ventanaMapa) {

    ventanaMapa.classList.remove("mostrar-mapa");

    document.body.classList.remove("mapa-abierto");

}
```

});
