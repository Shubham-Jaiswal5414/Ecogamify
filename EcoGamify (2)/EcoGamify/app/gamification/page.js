export default function Gamification() {
	return (
		<div>
			<main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
				<h1 className="text-2xl font-bold text-green-700 mb-4">Gamification</h1>
				<p className="text-green-900">Earn points, badges, and rewards for completing eco-challenges and making a difference!</p>
			</main>
			<section className="mt-8 p-6 bg-green-50 rounded-xl shadow">
				<h2 className="text-xl font-bold mb-2 text-green-700">Gamification Demo</h2>
				<div className="mb-4">Congratulations!<br />You've earned the <span className="font-bold text-green-700">Green Champion Badge</span> 🏆</div>
				<div className="mb-4 flex justify-center">
					<div className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center text-4xl">🏅</div>
				</div>
			</section>
		</div>
	);
}
