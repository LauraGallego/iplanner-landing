/*
       -------------------------------- Comentario de modificación -------------------------------- 
    * Se agrego 
        - La encriptacion del lado del cliente 
        - El manejo de respuestas enviadas por el servidor de IPlanner
*/
const route = "http://localhost:2003"
$("#boton-iniciar").click(function(event) {
    if (verifyInputs()) return;

    var bf = new Blowfish("F%0uR1&_3rING$");
    $.post(route + '/access/login', { user: $("#user").val(), password: bf.base64Encode(bf.encrypt($("#password").val())), },
        (response) => {
            /*
            
             * Codigo 200:     [Success]         Autenticacion realizada con exito
            
             * Codigo 401:     [Unathorized]     El usuario no existe en los registros de leonisa
            
             * Codigo 403:     [Forbidden]       El usuario existe en Leonisa pero no tiene acceso a la plataforma    
            
            */
            switch (response.status) {
                case 200:
                    let user=bf.base64Encode(bf.encrypt(response.name))
                    let position= bf.base64Encode(bf.encrypt(response.position))
                    location.replace(encodeURI("http://localhost:4200/indicators/campaign?usr="+user+"&lbty="+position))
                      
                    break;
                case 401:
                    showAlert("Usuario o contraseña <b>incorrectos</b>")
                    break;
                case 403:
                    showAlert("Acceso al sistema <b>prohibido</b>")
                    break;
            }
        });
});



$(".manual-usuario").click(() => (window.open("manual.pdf")));

$(".logo-direccion").click(() => (window.location = "index.html"));

window.onload = () => ($(".cover").fadeOut(800))

/*
 * Se realizo una abstraccion de la funcion de mostrar errores
 */
let showAlert = msg => {
    $(".alerta").html(msg)
    $(".alerta").removeClass('hide')
}

/*
 * Se agrego una verificacion extra de campos vacios
 */
let verifyInputs = () => {
    if ($("#user").val() === "" && $("#password").val() === "")
        showAlert("Tienes que llenar los <b>datos</b> de ingreso")
    else if ($("#user").val() === "")
        showAlert("El campo <b>usuario</b> no puede estar vacio")
    else if ($("#password").val() === "")
        showAlert("El campo <b>contraseña</b> no puede estar vacio")

    return ($("#user").val() === "" || $("#password").val() === "")
}