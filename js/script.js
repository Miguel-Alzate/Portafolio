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


document.addEventListener('DOMContentLoaded', function() {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvasLinks = offcanvasElement.querySelectorAll('.nav-link[href^="#"]');
    
    offcanvasLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Hide the offcanvas
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section with a slight delay to ensure offcanvas is closed
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
});