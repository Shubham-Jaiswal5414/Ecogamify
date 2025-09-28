export default function Technical() {
  return (
    <main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Technical</h1>
        <p className="text-green-900">Learn about the technical architecture and tools powering EcoGamify.</p>
        <div>
          <section className="mt-8 p-6 bg-green-50 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2 text-green-700">Technical Demo</h2>
            <div className="mb-4">Tech Stack: <span className="font-bold text-green-700">React, Node.js, AI, Cloud</span></div>
            <div className="mb-4 flex justify-center">
              <div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">💻 Tech Diagram</div>
            </div>
          </section>
        </div>
    </main>
  );
}
