
# Naver Brand Connect Product Showcase

## Overview

A web application to showcase Naver Brand Connect products. Users can browse product categories, view products, engage in discussions via Disqus, share products on social media, discover popular items, and submit partnership inquiries.

## Project Outline

### Design and Styling

*   **Layout:** A modern, responsive single-page application layout.
*   **Colors:** A vibrant and energetic color palette inspired by Naver's branding.
*   **Typography:** Expressive and readable fonts from Google Fonts.
*   **Components:**
    *   **Header & Navigation:** Clean header with navigation, search, and external links.
    *   **Hero Section:** A visually appealing hero section to welcome users.
    *   **Popular Products Section:** A dedicated section on the main page for featured products.
    *   **Cards:** Custom-styled cards for categories and products with interactive elements like sharing.
    *   **Disqus Integration:** A robust commenting system powered by Disqus for user discussions on product pages.
    *   **Social Sharing:** Intuitive icons for sharing products on major social platforms.
    *   **Partnership Form:** A dedicated form for users to submit partnership inquiries via Formspree.
    *   **Footer:** Contains copyright information.
*   **Effects:** Subtle animations and transitions for an interactive experience.

### Features

*   **Product Categories & Listings:** Browse products by category.
*   **Search:** Filter products by name.
*   **Popular Products Showcase:** A curated list of popular items.
*   **Disqus for Comments:** Replaced the native review system with Disqus to facilitate richer user discussions and community engagement.
*   **Social Media Sharing:** Share products easily on platforms like Facebook, Twitter, or by copying a direct link.
*   **Partnership Inquiry Form:** A simple and effective form that allows businesses or individuals to express interest in a partnership, with submissions managed through Formspree.
*   **Web Components:** Reusable UI elements for a modular and maintainable codebase.
*   **ES Modules:** Modern JavaScript module system.
*   **Firebase Integration:** Firestore for storing product and category data.
*   **Performance Optimization:** Lazy loading for images and code splitting for faster initial page loads.

## Current Plan

### Task Summary: Disqus Comment Integration

*   **Goal:** Replace the native review and rating system with Disqus comments.
*   **Reasoning:** To provide a more robust and feature-rich commenting experience for users, leveraging a popular third-party service for community management.
*   **Status:** **Completed**.

*   **Steps Taken:**
    1.  **Modified `views.js`:**
        *   The `renderReviews` function was updated to dynamically create and load the Disqus embed script.
        *   The page URL and a unique product identifier are now passed to the Disqus configuration to ensure comments are correctly associated with each product.
        *   The `ProductReview` and `ReviewForm` custom elements, along with their associated Firestore logic, were removed from the codebase.
    2.  **Git Integration:** All changes were committed to the repository with the message "feat: Replace review system with Disqus" and pushed to the remote `main` branch.
