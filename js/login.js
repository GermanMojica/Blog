let nombre = document.getElementById('nombre');
let password = document.getElementById ('password');
let mensaje = document.getElementById ('msg');
mensaje.style.color = "purple";

let form = document.getElementById ('form');
form.addEventListener ('submit', function(evento){
    evento.preventDefault();

let mensaje = [];

if(nombre.value != 'german' && password.value != '123456789' ){
    window.alert('Verifique la información');
}
else if (nombre.value != "german"){
    window.alert('Verifique su ususario');
}
else if (password.value != "123456789"){
    window.alert('Verifique su password');
}
else if (nombre.value === 'german','steven' && password.value === '123456789' ){
    location = "../blog_deslogueado.html";    
}

// msg.innerHTML = mensaje.join (', ');

});