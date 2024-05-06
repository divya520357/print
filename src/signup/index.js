import React, { useState } from 'react';
import Header from '../Header';

export default function SignUp
    () {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        role: 'Teacher', // Default role
        department: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRoleChange = (e) => {
        setFormData({
            ...formData,
            role: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://printmania.azurewebsites.net/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    role: formData.role,
                    department: formData.department,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                console.log('Form data sent successfully');
                // You can perform additional actions after a successful submission
            } else {
                console.error('Failed to send form data');
                // Handle error cases here
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <section className="text-gray-600 body-font">
            <Header />
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">
                        Get ready for <b>Print-O-Mania</b>
                    </h1>
                    <p className="leading-relaxed mt-4">Sign up to get your prints now.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="fullName" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="role" className="leading-7 text-sm text-gray-600">
                                Role
                            </label>

                            <div className="flex items-center mb-4">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    value="Student"
                                    name="role"
                                    checked={formData.role === 'Student'}
                                    onChange={handleRoleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Student
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-radio-2"
                                    type="radio"
                                    value="Teacher"
                                    name="role"
                                    checked={formData.role === 'Teacher'}
                                    onChange={handleRoleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Teacher
                                </label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-radio-3"
                                    type="radio"
                                    value="Admin"
                                    name="role"
                                    checked={formData.role === 'Admin'}
                                    onChange={handleRoleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Admin
                                </label>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="department" className="leading-7 text-sm text-gray-600">
                                Department
                            </label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                                Set a password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Sign Up
                        </button>
                        <p className="text-xs text-gray-500 mt-3 text-center">Happy Printing!</p>
                    </form>
                </div>
            </div>
        </section>
    )
}
