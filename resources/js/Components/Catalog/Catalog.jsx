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
        <>
            <div className="catalog-container py-[2rem]">
                <h1 className="text-[1.875rem] text-center font-bold mb-[3rem] text-white">
                    Produk Digital SplitTheBill
                </h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2rem] gap-y-[2.5rem] px-[1rem]">
                        {Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-[21.875rem] sm:max-w-[25rem] md:max-w-[28.125rem] mx-auto"
                                >
                                    <div className="flex justify-center items-center h-[15.625rem] w-[18.75rem] bg-product_color">
                                        <img
                                            src={`http://127.0.0.1:8000/storage/${product.image}`}
                                            alt={product.name}
                                            className="max-w-[6.25rem] max-h-[6.25rem] object-contain"
                                        />
                                    </div>
                                    <div className="p-[1.5rem]">
                                        <h2 className="text-[1.125rem] font-semibold mb-[0.5rem]">
                                            {product.name}
                                        </h2>
                                        <div className="text-gray-700 font-medium mb-[1rem]">
                                            <p>Harga Langganan:</p>
                                            <ul>
                                                {product.price_per_month ? (
                                                    <li>
                                                        Rp
                                                        {
                                                            product.price_per_month
                                                        }{" "}
                                                        / Bulan
                                                    </li>
                                                ) : (
                                                    <li>
                                                        Harga tidak tersedia
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <button className="w-full bg-langganan text-white py-[0.5rem] px-[1rem] rounded hover:bg-blue-900 transition">
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
        </>
    );
};

export default Catalog;
