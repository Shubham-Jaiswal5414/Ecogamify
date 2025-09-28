export default function Features() {
	return (
		<main className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
			<h1 className="text-2xl font-bold text-green-700 mb-4">Platform Features</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">📊</span>
					<div className="font-bold mb-2">Student Dashboard</div>
					<div className="text-green-900 text-center">Track activities, achievements, and eco-points.</div>
				</div>
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">🌱</span>
					<div className="font-bold mb-2">Eco-Challenges</div>
					<div className="text-green-900 text-center">Daily/weekly tasks like recycling, energy saving, tree planting.</div>
				</div>
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">🏆</span>
					<div className="font-bold mb-2">Leaderboards</div>
					<div className="text-green-900 text-center">Rankings at individual, class, and institution level.</div>
				</div>
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">🎖️</span>
					<div className="font-bold mb-2">Badges & Rewards</div>
					<div className="text-green-900 text-center">Recognition for milestones and achievements.</div>
				</div>
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">📈</span>
					<div className="font-bold mb-2">Institutional Analytics</div>
					<div className="text-green-900 text-center">Real-time reports on engagement and impact.</div>
				</div>
				<div className="bg-green-50 rounded-xl shadow p-4 flex flex-col items-center">
					<span className="text-3xl mb-2">🤝</span>
					<div className="font-bold mb-2">Community Integration</div>
					<div className="text-green-900 text-center">Collaboration, competitions, and local eco-projects.</div>
				</div>
			</div>
		</main>
	);
}
