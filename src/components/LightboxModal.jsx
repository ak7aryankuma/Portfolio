import React, { useEffect } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';

export default function LightboxModal({ isOpen, imageSrc, title, subtitle, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-[#121215] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/60">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-zinc-100">{title}</h3>
            {subtitle && <p className="text-xs text-zinc-400 font-mono mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={imageSrc} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#09090b]">
          <img 
            src={imageSrc} 
            alt={title || "Full preview"} 
            className="max-h-[78vh] w-auto max-w-full object-contain rounded shadow-lg border border-zinc-900"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
