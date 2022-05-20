const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

const navLinks = document.querySelectorAll('.nav--link');
for(i=0;i<navLinks.length;i++){
  var navLink = navLinks[i];
  navLink.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
}
