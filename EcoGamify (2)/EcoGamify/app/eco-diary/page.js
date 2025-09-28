export default function EcoDiary() {
		return (
			<div>
				<main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
					<h1 className="text-2xl font-bold text-green-700 mb-4">Eco Diary</h1>
					<p className="text-green-900">Document your sustainability journey and reflect on your eco-friendly actions.</p>
				</main>
				<section className="mt-8 p-6 bg-green-50 rounded-xl shadow">
					<h2 className="text-xl font-bold mb-2 text-green-700">Eco Diary Demo</h2>
					<div className="mb-4">"Today I recycled 3 plastic bottles and planted a sapling in my garden."<br /><span className="inline-block mt-2 p-2 bg-green-100 rounded">📝 <b>Eco Diary Entry</b></span></div>
					<div className="mb-4 flex justify-center">
						<div className="w-32 h-20 bg-green-100 rounded shadow flex items-center justify-center text-lg">📔 Diary Preview</div>
					</div>
				</section>
			</div>
		);
	}
