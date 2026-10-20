(() => {
    'use strict';

    function pop(element) {
        element.classList.remove('is-pop');
        void element.offsetWidth;
        element.classList.add('is-pop');
    }

    function initLikeButtons() {
        const buttons = document.querySelectorAll('.favorite_button, .like_button');

        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                button.classList.toggle('is-off');
                pop(button);
            });
        });
    }

    window.pop = pop;
    document.addEventListener('DOMContentLoaded', initLikeButtons);
})();
