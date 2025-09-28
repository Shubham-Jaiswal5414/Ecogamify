export default function ARGames() {
	return (
		<div>
			<main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
				<h1 className="text-2xl font-bold text-green-700 mb-4">AR Games</h1>
				<p className="text-green-900">Experience augmented reality games that make learning about sustainability fun and interactive!</p>
			</main>
			<section className="mt-8 p-6 bg-green-50 rounded-xl shadow">
				<h2 className="text-xl font-bold mb-2 text-green-700">AR Games Demo</h2>
				<div className="mb-4">Try our interactive AR tree planting game!<br /><span className="inline-block mt-2 p-2 bg-green-100 rounded">🌳 <b>Plant a virtual tree!</b></span></div>
				<div className="mb-4 flex justify-center">
					<div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-4xl">🌱</div>
				</div>
			</section>
		</div>
	);
}
