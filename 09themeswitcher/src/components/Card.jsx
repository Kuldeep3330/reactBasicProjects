import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}