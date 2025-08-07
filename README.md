 # 🍽️ Foodie Finder

**Foodie Finder** is a beautiful and responsive web app that helps users explore, search, and save their favorite meals from around the world — powered by [TheMealDB API](https://www.themealdb.com/api.php).

> 💡 Designed and developed with passion by [Aisha](https://github.com/codequeen-11)

---

## ✨ Features

- 🔍 **Smart Search**: Instantly search meals by name.
- 🎲 **Random Meal Generator**: Discover something new every time.
- 📁 **Categories & Filtering**: Browse by popular food categories.
- 💖 **Favorite Meals**: Save meals you love and access them anytime.
- 🌙 **Dark Mode**: Toggle-friendly dark/light theme.
- 📱 **Fully Responsive**: Seamless across mobile, tablet, and desktop.
- 🖼️ **Featured Carousel**: Engaging UI for featured recipes.

---

## 🔧 Tech Stack

- **React** + **Vite**
- **Tailwind CSS** + **ShadCN** UI components
- **Lucide Icons**
- **TheMealDB API**
- **Radix UI** (for dropdowns)
- **LocalStorage** (for saving favorites)

---

## 🚀 Live Demo

👉 [View the live site here](https://foodie-finder-web-app.vercel.com)  
*(Coming soon or replace with your deployed link)*

---

## 📸 Screenshots

| Home Page with Featured Meals | Dark Mode + Favorites |
|------------------------------|------------------------|
| ![Home](./home-page.png) | ![Dark](./meal-cards-with-dark-mode.png) |

---

## 🧠 How It Works

- User types in the search box to find meals
- Click **"💖"** to save a meal to favorites
- Browse categories or explore a random dish
- Data is fetched from the MealDB API and stored locally

---

## 📁 Project Structure

```bash
src/
├── assets/                 # App logo, icons
├── components/             # Reusable UI components
├── pages/                  # Page-level React components
├── lib/                    # Utility functions & hooks
├── App.jsx                 # Main App layout
└── main.jsx                # Entry point

