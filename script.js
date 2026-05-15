// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, 500);
});

// Scroll Progress Bar & Back to Top & Sticky Nav
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTop = document.getElementById('back-to-top');
  const navbar = document.getElementById('navbar');
  
  // Scroll Progress
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercentage + '%';
  
  // Back to top visibility
  if (scrollTop > 500) {
    backToTop.classList.remove('opacity-0', 'pointer-events-none');
    backToTop.classList.add('opacity-100', 'pointer-events-auto');
  } else {
    backToTop.classList.add('opacity-0', 'pointer-events-none');
    backToTop.classList.remove('opacity-100', 'pointer-events-auto');
  }
  
  // Sticky Nav background
  if (scrollTop > 50) {
    navbar.classList.add('shadow-lg', 'border-b', 'border-white/10');
  } else {
    navbar.classList.remove('shadow-lg', 'border-b', 'border-white/10');
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Back to Top functionality
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterBtns.length > 0 && portfolioItems.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-black');
        b.classList.add('text-white', 'border-white/20');
      });
      // Add active class to clicked button
      btn.classList.remove('text-white', 'border-white/20');
      btn.classList.add('bg-primary', 'text-black');
      
      const filterValue = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}
// FAQ Accordion functionality
const faqBtns = document.querySelectorAll('.faq-btn');

if (faqBtns.length > 0) {
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      
      // Optional: Close all other open FAQs for a cleaner, premium feel
      document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans !== answer) {
          ans.style.maxHeight = null;
          const otherIcon = ans.previousElementSibling.querySelector('.faq-icon');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
      
      // Toggle current FAQ
      if (answer.style.maxHeight) {
        // If open, close it
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
      } else {
        // If closed, open it (calculate exact height needed)
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = 'rotate(45deg)'; // Turns the + into an X
      }
    });
  });
}
