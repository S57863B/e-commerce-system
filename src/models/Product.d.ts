export declare class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, category: string);
    getPriceWithDiscount(): number;
    getFinalPrice(): number;
    displayDetails(): string;
}
//# sourceMappingURL=Product.d.ts.map