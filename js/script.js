// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.md\\:hidden');
  const mobileMenu = document.querySelector('nav ul');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Package category filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const packageCards = document.querySelectorAll('.package-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
      this.classList.add('bg-blue-600', 'text-white');
      
      // Filter packages
      packageCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Live Chat functions
function showLiveChat() {
  document.getElementById('liveChatModal').style.display = 'block';
}

function hideLiveChat() {
  document.getElementById('liveChatModal').style.display = 'none';
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
  this.reset();
});
