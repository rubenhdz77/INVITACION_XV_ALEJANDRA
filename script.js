/* ==========================================
   CUENTA REGRESIVA
========================================== */

const fechaEvento = new Date("September 5, 2026 16:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");

    if (!diasElemento || !horasElemento || !minutosElemento || !segundosElemento) {
        return;
    }

    if (diferencia <= 0) {

        diasElemento.innerText = "00";
        horasElemento.innerText = "00";
        minutosElemento.innerText = "00";
        segundosElemento.innerText = "00";

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

    diasElemento.innerText = String(dias).padStart(2, "0");
    horasElemento.innerText = String(horas).padStart(2, "0");
    minutosElemento.innerText = String(minutos).padStart(2, "0");
    segundosElemento.innerText = String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);


/* ==========================================
   MÚSICA
========================================== */

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;


/* Intentar música automáticamente */

if (musica) {

    window.addEventListener("load", function() {

        musica.volume = 0.5;

        const intento = musica.play();

        if (intento !== undefined) {

            intento
                .then(function() {

                    reproduciendo = true;

                    if (botonMusica) {
                        botonMusica.innerHTML = "🔊";
                    }

                })
                .catch(function() {

                    reproduciendo = false;

                    if (botonMusica) {
                        botonMusica.innerHTML = "🎵";
                    }

                });

        }

    });

}


/* Botón de música */

if (musica && botonMusica) {

    botonMusica.addEventListener("click", function() {

        if (reproduciendo) {

            musica.pause();

            botonMusica.innerHTML = "🎵";

            reproduciendo = false;

        } else {

            musica.play()
                .then(function() {

                    botonMusica.innerHTML = "🔊";
                    reproduciendo = true;

                })
                .catch(function() {

                    console.log("No se pudo reproducir la música.");

                });

        }

    });

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


        /* ==========================================
           INICIAR MÚSICA AL HACER CLIC
        ========================================== */

        if (musica && !reproduciendo) {

            musica.play()
                .then(function() {

                    reproduciendo = true;

                    if (botonMusica) {
                        botonMusica.innerHTML = "🔊";
                    }

                })
                .catch(function() {

                    console.log("El navegador bloqueó la música.");

                });

        }


        /* ==========================================
           OCULTAR PORTADA
        ========================================== */

        if (portada) {

            portada.style.display = "none";

        }


        /* ==========================================
           MOSTRAR PRIMERA SECCIÓN
        ========================================== */

        iniciarInvitacion();


        /* ==========================================
           IR A LA INVITACIÓN
        ========================================== */

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


/* ==========================================
   ABRIR MAPA
========================================== */

if (abrirMapa && ventanaMapa) {

    abrirMapa.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        ventanaMapa.classList.add("mostrar-mapa");

        document.body.classList.add("mapa-abierto");

    });

}


/* ==========================================
   CERRAR MAPA CON X
========================================== */

if (cerrarMapa && ventanaMapa) {

    cerrarMapa.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        ventanaMapa.classList.remove("mostrar-mapa");

        document.body.classList.remove("mapa-abierto");

    });

}


/* ==========================================
   CERRAR MAPA TOCANDO AFUERA
========================================== */

if (ventanaMapa) {

    ventanaMapa.addEventListener("click", function(event) {

        if (event.target === ventanaMapa) {

            ventanaMapa.classList.remove("mostrar-mapa");

            document.body.classList.remove("mapa-abierto");

        }

    });

}


/* ==========================================
   CERRAR MAPA CON ESC
========================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" && ventanaMapa) {

        ventanaMapa.classList.remove("mostrar-mapa");

        document.body.classList.remove("mapa-abierto");

    }

});
```
