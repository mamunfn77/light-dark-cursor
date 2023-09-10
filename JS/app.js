let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector('body')
let sunIcon = document.querySelector('.sun')
let heading = document.querySelector ('h2')

function darkMode () {
   body.classList.toggle('darkmode')

   if (body.classList.contains('darkmode')) {
      sunIcon.style.marginTop = '-40px'
      
      heading.innerHTML = 'Dark Mode'

   } else{
      sunIcon.style.marginTop = '0px'

      heading.innerHTML = 'Light Mode'
   }

}

darkModeBtn.addEventListener('click', darkMode)

//CUSTOM MOUSE CURSOR

let cursor = document.querySelector('.cursor')
function customMouseCursor (event) {
   let left = event.clientX;
   let top = event.clientY;

   cursor.style.top = `${top}px`
   cursor.style.left = `${left}px`
}

window.addEventListener('mousemove', customMouseCursor);
