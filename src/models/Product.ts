import { calculateDiscount } from '../utils/discountCalsulator.js';
import { calculateTax } from '../utils/taxCalculator.js';

export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public discountPercentage: number,
        public category: string
    ) {}

    public getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }

    public getFinalPrice(): number {
        const discountedPrice = this.getPriceWithDiscount();
        const taxAmount = calculateTax(discountedPrice, this.category);
        return discountedPrice + taxAmount;
    }

    public displayDetails(): string {
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