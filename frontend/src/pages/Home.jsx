// src/pages/Home.jsx
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";


const demoProducts = [
  { id: 1, title: "Physics Book", price: 150, image: "/book.jpg" },
  { id: 2, title: "Used Headphones", price: 500, image: "/headphones.jpg" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Buy & Sell in Your Hostel 🚀</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {demoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
