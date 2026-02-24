
# Naver Brand Connect Product Showcase

## Overview

A web application to showcase Naver Brand Connect products. Users can browse product categories, view products, read and write reviews, share products on social media, and discover popular items.

## Project Outline

### Design and Styling

*   **Layout:** A modern, responsive single-page application layout.
*   **Colors:** A vibrant and energetic color palette inspired by Naver's branding.
*   **Typography:** Expressive and readable fonts from Google Fonts.
*   **Components:**
    *   **Header & Navigation:** Clean header with navigation, search, and external links.
    *   **Popular Products Section:** A dedicated section on the main page for featured products.
    *   **Cards:** Custom-styled cards for categories, products, and reviews with interactive elements like sharing.
    *   **Review System:** A user-friendly interface for reading and submitting product reviews.
    *   **Social Sharing:** Intuitive icons for sharing products on major social platforms.
    *   **Footer:** Contains copyright information.
*   **Effects:** Subtle animations and transitions for an interactive experience.

### Features

*   **Product Categories & Listings:** Browse products by category.
*   **Search:** Filter products by name.
*   **Popular Products Showcase:** A curated list of popular items.
*   **User Reviews and Ratings:** Read and submit reviews and ratings for each product.
*   **Social Media Sharing:** Share products easily on platforms like Facebook, Twitter, or by copying a direct link. This encourages organic marketing and drives new traffic.
*   **Web Components:** Reusable UI elements for a modular and maintainable codebase.
*   **ES Modules:** Modern JavaScript module system.
*   **Firebase Integration:** Firestore for storing product and review data.

## Current Plan

### Implement Social Media Sharing Feature

*   **Goal:** Allow users to share products via Facebook, Twitter, or by copying a direct link.
*   **Reasoning:** Adding social sharing buttons is a low-effort, high-impact way to increase the site's visibility and attract new users through word-of-mouth marketing.

*   **Steps:**
    1.  **Update `blueprint.md`:** Document the plan for the social sharing feature.
    2.  **Add Font Awesome (`index.html`):** Integrate the Font Awesome library to use its social media icons.
    3.  **Update `views.js` (`ProductCard`):**
        *   Add a "Share" button and a hidden container for social media icons within the `ProductCard` web component.
        *   Implement the logic to toggle the visibility of the icon container when the share button is clicked.
        *   Add event listeners to the icons for Facebook, Twitter, and "copy link" actions, generating the appropriate share URLs.
    4.  **Update `main.js` (`PopularProductCard`):** Replicate the same sharing functionality in the `PopularProductCard` component.
    5.  **Update `style.css`:** Add styles for the share button and the social icon container to ensure they are visually appealing and user-friendly.
    6.  **Commit and Push:** Save all changes to the Git repository.
