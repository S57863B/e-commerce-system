import { Product } from '../models/Product.js';
import { AppError } from '../utils/errorHandler.js';
const API_URL = 'https://dummyjson.com/products';
export async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new AppError('Failed to fetch products from API', response.status);
        }
        const data = await response.json();
        return data.products.map((item) => {
            return new Product(item.id, item.title, item.description, item.price, item.discountPercentage, item.category);
        });
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map