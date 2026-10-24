import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Work', href: '#work' },
    { num: '02', label: 'About', href: '#about' },
    { num: '03', label: 'Skills', href: '#skills' },
    { num: '04', label: 'Credentials', href: '#certifications' },
    { num: '05', label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="group flex items-center gap-2 text-sm sm:text-base font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
            >
              <span className="font-mono text-xs text-emerald-400 group-hover:rotate-45 transition-transform duration-300">▲</span>
              <span>ARYAN KUMAR</span>
            </a>
            
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for AI Roles
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                className="group flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors py-1"
              >
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  {link.num}
                </span>
                <span className="font-medium tracking-wide">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/assets/Aryan_Kumar_Resume.pdf"
              download="Aryan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-all hover:border-emerald-500/40 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-zinc-950/98 border-b border-zinc-800 p-6 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-zinc-400">Available for AI & Automation roles</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
              >
                <span className="font-medium">{link.label}</span>
                <span className="font-mono text-xs text-emerald-400">{link.num}</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/assets/Aryan_Kumar_Resume.pdf"
                download="Aryan_Kumar_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
