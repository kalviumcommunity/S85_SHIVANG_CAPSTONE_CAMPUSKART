// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
        <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
        <h3 className="mt-2 font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600">{product.price} ₹</p>
        <button className="mt-2 w-full bg-purple-600 text-white py-1 rounded hover:bg-purple-700">
          View Details
        </button>
      </div>
    );
  }
  