import { Sun, Moon } from 'lucide-react';

export default function Navigation({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void; }) {
  return (
    <nav className="fixed top-0 w-full glass-effect z-50 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold gradient-text">Ninad</h1>
          <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>About</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Experience</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Projects</a>
              <a href="#achievements" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Achievements</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors" style={{ color: 'var(--muted)' }}>Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-colors hover-scale"
                style={{
                  background: 'var(--border)',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-colors hover-scale"
                style={{
                  background: 'var(--border)',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)'
                }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="hover:text-blue-600 hover-scale" style={{ color: 'var(--muted)' }}>
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