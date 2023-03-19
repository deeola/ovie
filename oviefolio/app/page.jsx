import Footer from "./home/Footer";
import Hero from "./home/Hero";
import Nav from "./home/Nav";
import "./page.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <main >
      <div className="main">
      <Nav />
      <Hero />
      <Footer />
      </div>

    </main>
  )
}
