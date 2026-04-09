# E-Commerce Product Management System

## Overview
This repository contains the final assessment project for the TypeScript and Advanced JavaScript module. The goal of this project is to build a functional, real-world E-Commerce Product Management System that demonstrates proficiency in TypeScript, Object-Oriented Programming (OOP), asynchronous operations, error handling, and API integration.

## Assessment Requirements Met

### Part 1: Project Setup
- Configured a complete TypeScript environment using `tsconfig.json`.
- Organized code into a scalable `src/` directory structure separating models, services, and utilities.

### Part 2 & 3: Implementation Details
- **API Integration (`apiService.ts`):** Implemented `async/await` and Promises to fetch live product data from the DummyJSON API.
- **OOP Principles (`Product.ts`):** Created a `Product` base class containing properties from the API and encapsulated methods (`displayDetails()`, `getPriceWithDiscount()`).
- **Utility Modules:** - `discountCalculator.ts`: Calculates the exact dollar amount of the discount.
  - `taxCalculator.ts`: Applies a standard 4.75% tax rate, with a conditional 3% rate specifically for "groceries".
- **Error Handling (`errorHandler.ts`):** Implemented a custom error class and a global handler to manage failed API requests and runtime exceptions gracefully.