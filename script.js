// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cities = document.querySelectorAll('.city');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const closePopupBtn = document.getElementById('close-popup');

    cities.forEach(city => {
        city.addEventListener('click', () => {
            const name = city.getAttribute('data-name');
            const description = city.getAttribute('data-description');

            popupTitle.textContent = name;
            popupDescription.textContent = description;
            popup.classList.remove('hidden');
        });
    });

    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Fermer le popup si on clique en dehors
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
