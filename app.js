const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const themeButton = document.querySelector(".toggle-Button");
// const logo = document.querySelectorAll('.nav__logo')



themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("light-theme");

  themeButton.innerHTML = themeButton.classList.contains("light-theme") ? `Light <i class="ri-sun-line"></i>` : `Dark <i class="ri-moon-line"></i>`;

  const logo = document.querySelector('.nav__logo img');
  logo.src = logo.src.includes('logo-dark') ? 'assets/logo-white.png' : 'assets/logo-dark.png';
});




menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".story__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".story__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".story__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".story__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".story__content .story__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".client__image img", {
  ...scrollRevealOption,
  origin: "right",
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

function addToCart(name, image, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, image, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart`);
}


function displayProducts() {
  const store = {
    watch1: {
      name: 'ADERTICA',
      price: '$780',
      image: 'assets/feature-1.png',
    },
    watch2: {
      name: 'KERAKATCHI',
      price: '$950',
      image: 'assets/feature-2.png',
    },
    watch3: {
      name: 'CITIZEN',
      price: '$678',
      image: 'assets/feature-3.png',
    },
    watch4: {
      name: 'TERJAN GOLD',
      price: '$890',
      image: 'assets/arrival-1.png',
    },
    watch5: {
      name: 'SHEPARD PINK',
      price: '$589',
      image: 'assets/arrival-2.png',
    },
    watch6: {
      name: 'TITAN BLACK',
      price: '$678',
      image: 'assets/arrival-3.png',
    },
    watch7: {
      name : 'ADERTICA WHITE',
      price: '$570',
      image: 'assets/arrival-4.png',
    }
  };

  const products = Object.values(store);

  const featureGrid = document.querySelectorAll('.feature__grid');
  featureGrid.innerHTML = '';

  products.forEach((product) => {
    const innerHTML = `
      <div class="feature__card">
        <span>SALE</span>
        <img src="${product.image}" alt="feature" />
        <div class="text">
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        </div>
        <button class="btn" onclick="addToCart('${product.name}', '${product.image}', '${product.price}')">ADD TO CART</button>
      </div>
    `;
    featureGrid.innerHTML += innerHTML;
  });
}




displayProducts();