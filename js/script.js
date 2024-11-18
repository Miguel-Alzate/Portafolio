const textarea = document.getElementById('myTextarea');
let texto_efecto_typing = document.getElementById('texto_efecto_typing');
let texto = "Miguel Alzate";

function crear_efecto_typing(elemento, texto_p, i = 0) {
    if (i <= texto_p.length) {
        elemento.textContent = texto_p.slice(0, i);
        
        if (i === texto_p.length) {
            // Esperar 2 segundos antes de borrar
            setTimeout(() => {
                // Borrar el texto gradualmente
                function borrarTexto() {
                    if (elemento.textContent.length > 0) {
                        elemento.textContent = elemento.textContent.slice(0, -1);
                        setTimeout(borrarTexto, 100);
                    } else {
                        // Esperar 1 segundo adicional antes de reiniciar
                        setTimeout(() => {
                            crear_efecto_typing(elemento, texto_p);
                        }, 500);
                    }
                }
                borrarTexto();
            }, 2000);
            return;
        }
        
        setTimeout(() => {
            crear_efecto_typing(elemento, texto_p, i + 1);
        }, 200);
    }
}

crear_efecto_typing(texto_efecto_typing, texto);

if (textarea) {
    textarea.addEventListener('click', () => {
        textarea.setSelectionRange(0, 0);
        textarea.focus();
    });
}