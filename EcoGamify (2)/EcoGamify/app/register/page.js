export default function Register() {
  return (
    <main className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow mt-8">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Register</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Register</button>
      </form>
    </main>
  );
}
