import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الخدمات', path: '/services' },
    { label: 'معرض الأعمال', path: '/portfolio' },
    { label: 'تتبع طلبك', path: '/track' },
    { label: 'من نحن', path: '/about' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#073B35]/10 bg-[#F8F7F3]/95 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap) */}
        <Link
          to="/"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5F55] rounded-xl p-0.5"
          aria-label="يوزرسيف للطباعة والتخصيص"
        >
          <BrandLogo
            variant="green-on-paper"
            className="h-9 sm:h-11 w-auto hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Zone 2: Concise text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#073B35]">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  active
                    ? 'text-[#0B5F55] font-bold'
                    : 'text-[#4d6560] hover:text-[#073B35]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#0B5F55] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/request"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0B5F55] hover:bg-[#073B35] rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <span>ابدأ طلبك الآن</span>
            <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#073B35] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5F55]"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#073B35]/10 bg-[#F8F7F3] px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-[#0B5F55] text-white font-bold'
                      : 'text-[#073B35] hover:bg-black/5'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#073B35]/10 flex flex-col gap-2">
            <Link
              to="/request"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#0B5F55] shadow-sm"
            >
              <span>ابدأ طلبك الآن</span>
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </Link>
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs text-[#4d6560] py-2 hover:text-[#073B35]"
            >
              دخول لوحة الإدارة (Admin Demo)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
