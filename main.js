class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const rank = this.getAttribute('rank');
        const name = this.getAttribute('name');
        const imageUrl = this.getAttribute('image');
        const description = this.getAttribute('description');
        const price = this.getAttribute('price');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    container-type: inline-size;
                }

                .card-wrapper {
                    background-color: var(--card-background, #fff);
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px -10px var(--shadow-color, rgba(0,0,0,0.2));
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }

                .card-wrapper:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px -10px var(--shadow-color, rgba(0,0,0,0.25));
                }

                .rank-badge {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: var(--secondary-color, #FF9800);
                    color: white;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    font-weight: 700;
                    font-size: 1.2rem;
                    padding: 0.5rem 0.8rem;
                    border-bottom-right-radius: 12px;
                    z-index: 2;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }

                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                h3 {
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                    margin: 0 0 0.5rem;
                    font-size: 1.3rem;
                }

                p {
                    margin: 0 0 1rem;
                    flex-grow: 1;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                }

                .price {
                    font-size: 1.5rem;
                    font-weight: 500;
                    font-family: var(--font-heading, 'Montserrat', sans-serif);
                }

                .add-to-cart-btn {
                    background-color: var(--primary-color, #4CAF50);
                    color: white;
                    border: none;
                    padding: 0.75rem 1.25rem;
                    font-family: var(--font-body, 'Roboto', sans-serif);
                    font-weight: 500;
                    font-size: 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.2s;
                    box-shadow: 0 4px 12px -2px rgba(76, 175, 80, 0.4);
                }

                .add-to-cart-btn:hover {
                    background-color: #45a049; /* Darker Green */
                    transform: scale(1.05);
                }

            </style>
            <div class="card-wrapper">
                <div class="rank-badge">#${rank}</div>
                <img class="card-image" src="${imageUrl}" alt="${name}">
                <div class="card-content">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <div class="card-footer">
                        <span class="price">${price}</span>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

// --- Sample Product Data ---
const products = [
    {
        rank: 1,
        name: 'Pro-NRG Protein Shake',
        description: 'A premium whey protein shake for muscle recovery and growth. 25g of protein per serving.',
        price: '$45.99',
        image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=800&auto=format&fit=crop',
    },
    {
        rank: 2,
        name: 'GreenLife Superfood Mix',
        description: 'A blend of organic greens, fruits, and antioxidants to boost your daily energy.',
        price: '$32.50',
        image: 'https://images.unsplash.com/photo-1627822459390-3165215af159?q=80&w=800&auto=format&fit=crop',
    },
    {
        rank: 3,
        name: 'Keto-Fit Snack Bars',
        description: 'Low-carb, high-fat snack bars perfect for a ketogenic diet. Delicious and satisfying.',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1558552399-31e43884b244?q=80&w=800&auto=format&fit=crop',
    },
    {
        rank: 4,
        name: 'Vegan Omega-3 Capsules',
        description: 'Plant-based Omega-3 derived from algae oil. Supports brain and heart health.',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1607958994353-619a93a54d5b?q=80&w=800&auto=format&fit=crop',
    },
    {
        rank: 5,
        name: 'ZenMind Herbal Tea',
        description: 'A calming blend of chamomile and lavender to help you relax and de-stress.',
        price: '$15.00',
        image: 'https://images.unsplash.com/photo-1574609214959-693454b69c67?q=80&w=800&auto=format&fit=crop',
    },
    {
        rank: 6,
        name: 'Pure Hydration Electrolytes',
        description: 'Sugar-free electrolyte powder to replenish minerals and improve hydration.',
        price: '$22.00',
        image: 'https://images.unsplash.com/photo-1554228477-d03a11679803?q=80&w=800&auto=format&fit=crop',
    },
];

// --- Render Products ---
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    products.forEach(product => {
        const productElement = document.createElement('product-card');
        productElement.setAttribute('rank', product.rank);
        productElement.setAttribute('name', product.name);
        productElement.setAttribute('description', product.description);
        productElement.setAttribute('price', product.price);
        productElement.setAttribute('image', product.image);
        productGrid.appendChild(productElement);
    });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', renderProducts);
