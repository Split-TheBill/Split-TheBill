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
        <div className="catalog-container py-8">
            <h1 className="text-3xl text-center font-bold mb-12 text-white">
                Produk Digital SplitTheBill
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 px-4">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] mx-auto"
                            >
                                <div className="flex justify-center items-center h-[250px] w-[300px] bg-gray-100">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${product.image}`}
                                        alt={product.name}
                                        className="max-w-[100px] max-h-[100px] object-contain"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg font-semibold mb-2">
                                        {product.name}
                                    </h2>
                                    <div className="text-gray-700 font-medium mb-4">
                                        <p>Harga Langganan:</p>
                                        <ul>
                                            {product.price_per_month ? (
                                                <li>
                                                    Rp{product.price_per_month}{" "}
                                                    / Bulan
                                                </li>
                                            ) : (
                                                <li>Harga tidak tersedia</li>
                                            )}
                                        </ul>
                                    </div>
                                    <button className="w-full bg-langganan text-white py-2 px-4 rounded hover:bg-blue-600 transition">
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
        </div>
    );
};

export default Catalog;
