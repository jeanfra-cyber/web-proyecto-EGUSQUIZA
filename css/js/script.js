// Botón para ir arriba
document.addEventListener('DOMContentLoaded', function() {
    const btnTop = document.getElementById('btnTop');
    
    // Ocultar el botón al inicio
    btnTop.style.display = 'none';
    
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    });
    
    // Función para ir arriba al hacer clic
    btnTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});