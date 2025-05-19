const menuData = {
  desserts: [
    {
      name: "Chocolate Cake",
      price: "EGP 90 (Est.)",
      description: "Rich chocolate layered cake",
      fullDescription: "A decadent chocolate cake with three layers of moist chocolate sponge, filled with chocolate ganache and covered in dark chocolate shavings.",
      image: "images/chocolate-cake.jpg"
    },
    {
      name: "New York Cheesecake",
      price: "EGP 90 (Est.)",
      description: "Classic creamy cheesecake",
      fullDescription: "Traditional New York-style cheesecake with graham cracker crust, topped with strawberry compote.",
      image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Tiramisu",
      price:"EGP 90 (Est.)",
      description: "Italian coffee-flavored dessert",
      fullDescription: "Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
      image:"images/tiramisu.jpg"
    },{
      name: "Strawberry Cheesecake",
      price: "EGP 90 (Est.)",
      description: "Creamy cheesecake with strawberries.",
      fullDescription: "A smooth and decadent cheesecake with a buttery crust, topped with a sweet and slightly tangy strawberry topping or fresh strawberry slices.",
      image: "https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg"
    },
    {
      name: "Chocolate Lava Cake",
      price: "EGP 110 (Est.)",
      description: "Warm chocolate cake with gooey center.",
     fullDescription: "A rich and moist individual chocolate cake with a perfectly cooked exterior and a warm, molten chocolate center that flows out when cut into. Often served warm with a scoop of vanilla ice cream.",
      image: "https://th.bing.com/th/id/R.a85fcbad01c7cb82d0f253feebe6b1e1?rik=lQ9OBVWynk8QEw&pid=ImgRaw&r=0"
    },
    {
      name: "Gelato",
      price: "EGP 70 (Est.)",
      description: "Delicious Italian ice cream.",
     fullDescription: "Indulge in authentic Italian-style ice cream, known for its dense texture, intense flavor, and lower fat content compared to traditional ice cream. Available in a variety of classic and seasonal flavors.",
      image: "https://th.bing.com/th/id/R.baad8524c8d647daa86bef1feebf58f2?rik=RnlG%2byar2jbrrQ&pid=ImgRaw&r=0"
    }
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      price: "EGP 30 (Est.)",
      description: "Refreshing lemon drink",
      fullDescription: "Homemade lemonade with fresh-squeezed lemons, organic cane sugar, and mint leaves.",
      image: "https://img.freepik.com/premium-photo/fresh-lemonade_929907-3141.jpg"
    },
    {
      name: "Iced Coffee",
      price: "EGP 80 (Est.)",
      description: "Cold brew with milk",
      fullDescription: "Slow-steeped cold brew coffee served with vanilla syrup and your choice of milk.",
      image: "images/iced-coffee.jpg"
    },
    {
      name: "Mango Smoothie",
      price: "EGP 60 (Est.)",
      description: "Tropical fruit blend",
      fullDescription: "Fresh mango, pineapple, and Greek yogurt blended with ice and lime juice.",
      image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-2-1017x1536.jpg"
    },
    {
      name: "Fresh Orange Juice",
      price: "EGP 60 (Est.)",
      description: "Pure squeezed orange goodness.",
     fullDescription: "Enjoy the simple goodness of 100% freshly squeezed orange juice, packed with natural sweetness and vitamins.",
      image: "https://th.bing.com/th/id/OIP.Cn1zad0znilCIOXp-KCS3AHaHa?w=172&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7"
    },
    {
      name: "Iced Tea",
      price: "EGP 40 (Est.)",
      description: "Chilled brewed tea, very refreshing.",
     fullDescription: "Freshly brewed tea, served chilled over ice. Available in classic black tea or sometimes with fruit flavor infusions like peach or lemon.",
      image: "https://th.bing.com/th/id/OIP.InI8fpED4NSNPwuP7TxmSwHaJQ?cb=iwc2&w=3000&h=3751&rs=1&pid=ImgDetMain"
    },
    {
      name: "Classic Mojito",
      price: "EGP 80 (Est.)",
      description: "A cool and minty lime drink.",
     fullDescription: "A refreshing cocktail made with white rum, fresh mint leaves, lime juice, a touch of sugar, and topped with soda water. Served over ice.",
      image: "https://th.bing.com/th/id/OIP.jPU9cwI1MpSJnYmBl6tTnAAAAA?cb=iwc2&rs=1&pid=ImgDetMain"
    }
  ],
  pizza: [
    {
      name: "Pepperoni Pizza",
      price: "EGP 90 (Est.)",
      description: "Classic pepperoni",
      fullDescription: "Hand-tossed dough with tomato sauce, mozzarella, and extra pepperoni.",
      image: "images/pizza-C1.jpeg"
    },
    {
      name: "Margherita",
      price: "EGP 90 (Est.)",
      description: "Fresh basil and mozzarella",
      fullDescription: "San Marzano tomatoes, fresh basil, buffalo mozzarella, and extra virgin olive oil.",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "BBQ Chicken",
      price: "EGP 90 (Est.)",
      description: "Smoky BBQ flavor",
      fullDescription: "Grilled chicken, red onions, cilantro, and our house-made BBQ sauce.",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Four Cheese Pizza (Quattro Formaggi)",
      price: "EGP 150 (Est.)",
      description: "Pizza with four types of cheese.",
     fullDescription: "Indulge in a cheese lover's dream with a blend of four distinct cheeses – typically mozzarella, Gorgonzola, Fontina, and Parmesan – melted together on a base of tomato sauce for a rich and complex flavor.",
      image: "https://th.bing.com/th/id/OIP.VcSIIVRi5xpGHbeSvYtrVgHaF7?cb=iwc2&rs=1&pid=ImgDetMain"
    },
    {
      name: "Prosciutto e Funghi Pizza",
      price: "EGP 250 (Est.)",
      description: "Ham and mushroom pizza.",
     fullDescription: "A delightful Italian pizza topped with our classic tomato sauce, fresh mozzarella cheese, thinly sliced prosciutto (cured ham), and fresh mushrooms.",
      image: "https://th.bing.com/th/id/R.4e0d8a6169696d4967f8a3289677e150?rik=2%2fBGDC9%2b%2bi2f0Q&pid=ImgRaw&r=0"
    }
  ],
  italian: [
    {
      name: "Spaghetti Carbonara",
      price: "EGP 150 (Est.)",
      description: "Creamy pasta",
      fullDescription: "Traditional Roman dish with guanciale, pecorino cheese, and black pepper.",
      image: "https://bellyfull.net/wp-content/uploads/2023/02/Spaghetti-Carbonara-blog-1.jpg"
    },
    {
      name: "Lasagna",
      price: "EGP 150 (Est.)",
      description: "Layered pasta dish",
      fullDescription: "Homemade lasagna with beef ragù, béchamel sauce, and parmesan cheese.",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Risotto Milanese",
      price: "EGP 150 (Est.)",
      description: "Saffron risotto",
      fullDescription: "Creamy Arborio rice cooked with saffron, white wine, and parmesan.",
      image: "https://th.bing.com/th/id/R.2c52a1d2e9f0f368ee41ca51a2a840d9?rik=7WTNGsVH%2bX6xPw&pid=ImgRaw&r=0"
    },
        {
      name: "Fettuccine Alfredo",
      price: "EGP 280 (Est.)",
      description: "Pasta in a rich cheese sauce.",
     fullDescription: "Silky fettuccine pasta coated in a luxurious and creamy sauce made from butter, heavy cream, and freshly grated Parmesan cheese. Simple, elegant, and utterly delicious.",
      image: "https://th.bing.com/th/id/OIP.z9ChSVC_HzFo6LYlc7srHAHaHT?w=175&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7"
    },
    {
      name: "Bruschetta",
      price: "EGP 120 (Est.)",
      description: "Toasted bread with tomato and basil.",
     fullDescription: "A popular Italian appetizer consisting of slices of rustic bread grilled to perfection, rubbed with garlic, drizzled with olive oil, and typically topped with a fresh mixture of chopped tomatoes and basil.",
      image: "https://th.bing.com/th/id/R.229749cbd101185909ad26fffd691bd4?rik=zWqRjO0tc2oj7g&pid=ImgRaw&r=0"
    }
  ],
  grilled: [
    {
      name: "Grilled Salmon",
      price: "EGP 150 (Est.)",
      description: "Fresh Atlantic salmon",
      fullDescription: "Grilled salmon fillet with lemon butter sauce, served with seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },   {
      name: "Ribeye Steak",
      price: "EGP 700 (Est.)",
      description: "Flavorful grilled steak.",
     fullDescription: "A premium cut of ribeye steak, known for its rich marbling and intense flavor. Seasoned and grilled to your desired temperature, from rare to well-done. Served with your choice of sauce and side dish.",
      image: "https://blog.thermoworks.com/wp-content/uploads/2017/06/ribeye_compound_butter_smoke_mk4-79-of-88.jpg"
    },
    {
      name: "Grilled Salmon Fillet",
      price: "EGP 350 (Est.)",
      description: "Healthy grilled fish fillet.",
     fullDescription: "A fresh fillet of salmon, lightly seasoned and grilled until flaky and moist. A healthy and delicious option, often paired with lemon and herbs, and served with a side of steamed or grilled vegetables.",
      image: "https://th.bing.com/th/id/R.0cf2138b2bad2e2f4877f11fe5f50eeb?rik=%2bxLcvI3iTTcWYg&pid=ImgRaw&r=0"
    },
    {
      name: "Grilled Pork Chops",
      price: "EGP 450 (Est.)",
      description: "Savory grilled pork.",
     fullDescription: "Thick-cut pork chops, marinated in a savory blend of herbs and spices, then grilled to create a tender interior and a perfectly seared exterior. Served with your choice of side.",
      image: "https://th.bing.com/th/id/R.54f234b379d201708e5208fe9d48bfd5?rik=CoIrG0aNfGQEGA&pid=ImgRaw&r=0"
    },
    {
      name: "BBQ Ribs",
      price: "EGP 150 (Est.)",
      description: "Fall-off-the-bone ribs",
      fullDescription: "Slow-cooked pork ribs glazed with house-made BBQ sauce.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    },
    {
      name: "Grilled Vegetables",
      price: "EGP 150 (Est.)",
      description: "Seasonal grilled veggies",
      fullDescription: "Zucchini, eggplant, bell peppers, and mushrooms with balsamic glaze.",
      image: "https://th.bing.com/th/id/R.6fe0a6307bd3dfaa92ea645cc2fa5150?rik=uQ4PxsClc9LiqQ&pid=ImgRaw&r=0"
    }
  ]
};

function getAllItems() {
  return Object.entries(menuData).flatMap(([category, items]) =>
      items.map(item => ({ ...item, category }))
  );
}

function updateActiveButton(category) {
  document.querySelectorAll('.categories button').forEach(button => {
    button.classList.remove('active');
  });

  const buttons = document.querySelectorAll('.categories button');
  for (let button of buttons) {
    if (button.textContent.toLowerCase().includes(category.toLowerCase()) ||
        (category === 'all' && button.textContent.includes('All'))) {
      button.classList.add('active');
      break;
    }
  }
}


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

}

function viewDetails(category, name) {
  const allItems = menuData[category] || [];
  const item = allItems.find(i => i.name === name);

  if (item) {
    localStorage.setItem("selectedItem", JSON.stringify({...item, category}));
    window.location.href = "details.html";
  }
}

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