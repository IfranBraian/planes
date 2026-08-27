// Botones de contacto / demo
document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.querySelector('.btn-contact');
  const demoBtn = document.querySelector('.btn-demo');

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      // Reemplazá esta URL por tu link de contacto real (WhatsApp, mail, formulario, etc.)
      window.location.href = 'mailto:contacto@tudominio.com';
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      // Reemplazá esta URL por tu link real de agenda / WhatsApp
      window.location.href = 'https://wa.me/5490000000000';
    });
  }
});
