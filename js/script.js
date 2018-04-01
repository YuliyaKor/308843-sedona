'use strict';
(function () {
  var hotelSearchButton = document.querySelector('.hotel-search-button');
  var searchForm = document.querySelector('.search-form');

  hotelSearchButton.addEventListener('click', function () {
    searchForm.classList.toggle('visually-hidden');
    searchForm.classList.toggle('visually');
  });
})();
