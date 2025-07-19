// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Contact form fake submit
  document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const messageElement = document.getElementById('form-message');
    if (messageElement) {
      messageElement.classList.remove('hidden');
      setTimeout(() => messageElement.classList.add('hidden'), 5000);
    }
    this.reset();
  });

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('show');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
      }
    });
  });

  // Search Suggestion for "Tujuan" input
  const destinations = [
    "Gili Trawangan", "Senggigi", "Kuta Lombok", "Mandalika", 
    "Sembalun", "Gili Air", "Gili Meno", "Mataram", 
    "Selong Belanak", "Desa Sade", "Pink Beach", "Air Terjun Sendang Gile",
    "Tiu Kelep", "Pantai Mawun", "Taman Narmada"
  ];

  function showSuggestions(val) {
    const list = document.getElementById('suggestion-list');
    if (!list) return;
    
    if (!val.trim()) {
      list.innerHTML = '';
      list.style.display = 'none';
      return;
    }
    
    let filtered = destinations.filter(dest => 
      dest.toLowerCase().includes(val.toLowerCase())
    );
    
    if (filtered.length > 0) {
      list.innerHTML = filtered.map(d => 
        `<li class="px-4 py-2 cursor-pointer hover:bg-blue-100" onclick="selectSuggestion('${d}')">${d}</li>`
      ).join('');
      list.style.display = 'block';
    } else {
      list.innerHTML = '<li class="px-4 py-2 text-gray-400">Tidak ditemukan</li>';
      list.style.display = 'block';
    }
  }

  window.selectSuggestion = function(txt) {
    const input = document.getElementById('tujuan');
    if (input) {
      input.value = txt;
    }
    const list = document.getElementById('suggestion-list');
    if (list) {
      list.style.display = 'none';
    }
  }

  // Initialize search input event
  const searchInput = document.getElementById('tujuan');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      showSuggestions(this.value);
    });
  }

  // Hide suggestion on clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-suggestion')) {
      const list = document.getElementById('suggestion-list');
      if (list) {
        list.style.display = 'none';
      }
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
