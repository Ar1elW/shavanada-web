(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initVote();
        initToiletButton();
        initSendButton();
    });

    function initVote() {
        const buttons = document.querySelectorAll('.vote_button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                buttons.forEach((other) => other.classList.remove('is-selected'));
                button.classList.add('is-selected');
                pop(button);
            });
        });
    }

    function initToiletButton() {
        const toiletButton = document.querySelector('.toilet_button');

        toiletButton.addEventListener('click', () => {
            toiletButton.classList.toggle('is-selected');
            pop(toiletButton);
        });
    }

    function initSendButton() {
        const sendButton = document.querySelector('.send_button');
        const textarea = document.querySelector('.review_textarea');

        sendButton.addEventListener('click', () => {
            if (textarea.value.trim() === '') {
                textarea.focus();
                pop(textarea);
                return;
            }

            location.href = 'place.html';
        });
    }
})();
