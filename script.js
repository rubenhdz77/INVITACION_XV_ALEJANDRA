// ======================================================
// XV AÑOS - ALEJANDRA MICHELLE
// JAVASCRIPT PRINCIPAL
// ======================================================



// ======================================================
// CUENTA REGRESIVA
// ======================================================

// Fecha del evento
// 05 de septiembre de 2026 - 4:00 PM

const fechaEvento =
    new Date("September 5, 2026 16:00:00").getTime();



function actualizarContador() {

    const ahora =
        new Date().getTime();


    const diferencia =
        fechaEvento - ahora;


    // Si ya llegó el día del evento

    if (diferencia <= 0) {

        document.getElementById("dias").innerText = "00";

        document.getElementById("horas").innerText = "00";

        document.getElementById("minutos").innerText = "00";

        document.getElementById("segundos").innerText = "00";

        return;

    }


    // DÍAS

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    // HORAS

    const horas =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    // MINUTOS

    const minutos =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    // SEGUNDOS

    const segundos =
        Math.floor(
            (diferencia %
                (1000 * 60))
            /
            1000
        );


    // Mostrar

    document.getElementById("dias").innerText =
        String(dias).padStart(2, "0");


    document.getElementById("horas").innerText =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").innerText =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").innerText =
        String(segundos).padStart(2, "0");

}



// Ejecutar inmediatamente

actualizarContador();


// Actualizar cada segundo

setInterval(
    actualizarContador,
    1000
);





// ======================================================
// MÚSICA
// ======================================================

const musica =
    document.getElementById("musica");


const botonMusica =
    document.getElementById("botonMusica");


let reproduciendo = false;



// ======================================================
// VOLUMEN
// ======================================================

musica.volume = 0.5;



// ======================================================
// INTENTAR REPRODUCIR AUTOMÁTICAMENTE
// ======================================================

window.addEventListener(
    "load",
    function () {

        musica.play()

            .then(function () {

                reproduciendo = true;

                botonMusica.innerHTML = "🔊";

            })

            .catch(function () {

                // El navegador bloqueó
                // la reproducción automática.

                reproduciendo = false;

                botonMusica.innerHTML = "🎵";

            });

    }
);



// ======================================================
// FUNCIÓN PARA INICIAR MÚSICA
// ======================================================

function iniciarMusica() {

    if (reproduciendo) {
        return;
    }


    musica.play()

        .then(function () {

            reproduciendo = true;

            botonMusica.innerHTML = "🔊";

        })

        .catch(function () {

            console.log(
                "El navegador bloqueó la música."
            );

        });

}



// ======================================================
// BOTÓN DE MÚSICA
// ======================================================

botonMusica.addEventListener(
    "click",
    function () {

        if (reproduciendo) {

            musica.pause();

            reproduciendo = false;

            botonMusica.innerHTML = "🎵";

        }

        else {

            musica.play()

                .then(function () {

                    reproduciendo = true;

                    botonMusica.innerHTML = "🔊";

                })

                .catch(function () {

                    console.log(
                        "No se pudo reproducir la música."
                    );

                });

        }

    }
);





// ======================================================
// SECCIONES
// ======================================================

const pasos =
    document.querySelectorAll(".paso");


const botonesSiguiente =
    document.querySelectorAll(".boton-siguiente");



let pasoActual = 0;



// ======================================================
// MOSTRAR PRIMERA SECCIÓN
// ======================================================

function iniciarInvitacion() {

    pasos.forEach(function (paso) {

        paso.classList.remove("activo");

    });


    if (pasos.length > 0) {

        pasos[0].classList.add("activo");

        pasoActual = 0;

    }

}



// ======================================================
// CAMBIAR DE SECCIÓN
// ======================================================

function siguientePaso() {


    // Intentar iniciar música

    iniciarMusica();


    // Verificar si existe
    // una siguiente sección

    if (pasoActual >= pasos.length - 1) {

        return;

    }


    // Sección actual

    pasos[pasoActual]
        .classList
        .remove("activo");


    // Siguiente sección

    pasoActual++;


    pasos[pasoActual]
        .classList
        .add("activo");


    // Subir al comienzo
    // de la sección

    window.scrollTo({

        top:
            pasos[pasoActual]
                .offsetTop,

        behavior: "smooth"

    });

}



// ======================================================
// BOTONES SIGUIENTE
// ======================================================

botonesSiguiente.forEach(
    function (boton) {

        boton.addEventListener(
            "click",
            siguientePaso
        );

    }
);





// ======================================================
// INICIAR INVITACIÓN
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        iniciarInvitacion();

    }
);
