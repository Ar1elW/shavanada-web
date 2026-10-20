(() => {
    'use strict';

    const HIDDEN_PASSWORD = '********';
    const SHOWN_PASSWORD = 'password';

    document.addEventListener('DOMContentLoaded', initPasswordToggle);

    function initPasswordToggle() {
        const eyeButton = document.querySelector('.eye_button');
        const passwordValue = document.querySelector('#password_value');

        eyeButton.addEventListener('click', () => {
            const isHidden = passwordValue.textContent === HIDDEN_PASSWORD;
            passwordValue.textContent = isHidden ? SHOWN_PASSWORD : HIDDEN_PASSWORD;
        });
    }
})();
