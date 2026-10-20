(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', initSearch);

    function initSearch() {
        const input = document.querySelector('#search_input');
        const items = document.querySelectorAll('.search_item');

        input.addEventListener('input', () => {
            const query = input.value.toLowerCase();

            items.forEach((item) => {
                const matches = item.textContent.toLowerCase().includes(query);
                item.classList.toggle('is-hidden', !matches);
            });
        });
    }
})();
