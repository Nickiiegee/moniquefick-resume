import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] text-gray-500">
      <div class="w-full h-px bg-linear-to-r from-transparent via-white/35 to-transparent"></div>
      <div className="flex items-center justify-between max-w-6xl px-6 py-6 mx-auto font-mono">
        <p className="text-xs">
          <span className="text-cyan-600">{">_ "}</span> Built with passion and
          code.
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Monique Fick. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
