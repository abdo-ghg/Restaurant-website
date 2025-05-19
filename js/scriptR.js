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

document.getElementById("reviewForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("reviewerName").value.trim();
  const comment = document.getElementById("reviewComment").value.trim();
  const rating = document.getElementById("rating").value;

  if (name && comment && rating) {
    const newReview = {
      name,
      comment,
      rating
    };

    // نحصل على الريفيوهات القديمة (أو مصفوفة فاضية لو مفيش)
    const reviews = JSON.parse(localStorage.getItem("itemReviews")) || [];

    // نضيف الريفيو الجديد في البداية
    reviews.unshift(newReview);

    // نحدث localStorage
    localStorage.setItem("itemReviews", JSON.stringify(reviews));

    // نعرض الريفيو الجديد في الصفحة
    displayReview(newReview);

    // نعيد تعيين الفورم
    this.reset();
  } else {
    alert("Please complete all review fields.");
  }
});

function displayReview(review) {
  const reviewBox = document.createElement("div");
  reviewBox.classList.add("review");

  reviewBox.innerHTML = `
    <h4>${review.name} <small>(${review.rating}⭐)</small></h4>
    <p>${review.comment}</p>
  `;

  document.getElementById("reviewsContainer").prepend(reviewBox);
}

document.addEventListener("DOMContentLoaded", function() {
  const savedReviews = JSON.parse(localStorage.getItem("itemReviews")) || [];

  savedReviews.forEach(review => {
    displayReview(review);
  });
});
