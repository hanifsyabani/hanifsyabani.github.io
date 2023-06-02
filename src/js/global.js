const navHam =  document.querySelector('.menu');


document.querySelector('#hamburger').onclick = () =>{
  navHam.classList.toggle('active') 
};  

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target)&& !navHam.contains(e.target)){
    navHam.classList.remove('active')
  }
})