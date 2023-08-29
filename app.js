
// establezco objeto vacio

const objetoInfo ={
    nombre : '',
    apellido : '',
    altura : 0,
    peso : 0,
    email : '',
    password : ''
}
const estadoErroresOK = {
    nombre: false,
    apellido: false,
    altura: false,
    peso: false,
    email: false,
    password: false
};
// capturo nodos
const formulario = document.querySelector('#form');

const campoNombre = document.querySelector('#nombre');
const campoApellido = document.querySelector('#apellido');
const campoPeso = document.querySelector('#peso');
const campoAltura = document.querySelector('#altura');
const campoEmail = document.querySelector('#email');
const campoPassword = document.querySelector('#password');

const nombreError = document.querySelector('#nombreError');
const apellidoError = document.querySelector('#apellidoError');
const alturaError = document.querySelector('#alturaError');
const pesoError = document.querySelector('#pesoError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

function mostrarErrores(){
    estadoErroresOK.nombre ? nombreError.classList.remove('visible'): nombreError.classList.add('visible');
    estadoErroresOK.apellido ? apellidoError.classList.remove('visible') : apellidoError.classList.add('visible'); 
    // estadoErroresOK.altura ? alturaError.classList.remove('visible') :alturaError.classList.add('visible'); 
    // estadoErroresOK.peso ? pesoError.classList.remove('visible') : pesoError.classList.add('visible'); 
    estadoErroresOK.email ? emailError.classList.remove('visible') : emailError.classList.add('visible');
    estadoErroresOK.password ? passwordError.classList.remove('visible') : passwordError.classList.add('visible');

}


    formulario.addEventListener('change', function(){

    // actualizo estado de pantalla con los datos 
    objetoInfo.nombre = campoNombre.value;
    objetoInfo.apellido = campoApellido.value;
    objetoInfo.altura = campoAltura.value;
    objetoInfo.peso = campoPeso.value;
    objetoInfo.email = campoEmail.value;
    objetoInfo.password = campoPassword.value;

    //  actualizar el estado de error segun el estado del usuario
    estadoErroresOK.nombre = validarNombre(objetoInfo.nombre);
    estadoErroresOK.apellido = validarApellido(objetoInfo.apellido);
    // estadoErroresOK.altura = validarAltura(objetoInfo.altura);
    // estadoErroresOK.peso = validarPeso(objetoInfo.peso);
    estadoErroresOK.email = validarEmail(objetoInfo.email);
    estadoErroresOK.password = validarPassword(objetoInfo.password);

    //muestro los errores
        mostrarErrores()
    });


    //funcion de validacion de campos

    function validarPassword(password) {
        let resultado = false;

        if(password.length > 5 && !password.includes(' ')) {
            resultado = true;
        }
        return resultado;

}
    function validarNombre(nombre) {
        let resultado = false;

        if(nombre.length >4 && !nombre.includes('/', '@','.')) {
            resultado = true;
        }
        return resultado;
}
function validarApellido(apellido) {
    let resultado = false;

    if(apellido.length >4 && !apellido.includes('/', '@','.')) {
        resultado = true;
    }
    return resultado
}

// function validarAltura(altura) {
//     let resultado = false;

//     if(altura.length >1) {
//         resultado = true;
//     }
//     return resultado
// }
// function validarPeso(peso) {
//     let resultado = false;

//     if(peso.length <1) {
//         resultado = true;
//     }
//     return resultado
// }

function validarEmail(email){
  let resultado = false;

    let regex = new RegExp ('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if(regex.test(email)){
        resultado = true;
    }
    return resultado
}



// escuchar el submit del form


const botonSubmit = document.querySelector('.submit');

formulario.addEventListener('submit', function(e){
    
    e.preventDefault();
    // utilizamos funcion para capturar datos
   

})


// escuchar por el submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(objetoInfo);
    console.log(estadoErroresOK)

    if (estadoErroresOK.email && estadoErroresOK.password && estadoErroresOK.nombre && estadoErroresOK.apellido){
        navegarPaginaExito()
    }
    
});

function navegarPaginaExito(){
    localStorage.setItem('user',JSON.stringify(objetoInfo))
        console.log(JSON.stringify(objetoInfo))
    const botonSubmit = document.querySelector('.submit');
    botonSubmit.disabled = true;
    botonSubmit.textContent = 'Registro Completo';

    setTimeout(function() {
        window.location.replace("perfil.html");
    },3000)
    
}