export function calculateDiscount(price: number, discountPercentage: number): number {
    if (price < 0 || discountPercentage < 0) return 0;
    return (price * discountPercentage) / 100;
}