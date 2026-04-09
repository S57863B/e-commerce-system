export function calculateDiscount(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0)
        return 0;
    return (price * discountPercentage) / 100;
}
//# sourceMappingURL=discountCalsulator.js.map