export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 px-4 mt-12 rounded-t-2xl shadow-inner text-center">
      <div className="mb-2 font-bold text-lg flex items-center justify-center gap-2">
        <img src="/logo.png" alt="EcoGamify Logo" className="h-6 w-6 rounded-full inline-block" />
        EcoGamify
      </div>
      <div className="mb-2">Empowering students for a sustainable future.</div>
      <div className="text-sm">&copy; {new Date().getFullYear()} EcoGamify. All rights reserved.</div>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300" aria-label="Instagram">Instagram</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300" aria-label="Facebook">Facebook</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300" aria-label="LinkedIn">LinkedIn</a>
      </div>
    </footer>
  );
}