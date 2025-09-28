export default function Dashboard() {
	return (
			<div>
				<main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
					<h1 className="text-2xl font-bold text-green-700 mb-4">Dashboard</h1>
					<p className="text-green-900">Track your progress, achievements, and eco-points in one place.</p>
				</main>
				<section className="mt-8 p-6 bg-green-50 rounded-xl shadow">
					<h2 className="text-xl font-bold mb-2 text-green-700">Dashboard Demo</h2>
					<div className="mb-4">Eco-points: <span className="font-bold text-green-700">1200</span><br />Challenges completed: <span className="font-bold text-green-700">15</span><br />Leaderboard: <span className="font-bold text-green-700">#3</span></div>
					<div className="mb-4 flex justify-center">
						<div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">📊 Dashboard Chart</div>
					</div>
				</section>
			</div>
	);
}
