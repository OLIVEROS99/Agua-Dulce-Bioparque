const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let cedula = document.getElementById('cedula').value;
        let phone = document.getElementById('telefono').value;
        let correo = document.getElementById('correo').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 573146597922;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}
%20${cedula}, Asunto:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
