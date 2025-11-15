// API Configuration
// This file manages API endpoints for different environments

const API_CONFIG = {
    // Use environment variable if available, otherwise fallback to localhost
    BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:8080' 
        : (window.ENV_API_URL || 'https://your-backend-url.onrender.com'),
    
    // API endpoints
    ENDPOINTS: {
        // User endpoints
        LOGIN: '/users/login',
        SIGNUP: '/users/add',
        LOGOUT: '/users/logout',
        ME: '/users/me',
        RESET_PASSWORD: '/users/reset-password',
        
        // Product endpoints
        PRODUCTS_ALL: '/products/all',
        
        // Cart endpoints
        CART_VIEW: '/cart/view',
        CART_ADD: '/cart/add',
        CART_UPDATE: '/cart/update',
        CART_REMOVE: '/cart/remove',
        CART_TOTAL: '/cart/total',
        
        // Order endpoints
        ORDERS_PLACE: '/orders/place',
        ORDERS_USER: '/orders/user',
        
        // Address endpoints
        ADDRESSES_ALL: '/addresses/all',
        ADDRESSES_ADD: '/addresses/add',
        
        // Contact endpoint
        CONTACT_CREATE: '/contact/create'
    }
};

// Helper function to get full API URL
function getApiUrl(endpoint) {
    return API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS[endpoint];
}

// Helper function to get base API URL
function getBaseApiUrl() {
    return API_CONFIG.BASE_URL;
}

console.log('API Base URL:', API_CONFIG.BASE_URL);