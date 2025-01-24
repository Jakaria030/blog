import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Blog | Home",
  description: "This is home page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
