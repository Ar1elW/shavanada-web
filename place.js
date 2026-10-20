(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', initReviewLike);

    function initReviewLike() {
        const likeButton = document.querySelector('.review_like');

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('is-liked');
            pop(likeButton);
        });
    }
})();
