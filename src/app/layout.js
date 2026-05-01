import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import './globals.css';

export const metadata = {
  title: 'Tilecraft Gallery',
  description: 'Premium tile designs for modern architectural spaces.',
   icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
