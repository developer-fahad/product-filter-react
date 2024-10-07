# E-commerce Product Filter Project

This project is an e-commerce product listing with dynamic filtering functionality. It displays products on cards by default and allows filtering by categories and price ranges.

## Overview

The primary goal of this project was to create a simple e-commerce product list with filtering capabilities. The product data is fetched from a local JSON file, and products are dynamically filtered by categories and price ranges. The entire interface is built using React.js and styled with Tailwind CSS. The project is deployed via Netlify.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript (ES6+)**: Modern JavaScript features were used for state management and interactivity.
- **npm**: Node Package Manager, used for managing dependencies.

## Steps Taken

1. **Initial Setup**:
   - Created a new React app.
   - Installed Tailwind CSS for styling.
   
2. **Product Data**:
   - Created a `products.json` file in the `public` folder containing product details (ID, name, image, category, price).
   - Loaded this JSON file dynamically in the React component to display the products.

3. **UI Components**:
   - **ProductCard**: Displays individual products.
   - **Filter**: Includes dropdowns for category and price range filtering.
   - **Product List**: Displays the filtered products as per the user's selection.

4. **Filtering Logic**:
   - Implemented filtering logic using React Hooks (`useState`, `useEffect`) to update the product list based on selected category and price filters.
   - Categories are dynamically generated from the product data without showing duplicates.

5. ** Deployment**:
   - Netlify
   

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/developer-fahad/your-repo-name.git

