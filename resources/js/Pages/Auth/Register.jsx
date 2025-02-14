import React, { useState } from "react";
import Starfield from "react-starfield";
import { Link } from "@inertiajs/react";


const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        try {
            const response = await axios.post(
                "http://your-backend-url/api/register",
                form
            );
            alert("Registration successful!");
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <>
            <Starfield />

            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md p-6 rounded shadow-md">
                    <h1 className="text-2xl font-semibold text-center text-white">
                        Register
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-4">
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500">
                                    {errors.name[0]}
                                </p>
                            )}
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Your email"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email[0]}
                                </p>
                            )}
                        </div>
                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password[0]}
                                </p>
                            )}
                        </div>
                        {/* Password Confirmation */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                value={form.password_confirmation}
                                onChange={handleChange}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Confirm password"
                            />
                            {errors.password_confirmation && (
                                <p className="text-sm text-red-500">
                                    {errors.password_confirmation[0]}
                                </p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
