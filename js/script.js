'use strict';
(function () {
  var hotelSearchButton = document.querySelector('.hotel-search-button');
  var searchForm = document.querySelector('.search-form');
  var form = searchForm.querySelector('.hotel-search-form');
  var dateStart = form.querySelector('[name=start]');
  var dateFinish = form.querySelector('[name=finish]');
  var adults = form.querySelector('[name=adults]');
  var children = form.querySelector('[name=children]');
  var button = searchForm.querySelector('.hotel-search-form-button');

  hotelSearchButton.addEventListener('click', function () {
    searchForm.classList.toggle('visually-hidden');
    searchForm.classList.toggle('visually');
  });

  form.addEventListener("submit", function (evt) {
    if (!dateStart.value || !dateFinish.value || !adults.value || !children.value) {
      evt.preventDefault();
      console.log("Необходимо заполнить все поля");
      alert("Необходимо заполнить все поля");
    }
  });
})();
