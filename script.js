const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const enquiryForm = document.getElementById('enquiryForm');
const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const name = (formData.get('name') || '').toString().trim();
    const mobile = (formData.get('mobile') || '').toString().trim();
    const district = (formData.get('district') || '').toString().trim();
    const service = (formData.get('service') || '').toString().trim();

    const message = [
      'Hello Documentation Centre,',
      '',
      'I am interested in your services.',
      `Name: ${name}`,
      `Mobile Number: ${mobile}`,
      `District: ${district}`,
      `Service Required: ${service}`,
      '',
      'Please contact me with guidance.'
    ].join('\n');

    const whatsappUrl = `https://wa.me/918002224590?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
