document.addEventListener('DOMContentLoaded', function() {
    const modalBtns = document.querySelectorAll('.modal-btn');
    modalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            const closeBtn = modal.querySelector('.close-btn');
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        });
    });
});
