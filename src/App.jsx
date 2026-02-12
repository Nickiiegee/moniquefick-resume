import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-hidden">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
