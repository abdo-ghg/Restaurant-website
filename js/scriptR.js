document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  // Review Form Submission
  document.getElementById("reviewForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("reviewerName").value.trim();
    const comment = document.getElementById("reviewComment").value.trim();
    const rating = document.getElementById("rating").value;
  
    if (name && comment && rating) {
      const reviewBox = document.createElement("div");
      reviewBox.classList.add("review");
  
      reviewBox.innerHTML = `
        <h4>${name} <small>(${rating}⭐)</small></h4>
        <p>${comment}</p>
      `;
  
      document.getElementById("reviewsContainer").prepend(reviewBox);
      this.reset();
    } else {
      alert("Please complete all review fields.");
    }
  });
  