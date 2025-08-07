
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo-1.png"
const Footer = () => {
  return (
    <footer className="bg-orange-100 dark:bg-orange-950 text-gray-800 dark:text-gray-200 w-full pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
               <img
                  src={logo}
                  alt="Foodie Finder Logo"
                  className="h-10 w-10 bg-white object-contain rounded-full"
                />
            <span className="text-2xl font-bold text-orange-600">Foodie Finder</span>
          </Link>
          <p className="text-md">
            Discover and save your favorite meals from around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li>
              <Link to="/" className="hover:text-orange-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-orange-600 transition">Categories</Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-orange-600 transition">Favorites</Link>
            </li>
            <li>
              <Link to="/random" className="hover:text-orange-600 transition">Random Meal</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-white dark:bg-orange-900 border border-orange-200 dark:border-orange-700 text-sm"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-orange-600 dark:text-orange-300">
            <a href="#" className="hover:text-orange-700 transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-orange-700 transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-700 transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-700 transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400 pb-6">
        &copy; {new Date().getFullYear()} Foodie Finder. Built with ❤️ by Aisha.
      </div>
    </footer>
  );
};

export default Footer;
