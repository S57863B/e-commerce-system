import { calculateDiscount } from '../utils/discountCalsulator.js';
import { calculateTax } from '../utils/taxCalculator.js';
export class Product {
    id;
    title;
    description;
    price;
    discountPercentage;
    category;
    constructor(id, title, description, price, discountPercentage, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    getPriceWithDiscount() {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
    getFinalPrice() {
        const discountedPrice = this.getPriceWithDiscount();
        const taxAmount = calculateTax(discountedPrice, this.category);
        return discountedPrice + taxAmount;
    }
    displayDetails() {
        const discountAmt = calculateDiscount(this.price, this.discountPercentage);
        const taxAmt = calculateTax(this.getPriceWithDiscount(), this.category);
        return `
        -----------------------------------
        Product: ${this.title} (Category: ${this.category})
        Price: $${this.price.toFixed(2)}
        Discount: -$${discountAmt.toFixed(2)} (${this.discountPercentage}%)
        Tax: +$${taxAmt.toFixed(2)}
        -----------------------------------
        Total: $${this.getFinalPrice().toFixed(2)}`;
    }
}
//# sourceMappingURL=Product.js.map