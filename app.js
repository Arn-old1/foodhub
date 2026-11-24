const cart = [];
const ord_cart = document.querySelector(".cart");

const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 14.99,
    category: "Main Course",
    image: "images/pix.jpg",
    description:
      "Classic Italian pizza with fresh mozzarella,basil and tomato sauce",
    popular: true,
  },
  {
    id: 2,
    name: "Mango Smoothie",
    price: 5.99,
    category: "Beverages",
    image: "images/mango2.jpg",
    description: "Fresh mango blended with yogurt and honey",
    popular: false,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: 24.99,
    category: " Main Course",
    image: "images/salmon.jpg",
    description:
      "Fresh Atlantic salmon with Lemon butter sauce and seasonal vegatables",
    popular: false,
  },
  {
    id: 4,
    name: "Bruschetta",
    price: 7.99,
    category: "Appetizers",
    image: "images/bread.jpg",
    description: "Toasted bread topped with fresh tomatoes,garlic and basil",
    popular: true,
  },
  {
    id: 5,
    name: "Caesar Salad",
    price: 9.99,
    category: "Appetizers",
    image: "images/salad.jpg",
    description:
      "Crispy romaine lettuce, parmesan cheese,croutons and Caesar dressing",
    popular: false,
  },
  {
    id: 6,
    name: "Beef Burger",
    price: 16.99,
    image: "images/buger.jpg",
    category: "Main Course",
    description:
      "Juicy beef patty with lettuce, tomato,cheese and special sauce",
    popular: true,
  },
  {
    id: 7,
    name: "Chocolate Lava cake",
    price: 18.99,
    category: "Desserts",
    image: "images/lava.jpg",
    description:
      "Warm chocolate cake with a gooey center,served with vanilla ice cream ",
    popular: true,
  },
  {
    id: 8,
    name: "Thai Green curry",
    price: 18.99,
    category: "Main Course",
    image: "images/thia.jpg",
    description: "Spicy coconut curry with vegetables and jasmine rice",
    popular: false,
  },
  {
    id: 9,
    name: "Crispy Chicken Wings",
    price: 11.99,
    category: "Appetizers",
    image: "images/wings.jpg",
    description: "Golden crispy wings served with a spicy dipping sauce",
    popular: true,
  },
  {
    id: 10,
    name: "Loaded Nachos",
    price: 9.99,
    category: "Appetizers",
    image: "images/nachos.jpg",
    description:
      "Tortilla chips topped with melted cheese, jalapenos and salsa",
    popular: false,
  },
  {
    id: 11,
    name: "Strawberry Cheesecake",
    price: 7.99,
    category: "Desserts",
    image: "images/cheesecake.jpg",
    description: "Creamy cheesecake topped with fresh strawberry sauce",
    popular: true,
  },
  {
    id: 12,
    name: "Chocolate Churros",
    price: 6.99,
    category: "Desserts",
    image: "images/churro.jpg",
    description: "Fresh churros coated in cinnamon sugar with chocolate dip",
    popular: false,
  },
  {
    id: 13,
    name: "Grilled Chicken Special",
    price: 21.99,
    category: "Specials",
    image: "images/chiecken.jpg",
    description:
      "Grilled chicken served with seasoned rice and fresh vegetables",
    popular: true,
  },
  {
    id: 14,
    name: "Chef's Steak Special",
    price: 27.99,
    category: "Specials",
    image: "images/steak.jpg",
    description:
      "Tender grilled steak served with mashed potatoes and vegetables",
    popular: true,
  },
  {
    id: 15,
    name: "Strawberry Banana Smoothie",
    price: 6.99,
    category: "Beverages",
    image: "images/strawberry.jpg",
    description: "Fresh strawberries and bananas blended with creamy yogurt",
    popular: true,
  },
  {
    id: 16,
    name: "Lemon Mint Cooler",
    price: 4.99,
    category: "Beverages",
    image: "images/lemon-mint.jpg",
    description: "Refreshing lemon juice mixed with fresh mint and ice",
    popular: false,
  },
  {
    id: 17,
    name: "Iced Caramel Latte",
    price: 5.99,
    category: "Beverages",
    image: "images/iced.jpg",
    description: "Chilled espresso blended with milk and sweet caramel",
    popular: true,
  },
  {
    id: 18,
    name: "Fresh Watermelon Juice",
    price: 4.5,
    category: "Beverages",
    image: "images/watermelon.jpg",
    description: "Freshly blended watermelon juice served chilled",
    popular: false,
  },
  {
    id: 19,
    name: "Chocolate Milkshake",
    price: 6.5,
    category: "Beverages",
    image: "images/milk.jpg",
    description: "Rich chocolate ice cream blended with chilled milk",
    popular: true,
  },
  {
    id: 20,
    name: "Fresh Orange Juice",
    price: 4.99,
    category: "Beverages",
    image: "images/orange.jpg",
    description: "Freshly squeezed oranges served over ice",
    popular: false,
  },
];

const buttons = document.querySelectorAll(".btn");
const order = document.querySelector("#orderCount");
const order_button = document.querySelectorAll(".ord_btn");
let menu = document.querySelector(".menu__cards");

function displayProducts(productList) {
  menu.innerHTML = productList
    .map(
      (product) => `<div class="card"> <img src="${product.image}">
    <p class="card__name">${product.name}</p>
    <p class="card_price">$${product.price.toFixed(2)}</p>
    <span class="tag__name">${product.popular ? "Popular" : ""}</span>
    <p class="details">${product.description}</p>
    <button class="card__button" data-id="${product.id}">Add to Cart </button>
</div>

  `
    )
    .join("");
}
displayProducts(products);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    buttons.forEach((btn) => btn.classList.remove("menu_active"));

    button.classList.add("menu_active");

    let selectedCategory = button.textContent.trim();

    let filteredProducts;

    if (selectedCategory === "All") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );
    }
    displayProducts(filteredProducts);
  });
});

const inputtext = document.querySelector("#searchInput");

inputtext.addEventListener("input", (event) => {
  const text = event.target.value.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    return [
      product.name.toLocaleLowerCase(),
      product.category.toLocaleLowerCase(),
      product.price.toString(),
    ].some((data) => data.includes(text));
  });

  if (filteredProducts.length === 0) {
    menu.innerHTML = `<p class="filtered_p"> No Products Avaliable !</p>`;
    return;
  }
  displayProducts(filteredProducts);
});

order_button.forEach((button) => {
  button.addEventListener("click", () => {
    order_button.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

menu.addEventListener("click", (event) => {
  const button = event.target.closest(".card__button");
  button.textContent = "Added";

  if (!button) return;

  let clickedId = +button.dataset.id;

  let matched = products.find((product) => product.id === clickedId);
  if (!matched) return;

  let newobj = {
    name: matched.name,
    price: matched.price,
    id: matched.id,
    quantity: 1,
  };

  const selectedProduct = cart.find((item) => item.id === clickedId);

  if (selectedProduct) {
    selectedProduct.quantity += 1;
  } else {
    cart.push(newobj);
  }
});

function removeFromCart(id) {
  const removed = cart.filter((item) => item.id !== id);
  cart = removed;
  renderCart();
}

function renderCart() {
  const cartList = document.querySelector("#cartItems");
  const cartTotal = document.querySelector("#cartTotal");

  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name}--${item.price.toFixed(2)} x ${item.quantity}
  <button onclick="removeFromCart('${item.id}')">Remove</button>`;
    cartList.appendChild(li);
  });
  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  cartTotal.textContent = subtotal.toFixed(2);
}
renderCart();

const orders = document.querySelector(".order_btn");
const close_btn = document.querySelector(".cart__close");
const cart_over = document.querySelector(".cart-overlay");

orders.addEventListener("click", (event) => {
  event.preventDefault();
  ord_cart.classList.add("open");
  cart_over.classList.add("show");
});

close_btn.addEventListener("click", () => {
  ord_cart.classList.remove("open");
  cart_over.classList.remove("show");
});
