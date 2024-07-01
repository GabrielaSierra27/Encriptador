function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.ContenidoTexto');
    autoResize(textarea);
});

function encriptarTexto() {
    const textarea = document.querySelector('.ContenidoTexto');
    const texto = textarea.value;

    const textoEncriptado = cifradoCesar(texto, 3);
    console.log('Texto encriptado:', textoEncriptado);

    document.querySelector('.ContenidoImg').style.display = 'none';
    document.querySelector('.ContenidoBlancoSubtitulo').style.display = 'none';
    document.querySelector('.ContenidoBlancoP').style.display = 'none';
    document.querySelector('.ContenidoEncriptado').style.display = 'block';
    document.getElementById('textoEncriptado').innerText = textoEncriptado;

    textarea.value = 'Ingrese el texto aquí';
    autoResize(textarea);
}

function desencriptarTexto() {
    const textarea = document.querySelector('.ContenidoTexto');
    const textoEncriptado = textarea.value;

    const textoDesencriptado = cifradoCesar(textoEncriptado, -3);
    console.log('Texto desencriptado:', textoDesencriptado);

    document.querySelector('.ContenidoImg').style.display = 'none';
    document.querySelector('.ContenidoBlancoSubtitulo').style.display = 'none';
    document.querySelector('.ContenidoBlancoP').style.display = 'none';
    document.querySelector('.ContenidoEncriptado').style.display = 'block';
    document.getElementById('textoEncriptado').innerText = textoDesencriptado;

    textarea.value = 'Ingrese el texto aquí';
    autoResize(textarea);
}

function cifradoCesar(texto, desplazamiento) {
    return texto.split('').map(char => {
        const codigo = char.charCodeAt(0);
        
        if (codigo >= 65 && codigo <= 90) { 
            return String.fromCharCode((codigo - 65 + desplazamiento + 26) % 26 + 65);
        } else if (codigo >= 97 && codigo <= 122) { 
            return String.fromCharCode((codigo - 97 + desplazamiento + 26) % 26 + 97);
        } else { 
            return char;
        }
    }).join('');
}

function copiarTexto() {
    const texto = document.getElementById('textoEncriptado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
