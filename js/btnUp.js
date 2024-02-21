document.addEventListener('DOMContentLoaded', function() {
    var btnUp = document.getElementById('btnUp');

    // Показываем кнопку "наверх", когда прокручена страница на определенную высоту
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            btnUp.style.display = 'block';
        } else {
            btnUp.style.display = 'none';
        }
    });

    // Прокручиваем страницу вверх при нажатии на кнопку "наверх"
    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});