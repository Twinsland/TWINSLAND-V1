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

    // script.js

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById("openMarketplaceBtn");
    const closeBtn = document.getElementById("closeMarketplaceBtn");
    const panel = document.getElementById("marketplacePanel");
  
    // Lorsque le bouton Marketplace est cliqué, on affiche le panneau
    openBtn.addEventListener("click", () => {
      panel.classList.remove("hidden");
      panel.classList.add("visible");
    });
  
    // Lorsque le bouton de fermeture est cliqué, on cache le panneau
    closeBtn.addEventListener("click", () => {
      panel.classList.remove("visible");
      setTimeout(() => panel.classList.add("hidden"), 400); // Cache après l'animation
    });
  });