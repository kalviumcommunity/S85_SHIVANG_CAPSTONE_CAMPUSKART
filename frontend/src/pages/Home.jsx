import React from "react";
import "./home.css"; // Import the CSS file
import { ShoppingCart, BookOpen, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">🛍️ CampusKart</h1>
        <nav className="space-x-4">
          <Link to="/login">
            <button className="nav-button login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button signup">Sign Up</button>
          </Link>
        </nav>
      </header>

      <main className="px-8 py-16 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">A Marketplace for Hostel Students</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buy and sell pre-owned items like books, electronics, clothes, and more — right within your campus. Reduce waste. Save money. Help your peers.
          </p>
          <div className="mt-8">
            <Link to="/marketplace">
              <button className="marketplace-button">
                Explore Marketplace
              </button>
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="card">
            <ShoppingCart size={32} className="mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mt-4">Easy Listings</h3>
            <p className="text-gray-600 mt-2">
              Post items with images and categories in seconds.
            </p>
          </div>
          <div className="card">
            <BookOpen size={32} className="mx-auto text-green-500" />
            <h3 className="text-xl font-semibold mt-4">Smart Filters</h3>
            <p className="text-gray-600 mt-2">
              Browse by type — books, electronics, essentials & more.
            </p>
          </div>
          <div className="card">
            <MessagesSquare size={32} className="mx-auto text-purple-500" />
            <h3 className="text-xl font-semibold mt-4">In-App Chat</h3>
            <p className="text-gray-600 mt-2">
              Connect instantly with sellers and buyers directly.
            </p>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h4 className="text-2xl font-semibold mb-4 text-gray-800">Built for Students, by Students</h4>
          <p className="text-gray-600 max-w-xl mx-auto">
            CampusKart is your go-to sustainable solution for a more affordable and connected hostel life. Join now and start saving — and earning!
          </p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} CampusKart · Built with ❤️ for hostel life
      </footer>
    </div>
  );
}
