 import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import MealDetail from '@/pages/MealDetail.jsx';
import Header from '@/components/Header.jsx';
import CategoryPage from "@/pages/CategoryPage.jsx";
import FavoritesPage from "@/pages/FavoritesPage.jsx";
import RandomMealPage from "@/pages/RandomMealPage.jsx";
import { Toaster } from "sonner";
import Footer from "@/components/Footer.jsx";
function App() {
  return (
    <div className=" min-h-screen bg-orange-50 dark:bg-orange-950 text-gray-800 dark:text-white">
       <Header />
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/category/:name" element={<CategoryPage />} />
       <Route path="/favorites" element={<FavoritesPage />} />
       <Route path="/random" element={<RandomMealPage />} />
       <Route path="/meal/:id" element={<MealDetail />} />
    </Routes>
       <Toaster richColors position="top-right" />
       <Footer />

    </div>
  );
}

export default App;
