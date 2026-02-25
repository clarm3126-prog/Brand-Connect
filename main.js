import { renderCategories, renderProducts, renderReviews, renderPartnershipForm } from './views.js';

const searchBar = document.getElementById('search-bar');

// Simple router
function router() {
    const hash = window.location.hash;
    const [path, queryString] = hash.split('?');

    switch (path) {
        case '#products':
            renderProducts();
            break;
        case '#reviews':
            renderReviews();
            break;
        case '#partnership':
             renderPartnershipForm();
            break;
        case '#categories':
        default:
            renderCategories();
            break;
    }
}

// Handle search input
searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            window.location.hash = `#products?search=${encodeURIComponent(searchTerm)}`;
        } else {
            window.location.hash = '#products'; // Show all products if search is empty
        }
    }
});

// Listen for hash changes to navigate
window.addEventListener('hashchange', router);

// Initial load
window.addEventListener('load', () => {
    if (!window.location.hash) {
        window.location.hash = '#categories';
    }
    router();
});