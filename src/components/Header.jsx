
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import useFavorites from "@/lib/useFavorites";
import logo from "@/assets/logo-1.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { count } = useFavorites();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "#" }, // handled manually
    {
      name: "Favorites",
      path: "/favorites",
      icon: <Heart size={18} className="inline ml-1 text-rose-500" />,
    },
    { name: "Random", path: "/random" },
  ];

  const handleNavClick = (link) => {
    if (link.name === "Categories") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById("category-section")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById("category-section")?.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    } else {
      navigate(link.path);
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-orange-50 shadow-md dark:bg-orange-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
 <Link to="/" className="flex items-center gap-2">
  <div className="bg-orange-100 dark:bg-orange-800 rounded-full p-1">
    <img
      src={logo}
      alt="Foodie Finder Logo"
      className="h-10 w-10 bg-white object-contain rounded-full"
    />
  </div>
  <span className="text-xl font-bold text-orange-600 dark:text-orange-300">
    Foodie Finder
  </span>
</Link> 
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              <button
                onClick={() => handleNavClick(link)}
                className={`text-lg font-medium flex items-center gap-1 ${
                  location.pathname === link.path
                    ? "text-orange-700 dark:text-rose-300"
                    : "text-gray-600 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-300"
                } transition`}
              >
                {link.name}
                {link.icon && link.icon}
              </button>

              {/* 💖 Favorites badge */}
              {link.name === "Favorites" && count > 0 && (
                <span className="absolute -top-2 -right-3 bg-rose-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                  {count}
                </span>
              )}
            </div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-orange-700 dark:text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-orange-50 dark:bg-orange-950 px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`block w-full text-left text-lg font-medium ${
                location.pathname === link.path
                  ? "text-orange-700 dark:text-rose-300"
                  : "text-gray-600 hover:text-orange-500 dark:text-gray-200 dark:hover:text-orange-300"
              } transition`}
            >
              {link.name}
              {link.icon && link.icon}
            </button>
          ))}
          <ThemeToggle />
        </div>
      )}
    </header>
  );
};

export default Header;
