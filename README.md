# **SHOP.CO**

A modern e-commerce platform designed for buying and selling products seamlessly. This platform focuses on managing products efficiently using external APIs and Sanity CMS while ensuring excellent performance, user experience, and reliability.

---

## **Table of Contents**

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Sanity Upload](#sanity-upload)
- [Future Improvements](#future-improvements)

---

## **Features**

- **Product Listing & Detail Pages**: Users can browse a wide variety of products, view detailed product descriptions, images, and specifications.
- **Dynamic Product Management**: Product data is fetched from external APIs and Sanity CMS, providing a seamless experience for managing and updating products.
- **Real-Time Cart Updates**: Using Zustand, the cart is updated dynamically in real time as products are added or removed, providing an interactive shopping experience.
- **Responsive Design**: The application is fully responsive, offering a smooth user experience across desktop, tablet, and mobile devices.
- **Interactive UI Components**: Using Radix UI components like Dialogs, Sliders, and Popovers to enhance the interaction design with accessible and customizable UI elements.
- **Optimized Performance**: Leveraging Next.js's server-side rendering, static site generation, and fast load times optimized with Lighthouse.
- **Framer Motion Animations**: Beautiful transitions and animations are implemented for a more engaging and visually appealing user interface.
- **CMS Integration**: Sanity CMS is integrated for easy product and content management, with custom schema types like `ProductType` and `CategoryType`.
- **Customizable Filters**: Users can filter products based on categories, colors, price ranges, and sizes using dynamic filter components.
- **Error Handling**: Robust error handling ensures a smooth user experience even when something goes wrong, like product data failing to load.

## **Folder Structure**

```plaintext
.
├── app/                         # Next.js App Router folder
│   ├── layout.tsx               # Root layout for all pages
│   ├── page.tsx                 # Home page
│   ├── cart/                    # Cart page route
│   │   └── page.tsx             # Cart functionality
│   ├── search/                  # Search page route
│   │   └── page.tsx             # Search functionality
│   ├── shop/                    # Shop-related routes
│   │   ├── page.tsx             # Product listing page
│   │   └── [id]/page.tsx        # Product detail page
│   ├── studio/                  # Sanity CMS integration
│   │   └── [[...tool]]/page.tsx # Sanity Studio tool route
├── components/                  # Reusable UI components
│   ├── cart/                    # Cart components
│   │   └── Card.tsx
│   ├── category/                # Category components
│   │   └── Category.tsx
│   ├── feedback/                # Feedback-related components
│   │   ├── CommentDialog.tsx
│   │   ├── Faqs.tsx
│   │   ├── Feedback.tsx
│   │   ├── FeedbackCard.tsx
│   │   ├── FeedbackCarousel.tsx
│   │   ├── FeedbackTabs.tsx
│   │   ├── FilterComment.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Ratings.tsx
│   │   └── StarRating.tsx
│   ├── footer/                  # Footer components
│   │   └── Footer.tsx
│   ├── header/                  # Header components
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   └── TopHeader.tsx
│   ├── hero/                    # Hero section components
│   │   └── Hero.tsx
│   ├── itemcards/               # Product card components
│   │   ├── Card.tsx
│   │   └── DisplayCard.tsx
│   ├── offers/                  # Offers section components
│   │   └── LastOffer.tsx
│   ├── product/                 # Product-related components
│   │   ├── ColorSelector.tsx
│   │   ├── Product.tsx
│   │   ├── ProductQuantity.tsx
│   │   └── ProductSizeButtons.tsx
│   ├── shop-page/               # Shop-related components
│   │   ├── filters/             # Filter components
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── ColorsSection.tsx
│   │   │   ├── DressStyleSection.tsx
│   │   │   ├── MobileFilters.tsx
│   │   │   ├── PriceSection.tsx
│   │   │   ├── SizeSection.tsx
│   │   │   └── index.tsx
│   └── ui/                      # UI utility components
│       └── Accordion.tsx
├── hooks/                       # Custom hooks
│   ├── use-mobile.ts            # Hook for detecting mobile viewports
│   └── use-outside-clicks.ts    # Hook for handling outside clicks
├── lib/                         # Library utilities
│   └── utils.ts                 # General utility functions
├── sanity/                      # Sanity CMS setup
│   ├── helpers/                 # Helper functions for Sanity
│   │   ├── ApiTesting.ts
│   │   ├── index.ts
│   │   ├── queries.ts
│   │   └── SanityCreate.ts
│   ├── lib/                     # Sanity clients and related utilities
│   │   ├── clients.ts
│   │   ├── image.ts
│   │   └── live.ts
│   ├── schemaTypes/             # Sanity schema definitions
│   │   ├── CategoryType.ts
│   │   ├── index.ts
│   │   ├── ProductCatalog.ts
│   │   └── ProductType.ts
│   ├── env.ts                   # Environment variable helper
│   └── structure.ts             # Sanity Studio structure
├── store/                       # State management
│   └── CartStore.ts             # Cart state management
├── styles/                      # Global styles and themes
│   ├── fonts/                   # Custom fonts
│   │   ├── integralcf/
│   │   └── satoshi/
│   └── globals.css              # Global styles
├── public/                      # Static assets (images, icons)
├── .env                         # Environment variables
├── .env.local                   # Local environment variables
├── .eslintrc                    # ESLint configuration file
├── .gitignore                   # Git ignore file
├── CategoriesData.json          # Static data for categories
├── ProductsData.json            # Static data for products
├── components.json              # JSON file for component metadata
├── cypress.config               # Cypress testing configuration
├── next.config.js               # Next.js configuration
├── next-env.d.ts                # TypeScript declarations for Next.js
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lockfile
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation
├── sanity.cli.ts                # Sanity CLI configuration
├── sanity.config.ts             # Sanity project configuration
├── sanity.types.ts              # Type definitions for Sanity
├── schema/                      # Additional schemas for the project
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## **Live Demo**

The SHOP.CO is deployed and can be viewed live at: [SHOP.CO on vercel](https://shopco-uiux-hackathon-89uneh9dj.vercel.app/)

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/smahsan053/shopco-uiux-hackathon.git
   ```

2. **Install Dependencies:**
   Install the project dependencies using the following command:

   ```bash
   npm install
   ```

3. **Run the Project:**
   To see the project live in your local environment, run:
   ```bash
   npm run dev
   ```

## **Technologies Used**

- **Next.js**: A powerful React framework for building modern web applications with features like server-side rendering and static site generation.
- **Sanity CMS**: A headless CMS for managing content, allowing flexible integration with your e-commerce platform.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly with responsive and mobile-first features.
- **Zustand**: A state management library for handling global state, particularly for real-time cart updates.
- **Radix UI**: A set of low-level UI primitives that provide accessible and customizable components, such as dialogs, sliders, and dropdowns.
- **Framer Motion**: A powerful animation library for React, enabling smooth transitions and animations for a dynamic user interface.
- **Styled Components**: A CSS-in-JS library that allows you to write component-level styles using tagged template literals.
- **Lucide Icons**: A collection of open-source icons for use in your project.
- **Cypress**: A testing framework for end-to-end testing, ensuring the functionality and performance of the app.
- **TypeScript**: A superset of JavaScript that provides static typing and improved developer experience.
- **PostCSS**: A tool for transforming CSS with plugins, used for extending Tailwind CSS.
- **DaisyUI**: A plugin for Tailwind CSS that provides a set of pre-built UI components, enhancing development speed.

---

## **Setup Instructions**

### **Configure Sanity CMS:**

Set up your Sanity project and configure the environment variables:

1. **Create a `.env.local` file** in the root of your project.

2. **Add the following environment variables** to your `.env.local` file:
   ```plaintext
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
   ```

## **API Endpoints**

The application fetches product data from the following endpoints:

- **Product List API:** `https://template1-neon-nu.vercel.app/api/products`

## **Sanity Upload**

Run the following command to fetch data from the API and upload it to your Sanity CMS:

    ```bash
    npm run create
    ```

## **Future Improvements**

- **User Authentication:** Implement user authentication for a more personalized experience.
- **Payment Integration:** Integrate a payment gateway like Stripe for online payments.
- **Search Optimization:** Improve the search functionality with enhanced filtering options and faster queries.
- **SEO Enhancements:** Implement SEO-friendly meta tags for better search engine rankings.
