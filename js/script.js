$("#menu-iplanner").click(() => (mover($("#some").offset().top, 1000)));
$("#animacion-beneficio").click(() => (mover($("#bene").offset().top, 1000)));
$("#animacion-como-funciona").click(() => (mover($("#funcion").offset().top, 1000)));

let mover = (position, speed) => {
    $("html, body").animate({
        scrollTop: position,
    }, speed);
}

$(".computador").animate({ "margin-right": 0 }, 1000)

$("#descarga").click(() => (window.open("manual.pdf", "_blank")));

$("#boton-sup-login").click(() => (window.location = "login.html"));

window.onload = () => ($(".cover").fadeOut(800))