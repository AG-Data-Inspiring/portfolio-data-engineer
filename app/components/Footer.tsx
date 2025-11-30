export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 sm:px-12 py-12 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">Angela's Portfolio</h3>
          <p className="text-sm">Data Engineer | Analytics | Problem Solver</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/story" className="hover:text-white transition">Story</a></li>
            <li><a href="/live-tool" className="hover:text-white transition">Live Tool</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Connect</h4>
          <ul className="text-sm space-y-2">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="mailto:contact@angela.dev" className="hover:text-white transition">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>&copy; 2025 Angela's Data Journey. Built with Next.js, Tailwind CSS & MDX.</p>
      </div>
    </footer>
  );
}
