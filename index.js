(function($) {






    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
                slide.classList.remove("inactive");
            } else {
                slide.classList.remove("active");
                slide.classList.add("inactive");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Intervalo para cambiar automáticamente de slide cada 5 segundos (5000 milisegundos)
    setInterval(nextSlide, 5000);

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);

    // Eventos de clic para las flechas
    document.querySelector(".arrow-left").addEventListener("click", prevSlide);
    document.querySelector(".arrow-right").addEventListener("click", nextSlide);
});