let splash_screen = document.querySelector('.splash');
splash_screen.addEventListener('mouseover', () =>{
    splash_screen.style.opacity = 0;
    setTimeout(() => {
        splash_screen.classList.add('hidden')
 }, 610)
});