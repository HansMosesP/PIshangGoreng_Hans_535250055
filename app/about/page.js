export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-amber-800 mb-4">Tentang Kami</h1>
      <p className="text-gray-700 mb-4">
        <strong>Pishang Goreng</strong> adalah UMKM yang bergerak di bidang
        kuliner pisang goreng crispy dengan berbagai varian topping modern.
        Berdiri sejak 2020, kami berkomitmen menyajikan camilan berkualitas
        dengan harga terjangkau.
      </p>
      <p className="text-gray-700 mb-4">
        Kami menggunakan pisang pilihan dan minyak goreng berkualitas, serta
        digoreng fresh setiap hari untuk menjaga rasa dan kerenyahan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-3xl font-bold text-amber-600">2020</p>
          <p className="text-sm text-gray-600">Tahun Berdiri</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-3xl font-bold text-amber-600">10+</p>
          <p className="text-sm text-gray-600">Varian Rasa</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-3xl font-bold text-amber-600">1000+</p>
          <p className="text-sm text-gray-600">Pelanggan Setia</p>
        </div>
      </div>
    </section>
  );
}