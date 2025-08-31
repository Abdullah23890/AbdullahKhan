// bottom to top button 

   window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


     // contact

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

 function sendMessage() {
      // Clear input fields
      document.getElementById("floatingInput").value = "";
      document.getElementById("floatingtext").value = "";
      document.getElementById("floatingTextarea").value = "";

      // Show success message
      const alertDiv = document.getElementById("alertMessage");
      alertDiv.style.display = "block";

      // Optionally hide the message after few seconds
      setTimeout(() => {
        alertDiv.style.display = "none";
      }, 4000); // 4 seconds
    }


    // Fade-in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: only animate once
    }
  });
}, {
  threshold: 0.3 // element should be 30% visible
});

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});
