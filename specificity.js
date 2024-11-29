
let button = document.querySelector('button');
let navigation = document.querySelector('nav');

button.addEventListener("click", function(){
  navigation.classList.toggle('show-menu');
})