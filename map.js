(() => {
    'use strict';

    const PLACES = {
        don: {
            name: 'Don Kebab',
            closesAt: '21:30',
            distance: '~410 м',
            negativeReviews: 4
        },
        papa: {
            name: 'Papa Doner',
            closesAt: '22:00',
            distance: '~750 м',
            negativeReviews: 11
        }
    };

    document.addEventListener('DOMContentLoaded', initMapPins);

    function initMapPins() {
        const pins = document.querySelectorAll('.map_pin');

        pins.forEach((pin) => {
            pin.addEventListener('click', () => {
                selectPin(pin, pins);
                showPlaceCard(PLACES[pin.dataset.place]);
            });
        });
    }

    function selectPin(selectedPin, allPins) {
        allPins.forEach((pin) => pin.classList.remove('is-selected'));
        selectedPin.classList.add('is-selected');
    }

    function showPlaceCard(place) {
        const card = document.querySelector('.place_card');

        card.querySelector('.place_card_name').textContent = place.name;
        card.querySelector('.place_card_status small').textContent = 'Закр. в ' + place.closesAt;
        card.querySelector('.place_card_distance').textContent = 'Через ' + place.distance;
        card.querySelector('.place_card_negative b').textContent = place.negativeReviews;

        restartAnimation(card);
    }

    function restartAnimation(element) {
        element.style.animation = 'none';
        void element.offsetWidth;
        element.style.animation = '';
    }
})();
