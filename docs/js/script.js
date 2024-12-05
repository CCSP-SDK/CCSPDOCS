document.addEventListener("DOMContentLoaded", function() {
    // Find the links for IRNIYANTRAC Messages and Payload Details
    const irniyantracLink = document.querySelector("nav a[href$='irniyantracMsgs/index.md']");
    const payloadLink = document.querySelector("nav a[href$='wgpsMessages.md']");
    
    // Add click event listener to IRNIYANTRAC Messages
    irniyantracLink.addEventListener('click', function(event) {
      event.preventDefault();  // Prevent the default behavior (navigating)
      
      // Toggle the active class for IRNIYANTRAC Messages
      irniyantracLink.classList.toggle('active');
      
      // Show or hide the Payload Details section
      if (irniyantracLink.classList.contains('active')) {
        payloadLink.style.display = 'block';  // Show the Payload Details
      } else {
        payloadLink.style.display = 'none';  // Hide the Payload Details
      }
    });
  });
  