import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowNav(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="relative h-screen flex flex-col">
      {showNav && <Navbar />}
      <Hero />
    </header>
  );
}
