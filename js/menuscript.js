const menuData = {
  desserts: [
    {
      name: "Chocolate Cake",
      price: "$5.99",
      description: "Rich chocolate layered cake",
      fullDescription: "A decadent chocolate cake with three layers of moist chocolate sponge, filled with chocolate ganache and covered in dark chocolate shavings.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
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
      image: "https://images.unsplash.com/photo-1566401200904-9a340a7db470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
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

// Render menu items
function showCategory(category) {
  const container = document.getElementById("items");
  container.innerHTML = "";

  const items = category === "all"
    ? getAllItems()
    : (menuData[category] || []).map(item => ({ ...item, category }));

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "item";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>${item.description}</p>
      <div class="qty">
        <button onclick="changeQty(this, -1)">−</button>
        <span>1</span>
        <button onclick="changeQty(this, 1)">+</button>
      </div>
      <button onclick='viewDetails(${JSON.stringify(item)})'>View Details</button>
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

// Save item to localStorage and navigate to details
function viewDetails(item) {
  localStorage.setItem("selectedItem", JSON.stringify(item));
  window.location.href = "details.html";
}

// On load, show all items
document.addEventListener("DOMContentLoaded", () => showCategory("all"));