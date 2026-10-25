export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-amber-800 mb-6">Hubungi Kami</h1>
      <form className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Nama kamu"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pesan</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Tulis pesan..."
          />
        </div>
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded font-semibold"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}