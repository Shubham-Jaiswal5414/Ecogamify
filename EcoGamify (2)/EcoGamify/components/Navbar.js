"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/about", icon: <span className="mr-2">🌱</span> },
  { name: "Features", href: "/features", icon: <span className="mr-2">✨</span> },
  { name: "Impact", href: "/impact", icon: <span className="mr-2">🌍</span> },
  { name: "Contact", href: "/contact", icon: <span className="mr-2">✉️</span> },
  { name: "AR Games", href: "/ar-games", icon: <span className="mr-2">🕹️</span> },
  { name: "Dashboard", href: "/dashboard", icon: <span className="mr-2">📊</span> },
  { name: "Eco Diary", href: "/eco-diary", icon: <span className="mr-2">📔</span> },
  { name: "Gamification", href: "/gamification", icon: <span className="mr-2">🏆</span> },
  { name: "NGO/CSR", href: "/ngo-csr", icon: <span className="mr-2">🤝</span> },
  { name: "Research", href: "/research", icon: <span className="mr-2">🔬</span> },
  { name: "Technical", href: "/technical", icon: <span className="mr-2">💻</span> },
  { name: "Login", href: "/login", icon: <span className="mr-2">🔑</span> },
  { name: "Register", href: "/register", icon: <span className="mr-2">📝</span> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // ...existing code...
  const [showDemo, setShowDemo] = useState(false);
  const [demoContent, setDemoContent] = useState("");
  const pathname = usePathname();

  function handleNavClick(name) {
    const demoPreviews = {
      "AR Games": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">AR Games Demo</h2>
          <div className="mb-4">Try our interactive AR tree planting game!<br /><span className="inline-block mt-2 p-2 bg-green-100 rounded">🌳 <b>Plant a virtual tree!</b></span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-4xl">🌱</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "Dashboard": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">Dashboard Demo</h2>
          <div className="mb-4">Eco-points: <span className="font-bold text-green-700">1200</span><br />Challenges completed: <span className="font-bold text-green-700">15</span><br />Leaderboard: <span className="font-bold text-green-700">#3</span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">📊 Dashboard Chart</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "Eco Diary": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">Eco Diary Demo</h2>
          <div className="mb-4">"Today I recycled 3 plastic bottles and planted a sapling in my garden."<br /><span className="inline-block mt-2 p-2 bg-green-100 rounded">📝 <b>Eco Diary Entry</b></span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">📔 Diary Preview</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "Gamification": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">Gamification Demo</h2>
          <div className="mb-4">Congratulations!<br />You've earned the <span className="font-bold text-green-700">Green Champion Badge</span> 🏆</div>
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center text-4xl">🏅</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "NGO/CSR": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">NGO/CSR Demo</h2>
          <div className="mb-4">Partnered NGO: <span className="font-bold text-green-700">Green Earth Foundation</span><br />CSR Campaign: <span className="font-bold text-green-700">Plastic-Free School</span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">🤝 NGO Map</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "Research": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">Research Demo</h2>
          <div className="mb-4">Latest Study: <span className="font-bold text-green-700">Impact of Gamification on Student Engagement</span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">🔬 Research Preview</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
      "Technical": (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2 text-green-700">Technical Demo</h2>
          <div className="mb-4">Tech Stack: <span className="font-bold text-green-700">React, Node.js, AI, Cloud</span></div>
          <div className="mb-4 flex justify-center">
            <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">💻 Tech Diagram</div>
          </div>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" onClick={() => setShowDemo(false)}>Close</button>
        </div>
      ),
    };
    if (demoPreviews[name]) {
      setDemoContent(demoPreviews[name]);
      setShowDemo(true);
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-b-2xl shadow-lg font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="EcoGamify Logo" className="h-8 w-8 rounded-full shadow-md mr-2" />
          <span className="font-extrabold text-2xl tracking-wide drop-shadow-lg">EcoGamify</span>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-green-800 focus:outline-none"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <div className="hidden md:flex flex-wrap items-center gap-2 md:gap-4">
          <Link href="/" className={`px-3 py-2 rounded-lg hover:bg-green-900 transition flex items-center ${pathname === "/" ? "bg-green-900" : ""}`} onClick={() => handleNavClick("Home")}>🏠 Home</Link>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-lg hover:bg-green-900 transition flex items-center ${pathname === item.href ? "bg-green-900" : ""}`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-4 animate-fade-in">
            {demoContent}
          </div>
        </div>
      )}
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 bg-green-700 rounded-xl shadow-lg p-4 animate-fade-in">
          <Link href="/" className={`px-3 py-2 rounded-lg hover:bg-green-900 transition flex items-center ${pathname === "/" ? "bg-green-900" : ""}`} onClick={() => handleNavClick("Home")}>🏠 Home</Link>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-lg hover:bg-green-900 transition flex items-center ${pathname === item.href ? "bg-green-900" : ""}`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}