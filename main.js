// Add JS here// Aquí puedes añadir cualquier funcionalidad adicional con JavaScript

// Ejemplo: Smooth scroll para los enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// Seleccionamos el mini-header y el header principal
const miniHeader = document.querySelector('.mini-header');
const header = document.querySelector('header');

// Guardamos la altura del header principal
const headerHeight = header.offsetHeight;

// Función para manejar el desplazamiento
function handleScroll() {
    if (window.pageYOffset > headerHeight) {
        miniHeader.style.transform = 'translateY(0)';
    } else {
        miniHeader.style.transform = 'translateY(-100%)';
    }
}

// Evento para escuchar el desplazamiento
window.addEventListener('scroll', handleScroll);

// Manejar el desplazamiento suave con offset
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = header.offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
