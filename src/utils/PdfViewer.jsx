import React from "react";

const PdfViewer = ({ fileUrl, title, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 bg-[#1a1f26] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-gray-400">{title}</h3>
          <button
            className="p-1 text-gray-400 transition-colors cursor-pointer hover:text-purple-500"
            onClick={onClose}
          >
            ✕
          </button>
        </header>
        <div className="modal-body">
          <iframe
            src={fileUrl}
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
