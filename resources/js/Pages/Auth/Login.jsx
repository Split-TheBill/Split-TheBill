import React, { useState } from "react";
import axios from "axios";
import Starfield from "react-starfield";
import { Link } from "@inertiajs/react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password,
            });

            // Simpan token atau data login ke localStorage/sessionStorage
            localStorage.setItem("authToken", response.data.token);

            alert("Login berhasil!");
            console.log("User data:", response.data);

            // Redirect ke halaman lain jika diperlukan
            window.location.href = "/home"; // Ganti dengan rute yang sesuai
        } catch (err) {
            if (err.response && err.response.data.message) {
                setError(err.response.data.message); // Tampilkan pesan error dari backend
            } else {
                setError("Terjadi kesalahan. Silakan coba lagi.");
            }
        }
    };

    return (
        <>
            {/* Starfield Background */}
            <Starfield />
            <section className="min-h-screen flex items-center justify-center bg-[#06061C]">
                {/* Logo Section */}
                <div className="absolute top-4 left-[120px]">
                    <Link href="/home">
                        <img
                            src="images/Logo_New.svg"
                            alt="Logo"
                            className="w-[200px] h-[200px] cursor-pointer hover:opacity-80"
                        />
                    </Link>
                </div>

                {/* Login Box */}
                <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                        Login
                    </h2>
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="text-indigo-600 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm text-gray-300"
                                >
                                    Ingatkan Saya
                                </label>
                            </div>
                            <a
                                href="/ResetPassword"
                                className="text-sm text-indigo-400 hover:underline"
                            >
                                Lupa Password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-semibold"
                        >
                            Login
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-6 text-center text-gray-300">
                        Belum punya akun?{" "}
                        <a
                            href="/register"
                            className="text-indigo-400 hover:underline"
                        >
                            Daftar
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
