const hambuger = document.getElementById('hambuger-menu');
const overlay = document.getElementById('overlay');
const popUpSidenav = document.getElementById('pop-up-sidenav');
const header = document.getElementById('nav');
const requestQuoteBtn = document.querySelector('.nav-cta1'); // Select the "Request a Quote" button
const requestQuoteSection = document.getElementById('request-a-quote');

// Toggle side navigation
const toggleSidenav = (show) => {
  popUpSidenav.style.display = show ? 'flex' : 'none';
  overlay.style.display = show ? 'inline-block' : 'none';
};

hambuger.addEventListener('click', () => toggleSidenav(true));
overlay.addEventListener('click', () => toggleSidenav(false));

// Close sidenav when clicking a link inside it
popUpSidenav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toggleSidenav(false);
  }
});

// Handle "Request a Quote" button click
requestQuoteBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default button behavior
  requestQuoteSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
  toggleSidenav(false); // Hide sidenav and overlay
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 30);
});

// Modal handling
const modals = {
  privacy: document.getElementById('privacy-modal'),
  terms: document.getElementById('terms-modal'),
};

const openModal = (modal) => (modals[modal].style.display = 'flex');
const closeModal = (modal) => (modals[modal].style.display = 'none');

document.getElementById('privacy-link').addEventListener('click', () => openModal('privacy'));
document.getElementById('terms-link').addEventListener('click', () => openModal('terms'));

document.getElementById('close-modal').addEventListener('click', () => closeModal('privacy'));
document.getElementById('close-modal2').addEventListener('click', () => closeModal('terms'));

// Handle agreement buttons
document.getElementById('privacy-agree-btn').addEventListener('click', () => {
  localStorage.setItem('privacyAccepted', 'true');
  closeModal('privacy');
});

document.getElementById('terms-agree-btn').addEventListener('click', () => {
  localStorage.setItem('termsAccepted', 'true');
  closeModal('terms');
});


function toggleFAQ(id) {
    const answer = document.getElementById(`answer-${id}`);
    const iconPlus = document.getElementById(`icon-plus-${id}`);
    const iconMinus = document.getElementById(`icon-minus-${id}`);

    if (answer.classList.contains('active')) {
        // Collapse the answer
        answer.style.height = '0px';
        setTimeout(() => {
            answer.classList.remove('active');
            answer.style.display = "none"; // Hide after animation
        }, 300);

        iconPlus.classList.remove('hidden');
        iconMinus.classList.add('hidden');
    } else {
        // Expand the answer
        answer.style.display = "block"; // Make it visible before measuring height
        const scrollHeight = answer.scrollHeight + "px"; // Get full height
        answer.style.height = scrollHeight;
        answer.classList.add('active');

        iconPlus.classList.add('hidden');
        iconMinus.classList.remove('hidden');
    }
}