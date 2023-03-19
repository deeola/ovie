import "./globals.css";
import {Montserrat} from "@next/font/google";
import Nav from "./home/Nav";
import Footer from "./home/Footer";

const monstserrat = Montserrat({
  weight: ["400","700","500",],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monstserrat.className}`}>
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
