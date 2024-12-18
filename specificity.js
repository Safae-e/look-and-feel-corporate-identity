
let button = document.querySelector('button');
let navigation = document.querySelector('nav');

button.addEventListener("click", function(){
  navigation.classList.toggle('show-menu');
})

let div = document.querySelector('.play')
let playbutton = document.querySelector('playbutton')
playbutton.addEventListener('click', paused)

function paused() {
    div.classList.toggle('paused')
    console.log('doet het')
  }