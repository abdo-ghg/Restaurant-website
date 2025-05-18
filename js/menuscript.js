const menuData = {
  desserts: [
    {
      name: "Chocolate Cake",
      price: "$5.99",
      description: "Rich chocolate layered cake",
      fullDescription: "A decadent chocolate cake with three layers of moist chocolate sponge, filled with chocolate ganache and covered in dark chocolate shavings.",
      image: "images/chocolate-cake.jpg"
    },
    {
      name: "New York Cheesecake",
      price: "$6.50",
      description: "Classic creamy cheesecake",
      fullDescription: "Traditional New York-style cheesecake with graham cracker crust, topped with strawberry compote.",
      image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Tiramisu",
      price: "$5.25",
      description: "Italian coffee-flavored dessert",
      fullDescription: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
      image:"images/tiramisu.jpg"
    }
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      price: "$2.50",
      description: "Refreshing lemon drink",
      fullDescription: "Homemade lemonade with fresh-squeezed lemons, organic cane sugar, and mint leaves.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Iced Coffee",
      price: "$3.75",
      description: "Cold brew with milk",
      fullDescription: "Slow-steeped cold brew coffee served with vanilla syrup and your choice of milk.",
      image: "https://images.unsplash.com/photo-1538582709238-5c0f5189dfd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Mango Smoothie",
      price: "$4.25",
      description: "Tropical fruit blend",
      fullDescription: "Fresh mango, pineapple, and Greek yogurt blended with ice and lime juice.",
      image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ],
  pizza: [
    {
      name: "Pepperoni Pizza",
      price: "$14.99",
      description: "Classic pepperoni",
      fullDescription: "Hand-tossed dough with tomato sauce, mozzarella, and extra pepperoni.",
      image: "https://images.unsplash.com/photo-1601924638867-3ec2a457b24a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Margherita",
      price: "$13.50",
      description: "Fresh basil and mozzarella",
      fullDescription: "San Marzano tomatoes, fresh basil, buffalo mozzarella, and extra virgin olive oil.",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "BBQ Chicken",
      price: "$15.75",
      description: "Smoky BBQ flavor",
      fullDescription: "Grilled chicken, red onions, cilantro, and our house-made BBQ sauce.",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ],
  italian: [
    {
      name: "Spaghetti Carbonara",
      price: "$13.99",
      description: "Creamy pasta",
      fullDescription: "Traditional Roman dish with guanciale, pecorino cheese, and black pepper.",
      image: "https://images.unsplash.com/photo-1603133872878-684f07f4e6b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Lasagna",
      price: "$12.99",
      description: "Layered pasta dish",
      fullDescription: "Homemade lasagna with beef ragù, béchamel sauce, and parmesan cheese.",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Risotto Milanese",
      price: "$14.50",
      description: "Saffron risotto",
      fullDescription: "Creamy Arborio rice cooked with saffron, white wine, and parmesan.",
      image: "https://images.unsplash.com/photo-1608500218866-3086a7e5cf1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ],
  grilled: [
    {
      name: "Grilled Salmon",
      price: "$16.99",
      description: "Fresh Atlantic salmon",
      fullDescription: "Grilled salmon fillet with lemon butter sauce, served with seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "BBQ Ribs",
      price: "$15.50",
      description: "Fall-off-the-bone ribs",
      fullDescription: "Slow-cooked pork ribs glazed with house-made BBQ sauce.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Grilled Vegetables",
      price: "$11.99",
      description: "Seasonal grilled veggies",
      fullDescription: "Zucchini, eggplant, bell peppers, and mushrooms with balsamic glaze.",
      image: "https://images.unsplash.com/photo-1598514983318-2f64f8d4796b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    }
  ]
};

function getAllItems() {
  return Object.entries(menuData).flatMap(([category, items]) =>
      items.map(item => ({ ...item, category }))
  );
}

// Update the active button when a category is clicked
function updateActiveButton(category) {
  // Remove active class from all buttons
  document.querySelectorAll('.categories button').forEach(button => {
    button.classList.remove('active');
  });

  // Add active class to the clicked button
  const buttons = document.querySelectorAll('.categories button');
  for (let button of buttons) {
    if (button.textContent.toLowerCase().includes(category.toLowerCase()) ||
        (category === 'all' && button.textContent.includes('All'))) {
      button.classList.add('active');
      break;
    }
  }
}

// Render menu items
function showCategory(category) {
  const container = document.getElementById("items");
  container.innerHTML = "";

  updateActiveButton(category);

  const items = category === "all"
      ? getAllItems()
      : (menuData[category] || []).map(item => ({ ...item, category }));

  if (items.length === 0) {
    container.innerHTML = '<div class="no-items">No items found in this category.</div>';
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='images/default-food.jpg'">
      <div class="item-content">
        <h3>${item.name}</h3>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>${item.description}</p>
        <div class="qty">
          <button onclick="changeQty(this, -1)">−</button>
          <span>1</span>
          <button onclick="changeQty(this, 1)">+</button>
        </div>
        <button class="view-details-btn" onclick="viewDetails('${item.category}', '${item.name}')">View Details</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Handle +/− buttons
function changeQty(button, delta) {
  const span = button.parentElement.querySelector("span");
  let count = parseInt(span.textContent);
  count = Math.max(1, count + delta);
  span.textContent = count;
}

function searchFood() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  if (!keyword.trim()) {
    showCategory("all");
    return;
  }

  const container = document.getElementById("items");
  container.innerHTML = "";

  const allItems = getAllItems();

  const filteredItems = allItems.filter(item =>
      item.name.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.fullDescription.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
  );

  if (filteredItems.length === 0) {
    container.innerHTML = '<div class="no-items">No matching items found.</div>';
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='images/default-food.jpg'">
      <div class="item-content">
        <h3>${item.name}</h3>
        <p><strong>Price:</strong> ${item.price}</p>
        <p>${item.description}</p>
        <div class="qty">
          <button onclick="changeQty(this, -1)">−</button>
          <span>1</span>
          <button onclick="changeQty(this, 1)">+</button>
        </div>
        <button class="view-details-btn" onclick="viewDetails('${item.category}', '${item.name}')">View Details</button>
      </div>
    `;
    container.appendChild(card);
  });

  // No need to update active button for search results
}

// Save item to localStorage and navigate to details
function viewDetails(category, name) {
  const allItems = menuData[category] || [];
  const item = allItems.find(i => i.name === name);

  if (item) {
    localStorage.setItem("selectedItem", JSON.stringify({...item, category}));
    window.location.href = "details.html";
  }
}

// Add event listener for the search input to trigger search on Enter key
document.addEventListener('DOMContentLoaded', function() {
  showCategory("all");

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        searchFood();
      }
    });
  }
});