import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Producto 1", description: "Descripción 1", price: "$20", image: "/images/product1.jpg" },
  { id: 2, name: "Producto 2", description: "Descripción 2", price: "$35", image: "/images/product2.jpg" },
  { id: 3, name: "Producto 3", description: "Descripción 3", price: "$35", image: "/images/product3.jpg" },
];

const Catalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 text-white">
      <h2 className="text-2xl font-bold mb-6">Catálogo</h2>

      {/* Galería con navegación */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={prevImage} className="bg-amber-500 px-4 py-2 rounded-full hover:bg-amber-700 transition-all">
          ◀
        </button>
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:brightness-125 transition-all"
          onClick={() => setSelectedProduct(products[currentIndex])}
        />
        <button onClick={nextImage} className="bg-amber-500 px-4 py-2 rounded-full hover:bg-amber-700 transition-all">
          ▶
        </button>
      </div>

      {/* Modal para mostrar detalles del producto */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p className="font-bold">{selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} className="mt-4 bg-red-500 px-4 py-2 text-white rounded hover:bg-red-700">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Vista en lista */}
      <h3 className="text-xl font-bold mt-10">Todos los productos</h3>
      <div className="mt-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 border-b border-gray-300 py-2">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p>{product.description}</p>
              <p className="font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Catalog;
