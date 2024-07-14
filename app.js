
let textoIngresado = '';
let array = [];
let textoResultado = '';

function encriptado(){
    inicializacion()

    textoIngresado = document.getElementById('input').value;
    
    for (let i = 0; i < textoIngresado.length; i++) {
        //Guardado de variables dentro del arreglo
        array[i] = textoIngresado[i];
        //Ciclo de if que determina la incriptacion
        if(array[i] == 'a'){
            array[i] = 'ai';
        }else{
            if(array[i] == 'e'){
                array[i] = 'enter';
            }else{
                if(array[i] == 'i'){
                    array[i] = 'imes';
                }else{
                    if(array[i] == 'o'){
                        array[i] = 'ober';
                    }else{
                        if(array[i] == 'u'){
                            array[i] = 'ufat';
                        }
                    }
                }
            } 
        }
        //Fin de if que determina el la incriptacion
        textoResultado = textoResultado + array[i];
    }
    let aux = document.getElementById('resultado');
    aux.innerText = textoResultado;
    console.log(textoResultado);
   visibilidad();

}

function desencriptar(){

    inicializacion()

    textoIngresado = document.getElementById('input').value;
    for (let i = 0; i < textoIngresado.length; i++) {
        array[i] = textoIngresado[i]; 
    }
    array = textoIngresado.split('');

    for (let i = 0; i < array.length; i++) {
        if(array[i] == 'a' && array[i+1] == 'i'){
            textoResultado += 'a';
            i += 1;
        } else if(array[i] == 'e' && array[i+1] == 'n' && array[i+2] == 't' && array[i+3] == 'e' && array[i+4] == 'r'){
            textoResultado += 'e';
            i += 4;
        } else if(array[i] == 'i' && array[i+1] == 'm' && array[i+2] == 'e' && array[i+3] == 's'){
            textoResultado += 'i';
            i += 3;
        } else if(array[i] == 'o' && array[i+1] == 'b' && array[i+2] == 'e' && array[i+3] == 'r'){
            textoResultado += 'o';
            i += 3;
        } else if(array[i] == 'u' && array[i+1] == 'f' && array[i+2] == 'a' && array[i+3] == 't'){
            textoResultado += 'u';
            i += 3;
        } else {
            textoResultado += array[i];
        }
    }
    let aux = document.getElementById('resultado');
    aux.innerText = textoResultado;
    console.log(textoResultado);
    visibilidad();
}

function inicializacion() {
    textoIngresado = '';
    array = [];
    textoResultado = '';
}

function copit() {
    let texto = document.getElementById('resultado').innerText;
            navigator.clipboard.writeText(texto).then(function() {
                console.log('Texto copiado al portapapeles');
            }, function(err) {
                console.error('Error al copiar el texto: ', err);
            });

}

function visibilidad(){
    document.getElementById('copit').style.display = 'inline';
    document.getElementById('resultado').style.display = 'inline';
    document.querySelector('.presentacion__contenido__desencriptado_subtitulo').style.display = 'none';
    document.querySelector('.presentacion__contenido__desencriptado_muñeco').style.display = 'none';
    document.querySelector('.presentacion__contenido__desencriptado_texto').style.display = 'none';
}