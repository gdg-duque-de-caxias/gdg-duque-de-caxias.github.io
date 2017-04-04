/*if ('serviceWorker' in navigator) {
   navigator.serviceWorker
            .register('./../sw.js')
            .then(function() { });
 }*/

 var inputs = document.getElementsByClassName('input')
    Array.prototype.forEach.call(inputs, function (item) {
      item.addEventListener('focus', function () {
        if (item.value === '') {
          var id = item.id
          var selector = '.label[for="'+ id + '"]'
          var label = document.querySelector(selector)
          item.classList.toggle('has-focus')
          label.classList.toggle('is-active')
        }
      })
      item.addEventListener('blur', function () {
        if (item.value === '') {
          var id = item.id
          var selector = '.label[for="'+ id + '"]'
          var label = document.querySelector(selector)
          item.classList.toggle('has-focus')
          label.classList.toggle('is-active')
        }
      })
    })