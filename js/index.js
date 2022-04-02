window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active');
    });

    document.querySelectorAll('.work-steps__link').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
      });
    });

    document.querySelectorAll('.acardion__main__block').forEach(function(el) {
        el.addEventListener('click', function() {
            el.parentNode.classList.toggle('is--active');
        });
    });

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },

    /* effect: 'cube' */
  });
