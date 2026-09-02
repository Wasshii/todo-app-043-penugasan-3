"use client";

import Link from "next/link";

export default function RegisterForm() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-sm my-8">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Register</h2>
                <p className="text-sm text-gray-500 mt-1">Buat akun baru</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        placeholder="Masukkan nama"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Masukkan email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Masukkan password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Konfirmasi Password
                    </label>
                    <input
                        type="password"
                        placeholder="Ulangi password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2 text-sm">
                    Register
                </button>
            </form>
            <p className="text-center text-sm mt-6 text-gray-600">
                Sudah punya akun?{" "}
                <Link
                    href="/login"
                    className="text-blue-600 hover:underline font-medium">
                    Login di sini
                </Link>
            </p>
        </div>
    );
}
