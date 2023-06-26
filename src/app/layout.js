import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akwụkwọ",
  description: "akwụkwọ e-learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>

        <main className="bg-gray-100 outline-[#286f6b]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
