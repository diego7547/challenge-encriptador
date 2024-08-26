// Función para encriptar el texto
const encriptar = () =>{
    const texto = document.getElementById('texto').value;
    
    
    
    
    const sustituciones = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };


  
    const mensaje = document.getElementById('mensaje');
    const textoResultado = document.getElementById('texto-responce');
    const content = document.getElementById('responce-btn');


    mensaje.style.display = 'none';
    textoResultado.style.display = 'block';
    content.style.display = 'flex';


    textoResultado.value = texto.split('').map(letra => sustituciones[letra] || letra).join('');
   
   
}

const desencriptar = ()=>{
    const texto = document.getElementById('texto');
    
    const sustitucionesInversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const textoResultado = document.getElementById('texto-responce');
   textoResultado.value =  texto.value.replace(/enter|imes|ai|ober|ufat/g, match => sustitucionesInversas[match]);
   
}


const copiar = ()=>{
    const texto = document.getElementById('texto-responce');

    texto.select();
    texto.setSelectionRange(0, 99999);

    try {
        
        document.execCommand('copy');
        alert('Texto copiado exitosamente');
    } catch (err) {
        alert('No se pudo copiar el texto correctamente');
    }
}


