// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Photo Modal functionality
const modal = document.getElementById('photoModal');
const modalText = document.getElementById('modalText');
const modalClose = document.querySelector('.photo-modal-close');

// Open modal on info button click
document.querySelectorAll('.hobby-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const hobbyItem = btn.closest('.hobby-item');
        const description = hobbyItem.dataset.description;
        modalText.textContent = description;
        modal.classList.add('active');
    });
});

// Close modal on close button
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Simple fade-in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => {
    el.style.opacity = '0.95';
    observer.observe(el);
});


