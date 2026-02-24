# Blueprint: Diet & Supplement Ranking Website

## 1. Overview

This project is an e-commerce website designed to showcase and sell diet supplements and healthy foods. The main feature is a dynamic, ranked list of best-selling products, providing a clear and intuitive shopping experience for users focused on health and wellness.

## 2. Design & Style

The visual design will be modern, clean, and energetic, aimed at making a great first impression and building user trust.

*   **Layout:** A responsive, mobile-first grid layout that adapts seamlessly to all screen sizes. Key content will be organized using CSS Grid and Flexbox for optimal alignment and spacing.
*   **Color Palette:**
    *   **Primary:** A vibrant, healthy green (`#4CAF50`) for calls-to-action and highlights.
    *   **Secondary:** A warm, energetic orange (`#FF9800`) for accents and ranking badges.
    *   **Background:** A soft, off-white (`#F9F9F9`) with a subtle noise texture to add a premium feel.
    *   **Text:** Dark gray (`#333333`) for high readability.
*   **Typography:**
    *   **Headings:** A bold, modern sans-serif font like **Montserrat** for impactful titles.
    *   **Body:** A clean, highly readable sans-serif font like **Roboto** for descriptions and general text.
*   **Components & Effects:**
    *   **Product Cards:** "Lifted" cards with soft, deep drop shadows to create a sense of depth.
    *   **Buttons & Interactive Elements:** Will feature a subtle "glow" effect on hover using color and shadow transitions.
    *   **Iconography:** Modern, intuitive icons for navigation and actions.

## 3. Features & Implementation

The application will be built using modern, framework-less web standards for high performance and maintainability.

*   **Ranked Product List:** The homepage will feature a ranked list of products (e.g., "Top Sellers"). Each product card will display its rank prominently.
*   **Web Components:** A custom `<product-card>` element will be created using JavaScript to encapsulate the structure, style, and behavior of each product display. This promotes reusability and a clean codebase.
*   **Dynamic Rendering:** Product data (name, image, description, rank) will be stored in a JavaScript array. The application will dynamically generate the product list from this data, making it easy to update.
*   **Responsive Design:** Using `@container` queries and modern CSS, the layout will adjust based on the available space, ensuring a perfect experience on mobile, tablet, and desktop.

## 4. Current Task: Initial Build

This is the plan for the initial construction of the website.

1.  **`blueprint.md` Creation:** Document the project's vision, design, and technical plan. (Complete)
2.  **`index.html` Structure:**
    *   Set up the main HTML document with a header, a main content area for the product grid, and a footer.
    *   Link the CSS and JavaScript files.
3.  **`style.css` Styling:**
    *   Implement the core layout, background, and typography.
    *   Style the product grid and create the base styles for the product cards, including shadows and responsive adjustments.
4.  **`main.js` Logic:**
    *   Define the `ProductCard` custom element.
    *   Create an array of sample product data (name, image URL, description, rank).
    *   Write the script to iterate through the data and append `<product-card>` elements to the DOM.
