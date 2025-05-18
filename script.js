// Show active category
function setActiveCategory(category) {
  document.querySelectorAll('.categories button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category)) {
      btn.classList.add('active');
    }
  });
}

// Quantity control
function changeQty(btn, delta) {
  const qtySpan = btn.parentElement.querySelector("span");
  let qty = parseInt(qtySpan.textContent);
  qty = Math.max(1, qty + delta);
  qtySpan.textContent = qty;
}

// View details page
function viewDetails(category, index) {
  const selectedItem = category === "all" 
    ? getAllItems()[index]
    : menuData[category][index];
  localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
  window.location.href = "details.html";
}

// Add to cart function
function addToCart() {
  const item = JSON.parse(localStorage.getItem("selectedItem"));
  if (item) {
    // Add your cart logic here
    alert(`${item.name} added to cart!`);
  }
}

// Load details page content
function loadDetailsPage() {
  const item = JSON.parse(localStorage.getItem("selectedItem"));
  const detailsContainer = document.getElementById("details");
  
  if (item) {
    detailsContainer.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="details-img">
      <div class="details-content">
        <h2>${item.name}</h2>
        <p class="details-price">${item.price}</p>
        <p class="details-description">${item.fullDescription}</p>
        <button class="add-to-cart-btn" onclick="addToCart()">
          <span>Add to Cart</span>
        </button>
      </div>
    `;
  }
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("details.html")) {
    loadDetailsPage();
  } else {
    // Show all items initially
    showCategory('all');
    setActiveCategory('all');
  }
});