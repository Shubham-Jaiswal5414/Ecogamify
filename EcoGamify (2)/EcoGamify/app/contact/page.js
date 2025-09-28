export default function Contact() {
	return (
		<main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-8">
			<h1 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h1>
			<p className="mb-4 text-green-900">We'd love to hear from you! Please reach out with any questions, feedback, or partnership opportunities.</p>
			<form className="space-y-4">
				<input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
				<input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
				<textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4} required />
				<button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Send</button>
			</form>
		</main>
	);
}
