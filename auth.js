(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', initAuthForm);

    function initAuthForm() {
        const form = document.querySelector('.auth_sheet');
        if (!form) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            location.href = form.dataset.next;
        });
    }
})();
