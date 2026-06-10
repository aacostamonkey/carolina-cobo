function toggleFormat(row) {
  const detail = row.querySelector('.format-detail');
  const toggle = row.querySelector('.format-toggle');
  const isOpen = detail.classList.contains('visible');
  // close all
  document.querySelectorAll('.format-detail').forEach(d => d.classList.remove('visible'));
  document.querySelectorAll('.format-toggle').forEach(t => { t.textContent = '+'; t.style.transform = '' });
  document.querySelectorAll('.format-row').forEach(r => r.classList.remove('open'));
  if (!isOpen) {
    detail.classList.add('visible');
    toggle.textContent = '×';
    row.classList.add('open');
  }
}

function toggleMenu(btn) {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';
  if (isOpen) {
    links.style.display = '';
    btn.textContent = '☰';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'var(--ivory)';
    links.style.padding = '24px 24px';
    links.style.borderBottom = '1px solid var(--champagne)';
    links.style.gap = '20px';
    btn.textContent = '×';
  }
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
    }
  });
});
