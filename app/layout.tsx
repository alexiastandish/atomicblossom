import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import getCurrentUser from "@/actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Atomic Blossom",
  description: "Atomic Blossom Genuine Floral Designs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
        <link rel="stylesheet" href="https://use.typekit.net/ydd2wia.css" />
      </head>
      <body className={`overscroll-none`}>
        <Toaster
          toastOptions={{
            style: {
              background: "pink",
              color: "white",
            },
          }}
        />
        <CartProvider currentUser={currentUser}>
          <div className="flex flex-col  min-h-screen">
            <Navbar currentUser={currentUser} />
            <main className="flex-grow flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
