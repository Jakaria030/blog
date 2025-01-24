import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Blog | Home",
  description: "This is home page."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        <Navbar></Navbar>
        <div className="flex-grow">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
