import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] text-gray-500 border-t border-white/10">
        <div className="flex items-center justify-between max-w-6xl px-6 py-6 mx-auto font-mono">
            <p className="text-xs">
                <span className="text-cyan-600">{">_ "}</span> Built with passion and code.
            </p>
            <p className="text-xs">&copy; {new Date().getFullYear()} Monique Fick. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;