import { fetchProducts } from './services/apiService.js';
import { handleError } from './utils/errorHandler.js';
async function initApp() {
    console.log('Initializing E-commerce System...');
    try {
        const products = await fetchProducts();
        console.log(`Successfully loaded ${products.length} products.\n`);
        const sampleProducts = products.slice(0, 3);
        sampleProducts.forEach(product => {
            console.log(product.displayDetails());
        });
    }
    catch (error) {
        handleError(error);
    }
}
initApp();
//# sourceMappingURL=main.js.map