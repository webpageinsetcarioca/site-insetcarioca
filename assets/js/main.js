/* ==========================================================================
   INSETCARIOCA - JAVASCRIPT PRINCIPAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      if (header) header.classList.add('sticky');
      if (backToTop) backToTop.classList.add('active');
    } else {
      if (header && !document.body.classList.contains('page-internal')) {
        header.classList.remove('sticky');
      }
      if (backToTop) backToTop.classList.remove('active');
    }
  });

  // Back to top click
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Mobile Menu Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Mobile submenu accordions
  const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');
  mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = trigger.closest('.mobile-nav-item');
      const submenu = parent.querySelector('.mobile-submenu');
      const arrow = trigger.querySelector('i');
      
      if (submenu) {
        submenu.classList.toggle('open');
        if (arrow) {
          arrow.classList.toggle('fa-angle-up');
          arrow.classList.toggle('fa-angle-down');
        }
      }
    });
  });

  // 3. Contact Form Submission -> WhatsApp Link Builder
  const contactForms = document.querySelectorAll('.contact-form-handler');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nomeInput = form.querySelector('[name="nome"]');
      const emailInput = form.querySelector('[name="email"]');
      const telInput = form.querySelector('[name="telefone"]');
      const servicoInput = form.querySelector('[name="servico"]');
      const msgInput = form.querySelector('[name="mensagem"]');

      const nome = nomeInput ? nomeInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const tel = telInput ? telInput.value.trim() : '';
      const servico = servicoInput ? servicoInput.value : 'Orçamento Geral';
      const msg = msgInput ? msgInput.value.trim() : '';

      let text = `*Solicitação de Orçamento - InsetCarioca*\n\n`;
      text += `*Nome:* ${nome}\n`;
      if (tel) text += `*Telefone:* ${tel}\n`;
      if (email) text += `*E-mail:* ${email}\n`;
      if (servico) text += `*Serviço:* ${servico}\n`;
      if (msg) text += `*Mensagem:* ${msg}\n`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5521964235463?text=${encodedText}`;

      // Show temporary notification before redirecting
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Enviando para o WhatsApp...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
          submitBtn.innerHTML = 'Mensagem Enviada!';
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();
          }, 3000);
        }, 800);
      } else {
        window.open(whatsappUrl, '_blank');
      }
    });
  });
});

