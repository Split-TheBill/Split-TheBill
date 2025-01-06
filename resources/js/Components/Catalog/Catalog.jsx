import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    // Ambil data produk dari API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/products"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="catalog-container py-11">
            <h1 className="text-3xl text-center font-bold mb-8 text-white">
                Produk Digital SplitTheBill
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-[100px]">
                {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={`http://127.0.0.1:8000/${product.image}`}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-700 font-medium mb-4">
                                    Rp{product.price}
                                </p>
                                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                    Langganan
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        Tidak ada produk tersedia.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Catalog;
