// scripts.js
// Función para abrir el sidebar
function openMenu() {
    document.getElementById('sidebar').style.width = '250px';
}

// Función para cerrar el sidebar
function closeMenu() {
    document.getElementById('sidebar').style.width = '0';
}


// Event listeners para el botón de abrir y el de cerrar el menú
document.querySelector('.menu-btn').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);


const track = document.querySelector('.carousel-track');
        const items = Array.from(track.children);
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;
    
        const updateCarousel = (index) => {
            const width = items[index].getBoundingClientRect().width;
            track.style.transform = 'translateX(-' + (width * index) + 'px)';
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        };
    
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel(currentIndex);
        });
    
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel(currentIndex);
        });
    
        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel(currentIndex);
            });
        });
    
        // Auto-slide feature
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel(currentIndex);
        }, 5000); 

