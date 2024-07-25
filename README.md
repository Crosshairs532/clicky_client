# Mechanical Keyboards Shop

## Introduction

This project is a modern e-commerce website exclusively designed for mechanical keyboards. It features a robust set of functionalities to provide an engaging shopping experience for enthusiasts.

## Project Description

This e-commerce site allows users to browse, view, and purchase mechanical keyboards. It includes easy product browsing, detailed product pages, a smooth cart system, and a powerful dashboard for managing products. Additionally there is a payment system.

## Features

- **Homepage**: Attractive hero section, featured products, and service advertisements.
- **Products Page**: Browse all products with search and filter options.
- **Product Details Page**: Detailed product view and add-to-cart functionality.
- **Cart Page**: Manage cart items and proceed to checkout.
- **Checkout Page**: Collect user details and handle payments.
- **Product Management/Dashboard Page**: Dashboard for managing products.
- **About Us Page**: Creative and animated overview of the team and mission.
- **Contact Us Page**: Detailed contact information and user feedback options.

## Technology Stack

- **Frontend**: React, Redux, TypeScript, Vite, RTK Query, GSAP, Framer Motion.
- **Backend**: Node.js, Express, MongoDB, Mongoose, Zod.
- **Payment Integration**: Stripe( it will be implemented)

## Installation Guideline

### Prerequisites

- Node.js
- npm or yarn
- MongoDB instance

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```zsh
   npm install
   # or
   yarn install
   ```

### configuration

1. Create a .env file in the root directory and add configuration variables:
   ```dotnetcli
   PORT=3000
   DB_URL=your_db_connection_uri
   API_KEY=your_api_key_here
   ```
2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   > [!IMPORTANT]
   1. Ensure MongoDB is running and accessible.
   2. Configure environment variables in the .env file.
