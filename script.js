// Product Data
const products = [
    { id: 1, name: "Classic T-Shirt", price: "$29.99", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Denim Jeans", price: "$59.99", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Cotton Hoodie", price: "$49.99", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Summer Dress", price: "$39.99", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Leather Jacket", price: "$129.99", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Sneakers", price: "$79.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Polo Shirt", price: "$34.99", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Cargo Pants", price: "$54.99", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Winter Coat", price: "$149.99", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Baseball Cap", price: "$19.99", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Sweatpants", price: "$44.99", image: "https://images.unsplash.com/photo-1506629905607-cc0c5c8c0b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Button Shirt", price: "$39.99", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
];

// Generate Product Cards
function generateProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 mb-4';
        
        col.innerHTML = `
            <div class="card product-card" onclick="handleProductClick(${product.id})">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title product-name">${product.name}</h5>
                    <p class="card-text product-price">${product.price}</p>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(col);
    });
}

// Generate Featured Products for Home Page
function generateFeaturedProducts() {
    const featuredProducts = document.getElementById('featuredProducts');
    if (!featuredProducts) return;

    // Get first 4 products as featured
    const featured = products.slice(0, 4);
    
    featuredProducts.innerHTML = '';

    featured.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3 mb-4';
        
        col.innerHTML = `
            <div class="card product-card h-100" onclick="handleProductClick(${product.id})">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title product-name">${product.name}</h5>
                    <p class="card-text product-price mt-auto">${product.price}</p>
                </div>
            </div>
        `;
        
        featuredProducts.appendChild(col);
    });
}

// Handle Product Click
function handleProductClick(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`You clicked on: ${product.name}\nPrice: ${product.price}`);
        // In a real application, this would navigate to a product detail page
    }
}

// Contact Form Handler
function handleContactForm(event) {
    if (event) {
        event.preventDefault();
    }
    
    const form = document.getElementById('contactForm');
    if (!form) return;

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const number = document.getElementById('contactNumber').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && number && message) {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }
}

// Login Form Handler
function handleLoginForm(event) {
    if (event) {
        event.preventDefault();
    }
    alert('Login functionality would be implemented here.');
}

// Register Form Handler
function handleRegisterForm(event) {
    if (event) {
        event.preventDefault();
    }
    
    const password = document.getElementById('registerPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    alert('Registration successful!');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Generate product cards if on products page
    generateProductCards();
    
    // Generate featured products if on home page
    generateFeaturedProducts();

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Login form submission
    const loginForms = document.querySelectorAll('#loginModal form');
    loginForms.forEach(form => {
        form.addEventListener('submit', handleLoginForm);
    });

    // Register form submission
    const registerForms = document.querySelectorAll('#registerModal form');
    registerForms.forEach(form => {
        form.addEventListener('submit', handleRegisterForm);
    });
});

