$(function () {
			$(".typed").typed({
				strings: ["Choose Us", "Choose Us", "Choose Us"],
				typeSpeed: 30,
				startDelay: 1200,
				backSpeed: 20,
				backDelay: 500,
				loop: true,
				loopCount: 5,
				showCursor: false, // Disable Typed.js cursor
				contentType: 'html'
			});
		});

		// Function to animate one counter
function countUp(element, target, duration = 2000) {
  let start = 0;
  let increment = target / (duration / 10);
  let interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.innerText = target;
      clearInterval(interval);
    } else {
      element.innerText = Math.floor(start);
    }
  }, 10);
}

// Observe all elements with .counter
// Observe all elements with .counter
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains('counted')) {
      const target = parseInt(el.getAttribute('data-fetch'));
      countUp(el, target);
      el.classList.add('counted'); // prevent re-animation
    }
  });
}, { threshold: 0.5 });

// Attach observer to each counter
counters.forEach(counter => {
  observer.observe(counter);
});

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

  var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Small devices
    },
    745: {
      slidesPerView: 2, // Medium devices
    },
    1024: {
      slidesPerView: 3, // Large devices
    }
  }
});



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
