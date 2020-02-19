$("#boton-iniciar").click(function(event) {
    $.post('https://cors-anywhere.herokuapp.com/http://54.173.133.231:9806/database/login', { email: $("#email").val(), contrasena: $("#contrasena").val(), },
        function(data, textStatus, xhr) {
            if (data.response == 1) {
                alert("ingreso-al-sistema")
            } else {
                $(".alerta").toggle("puff", { percent: 20 }, 100)
            }
        });
});

$(".manual-usuario").click(function(event) {
    window.open("manual.pdf")
});

$(".logo-direccion").click(function(event) {
	window.location="index.html"
});

window.onload=function(){
	$(".cover").fadeOut(800)
}
