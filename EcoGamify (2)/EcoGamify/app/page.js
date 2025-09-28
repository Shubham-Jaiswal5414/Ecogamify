export default function Home() {
  return (
    <main className="space-y-12 p-4 md:p-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow p-8">
        <img src="/logo.png" alt="EcoGamify Logo" className="h-24 w-24 rounded-full shadow-lg" />
        <div>
          <h1 className="text-4xl font-extrabold text-green-800 mb-2">EcoGamify</h1>
          <p className="text-xl text-green-900 mb-2">Gamifying sustainability for schools & colleges</p>
          <div className="flex gap-2 mt-2">
            <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">SDG 4</span>
            <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">SDG 11</span>
            <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">SDG 12</span>
            <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">SDG 13</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">📊</span>
            <h3 className="font-bold mb-2">Student Dashboard</h3>
            <p className="text-green-900 text-center">Track activities, achievements, and eco-points.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🌱</span>
            <h3 className="font-bold mb-2">Eco-Challenges</h3>
            <p className="text-green-900 text-center">Daily/weekly tasks like recycling, energy saving, tree planting.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🏆</span>
            <h3 className="font-bold mb-2">Leaderboards</h3>
            <p className="text-green-900 text-center">Rankings at individual, class, and institution level.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🎖️</span>
            <h3 className="font-bold mb-2">Badges & Rewards</h3>
            <p className="text-green-900 text-center">Recognition for milestones and achievements.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">📈</span>
            <h3 className="font-bold mb-2">Institutional Analytics</h3>
            <p className="text-green-900 text-center">Real-time reports on engagement and impact.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-4xl mb-2">🤝</span>
            <h3 className="font-bold mb-2">Community Integration</h3>
            <p className="text-green-900 text-center">Collaboration, competitions, and local eco-projects.</p>
          </div>
        </div>
      </section>

      {/* Objectives & Audience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Objectives</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Instill sustainable habits in students</li>
            <li>Digital tools for institutions</li>
            <li>Continuous, fun engagement</li>
            <li>Build a green student community</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Target Audience</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Students (10–22 years)</li>
            <li>Teachers, administrators, policymakers</li>
            <li>NGOs, eco-clubs, government bodies</li>
          </ul>
        </div>
      </section>

      {/* Benefits & Innovation */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Benefits</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Motivation, teamwork, leadership</li>
            <li>Measurable impact for institutions</li>
            <li>Eco-conscious citizens</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Innovation</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Education + gamification + sustainability</li>
            <li>AI/ML analytics for impact</li>
            <li>Community-driven ecosystem</li>
            <li>IoT integration potential</li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Use Cases</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-green-100 rounded-xl shadow p-6 w-64 flex flex-col items-center">
            <span className="text-3xl mb-2">🏫</span>
            <div className="font-bold mb-2">Schools</div>
            <ul className="list-disc ml-4 text-green-900 text-left">
              <li>Recycling tasks</li>
              <li>Energy-saving competitions</li>
              <li>Plastic-free campaigns</li>
            </ul>
          </div>
          <div className="bg-green-100 rounded-xl shadow p-6 w-64 flex flex-col items-center">
            <span className="text-3xl mb-2">🎓</span>
            <div className="font-bold mb-2">Colleges</div>
            <ul className="list-disc ml-4 text-green-900 text-left">
              <li>Hackathons</li>
              <li>Sustainability challenges</li>
              <li>Tree plantation drives</li>
            </ul>
          </div>
          <div className="bg-green-100 rounded-xl shadow p-6 w-64 flex flex-col items-center">
            <span className="text-3xl mb-2">🌏</span>
            <div className="font-bold mb-2">Community</div>
            <ul className="list-disc ml-4 text-green-900 text-left">
              <li>Inter-school competitions</li>
              <li>NGO collaborations</li>
              <li>Eco-rankings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack & Impact */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Technology Stack</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Frontend: React/Flutter</li>
            <li>Backend: Node.js / Python</li>
            <li>Database: PostgreSQL / MongoDB</li>
            <li>Gamification Engine: Custom APIs</li>
            <li>AI Integration: Image recognition</li>
            <li>Cloud: AWS/Azure/Google Cloud</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">Impact Measurement</h2>
          <ul className="list-disc ml-6 text-green-900">
            <li>Trees planted</li>
            <li>Waste reduced/recycled</li>
            <li>Energy conserved</li>
            <li>Carbon footprint reduction</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 rounded-xl shadow p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to join the EcoGamify movement?</h2>
        <p className="mb-4">Empower your institution and students for a greener tomorrow.</p>
        <a href="/register" className="bg-white text-green-700 px-6 py-3 rounded-full font-bold shadow hover:bg-green-100 transition">Get Started</a>
      </section>
    </main>
  );
}