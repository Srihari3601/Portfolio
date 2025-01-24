document.querySelectorAll('.corner-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.nextElementSibling;

      // Toggle visibility
      if (section.style.display === 'block') {
        section.style.display = 'none';
      } else {
        document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none'); // Hide all sections
        section.style.display = 'block';
      }
    });
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.corner-link')) {
      document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
      });
    }
  });

  // function createComet() {
  //   const comet = document.createElement('div');
  //   comet.classList.add('comet');
  
  //   // Random start position
  //   comet.style.top = Math.random() * window.innerHeight + 'px';
  //   comet.style.left = Math.random() * window.innerWidth + 'px';
  
  //   document.body.appendChild(comet);
  
  //   // Random animation duration
  //   const duration = Math.random() * 3 + 2;
  
  //   // Apply animation with random duration and direction
  //   comet.style.animation = `comet-move ${duration}s linear forwards`;
  
  //   // Remove comet after animation ends
  //   comet.addEventListener('animationend', () => {
  //     comet.remove();
  //   });
  // }
  
  // function generateComets() {
  //   setInterval(createComet, 300); // Adjust interval for more/less frequent comets
  // }
  // document.addEventListener('DOMContentLoaded', generateComets);

  document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('body'); // Replace with your actual main content selector
  
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      mainContent.classList.add('fade-in'); // Add fade-in class to your content
    }, 3350); // Adjust the timeout as needed
  });

const roles = ["<Frontend Developer/>", "<Software Engineer/>", "<Web Developer/>"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing
const deletingSpeed = 100; // Speed of deleting
const delayBetweenRoles = 2000; // Delay between role changes

const typewriterElement = document.getElementById("typewriter-text");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typewriterElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(deleteRole, delayBetweenRoles);
  }
}

function deleteRole() {
  if (charIndex > 0) {
    typewriterElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteRole, deletingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
    setTimeout(typeRole, typingSpeed);
  }
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});