```javascript
// ======================================================
// CUENTA REGRESIVA
// ======================================================

// Fecha del evento
const fechaEvento = new Date("September 5, 2026 16:00:00").getTime();

function actualizarContador() {

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
}

actualizarContador();

setInterval(actualizarContador, 1000);


// ======================================================
// MÚSICA
// ======================================================

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;


// ------------------------------------------------------
// CONFIGURACIÓN
// ------------------------------------------------------

musica.volume = 0.5;


// ------------------------------------------------------
// INTENTAR REPRODUCIR AUTOMÁTICAMENTE
// ------------------------------------------------------

window.addEventListener("load", function () {

    musica.play()
        .then(function () {

            reproduciendo = true;

            if (botonMusica) {
                botonMusica.innerHTML = "🔊";
            }

        })
        .catch(function () {

            // Chrome puede bloquear el autoplay.
            // Se intentará iniciar con el primer clic.

            reproduciendo = false;

            if (botonMusica) {
                botonMusica.innerHTML = "🎵";
            }

        });

});


// ------------------------------------------------------
// INICIAR MÚSICA CON EL PRIMER CLIC
// ------------------------------------------------------

function iniciarMusica() {

    if (!reproduciendo) {

        musica.play()
            .then(function () {

                reproduciendo = true;

                if (botonMusica) {
                    botonMusica.innerHTML = "🔊";
                }

            })
            .catch(function () {

                console.log("El navegador bloqueó la reproducción.");

            });

    }

}


// ------------------------------------------------------
// BOTÓN DE MÚSICA
// ------------------------------------------------------

if (botonMusica) {

    botonMusica.addEventListener("click", function () {

        if (reproduciendo) {

            musica.pause();

            botonMusica.innerHTML = "🎵";

            reproduciendo = false;

        } else {

            musica.play()
                .then(function () {

                    botonMusica.innerHTML = "🔊";

                    reproduciendo = true;

                })
                .catch(function () {

                    console.log("No se pudo reproducir la música.");

                });

        }

    });

}


// ======================================================
// INVITACIÓN POR SECCIONES
// ======================================================

const pasos = document.querySelectorAll(".paso");

const botonesSiguiente =
    document.querySelectorAll(".boton-siguiente");


// ======================================================
// MOSTRAR SOLO LA PRIMERA SECCIÓN
// ======================================================

function iniciarInvitacion() {

    pasos.forEach(function (paso, indice) {

        if (indice === 0) {

            paso.classList.add("activo");

        } else {

            paso.classList.remove("activo");

        }

    });

}


// ======================================================
// CAMBIAR DE SECCIÓN
// ======================================================

botonesSiguiente.forEach(function (boton, indice) {

    boton.addEventListener("click", function () {

        // Intentar iniciar música
        iniciarMusica();


        // Verificar que exista la siguiente sección
        if (!pasos[indice + 1]) {
            return;
        }


        // Ocultar sección actual
        pasos[indice].classList.remove("activo");


        // Mostrar siguiente sección
        pasos[indice + 1].classList.add("activo");


        // Subir al inicio de la siguiente sección
        pasos[indice + 1].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ======================================================
// INICIAR INVITACIÓN
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    iniciarInvitacion();

});
```
