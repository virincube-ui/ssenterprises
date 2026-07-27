import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronRight, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';
import { useState } from 'react';
import config from '../utils/config';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-3 font-semibold text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-slate-950 shadow-soft">
              <span className="text-lg font-bold">SS</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{config.companyName}</p>
              <p className="text-base font-semibold text-slate-900">Logistics & Transport</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition ${location.pathname === item.path ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:info@ssenterprises.com" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Get Quote
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm md:hidden"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {item.label}
                  <FiChevronRight className="text-slate-400" />
                </Link>
              ))}
              <a
                href={`mailto:${config.emailTo}`}
                className="block rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pb-28">{children}</main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-12px_40px_rgba(15,23,42,0.1)] backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <a href={`tel:+${config.phoneNumber}`} className="flex flex-1 items-center justify-center gap-2 rounded-3xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            <FiPhone />
            Call
          </a>
          <a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-3xl bg-brand px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-400">
            <FiMessageSquare />
            WhatsApp
          </a>
          <a href={`mailto:${config.emailTo}`} className="flex flex-1 items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            <FiMail />
            Email
          </a>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{config.companyName}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">Reliable transportation and logistics with customer-first mobile experience and performance-ready delivery.</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Phone: <a href={`tel:+${config.phoneNumber}`} className="text-brand underline">+{config.phoneNumber}</a></p>
              <p>Email: <a href={`mailto:${config.emailTo}`} className="text-brand underline">{config.emailTo}</a></p>
              <p>Website: <a href={config.websiteUrl} className="text-brand underline" target="_blank" rel="noreferrer">{config.websiteUrl}</a></p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Quick Links</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <a key={item.path} href={item.path} className="block hover:text-white">{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Services</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Container Transport</p>
              <p>Open Vehicle</p>
              <p>Mini Pickup</p>
              <p>Heavy Vehicle</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 text-center text-sm text-slate-500 md:px-6">
          <p>
            Developed & Managed by{' '}
            <a href="https://virincube.in" target="_blank" rel="noreferrer" className="text-brand underline">
              VirIncube
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
