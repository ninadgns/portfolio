import { Sun, Moon } from 'lucide-react';

export default function Navigation({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void; }) {
  return (
    <nav className="fixed top-0 w-full glass-effect z-50 border-b-4" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-extrabold gradient-text tracking-tight">Ninad</h1>
          <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="transition-colors font-semibold" style={{ color: 'var(--foreground)' }}>About</a>
              <a href="#experience" className="transition-colors font-semibold" style={{ color: 'var(--foreground)' }}>Experience</a>
              <a href="#projects" className="transition-colors font-semibold" style={{ color: 'var(--foreground)' }}>Projects</a>
              <a href="#achievements" className="transition-colors font-semibold" style={{ color: 'var(--foreground)' }}>Achievements</a>
              <a href="#contact" className="transition-colors font-semibold" style={{ color: 'var(--foreground)' }}>Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 border-2 border-[var(--border)] font-semibold hover-scale"
                style={{ background: 'var(--background)', color: 'var(--foreground)', boxShadow: '4px 4px 0 0 var(--border)' }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 border-2 border-[var(--border)] font-semibold hover-scale"
                style={{ background: 'var(--background)', color: 'var(--foreground)', boxShadow: '4px 4px 0 0 var(--border)' }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="p-2 border-2 border-[var(--border)] font-semibold hover-scale" style={{ color: 'var(--foreground)', background: 'var(--background)', boxShadow: '4px 4px 0 0 var(--border)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
}