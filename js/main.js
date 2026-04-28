// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Insertar Header y Navegación
    const headerContainer = document.querySelector('#header-dinamico');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header>
                <h1 class="header__titulo">JEAN FRANCO <span>EGUSQUIZA</span></h1>
            </header>
            <div class="barra-navegacion">
                <nav class="enlaces contenedor">
                    <a href="index.html">Inicio</a>
                    <a href="sobre-mi.html">Sobre Mí</a>
                    <a href="clientes.html">Clientes</a>
                    <a href="contactos.html">Contacto</a>
                </nav>
            </div>
        `;
        
        // Resaltar enlace activo
        const links = document.querySelectorAll('.enlaces a');
        const rutaActual = window.location.pathname.split("/").pop() || 'index.html';
        links.forEach(link => {
            if (link.getAttribute('href') === rutaActual) {
                link.style.color = '#FFD700'; // Color dorado para la página activa
                link.style.fontWeight = 'bold';
            }
        });
    }

    // Insertar Footer
    const footerContainer = document.querySelector('#footer-dinamico');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="pie-pagina">
                <p>SYSTEM_STATUS: ONLINE // JEAN FRANCO EGUSQUIZA // 2026</p>
            </footer>
        `;
    }
});