import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Aplikasi Todo List",
    description: "Tugas Praktikum 2 Frontend",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
