const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formResponse = document.getElementById('form-response');
const navlinks = document.querySelectorAll('.navbar a[href^="#"]'); 
const yearSpan = document.getElementById('year');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (name === '' || email === '' || message === ''){
      formResponse.textContent='Please fill in all fields.';
      formResponse.style.color = "#c9184a";
      return;
      };
    if (!email.includes('@')) {
      formResponse.textContent='Please enter a valid email address.';
      formResponse.style.color = "#c9184a"
      return;
    };
    if (formResponse){
      formResponse.textContent = 'Form submitted successfully!';
      formResponse.style.color = '#2b9348';
    };

    form.reset();
  });

  navlinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  };