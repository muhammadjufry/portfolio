/* Add functionality to navbar menu toggle and nav menu list start here */
const menuToggle = document.querySelector('.menuToggle');
const menuToggleBar = document.querySelector('.bars');
const menuToggleClose = document.querySelector('.cross');
const navMenuLists = document.querySelector('nav ul');
const navLists = document.querySelectorAll('nav ul li a');
const goTop = document.querySelector('.goTop');

menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('scrollOff');
  menuToggleBar.classList.toggle('active');
  menuToggleClose.classList.toggle('active');
  navMenuLists.classList.toggle('active');
});

setInterval(() => {
  if (window.innerWidth > 992) {
    document.body.classList.remove('scrollOff');
  } else if (
    window.innerWidth < 992 &&
    navMenuLists.classList.value.split(' ').includes('active')
  ) {
    document.body.classList.add('scrollOff');
  }
}, 0);

navLists.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    let destination = navLink.hash;
    let elementDestination = document.querySelector(destination);
    window.scroll({
      top: elementDestination.offsetTop - 180,
      behavior: 'smooth',
    });
    document.body.classList.remove('scrollOff');
    menuToggleBar.classList.add('active');
    menuToggleClose.classList.remove('active');
    navMenuLists.classList.remove('active');
    e.preventDefault();
  });
});

// Add functionality to navbar menu toggle and nav menu list end here

// Start making type writer effect here
const textDisplay = document.getElementById('text');
const phrases = [
  'A Web Developer based in Bali',
  'Learning and solving coding challenges at CSX',
  'Learning the Odin Project curriculum',
];
let i = 0,
  j = 0;
let currentPhrase = [];
let isDeleting = false,
  isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.textContent = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.textContent = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.textContent = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200);
  const time = isEnd ? 500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
// End making type writer effect here
