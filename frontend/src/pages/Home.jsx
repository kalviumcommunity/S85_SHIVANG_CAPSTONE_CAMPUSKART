import React from "react";
import { ShoppingCart, BookOpen, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <header className="p-6 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
          🛍️ CampusKart
        </h1>
        <nav className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
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
              <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition">
                Explore Marketplace
              </button>
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <ShoppingCart size={32} className="mx-auto text-blue-500" />
            <h3 className="text-xl font-semibold mt-4">Easy Listings</h3>
            <p className="text-gray-600 mt-2">
              Post items with images and categories in seconds.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <BookOpen size={32} className="mx-auto text-green-500" />
            <h3 className="text-xl font-semibold mt-4">Smart Filters</h3>
            <p className="text-gray-600 mt-2">
              Browse by type — books, electronics, essentials & more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
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

      <footer className="text-center text-gray-500 text-sm py-6 border-t mt-20">
        © {new Date().getFullYear()} CampusKart · Built with ❤️ for hostel life
      </footer>
    </div>
  );
}
