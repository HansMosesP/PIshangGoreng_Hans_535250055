import Button from "@/components/Button";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
      <div className="md:w-1/2 text-center md:text-left">
        <span className="bg-amber-100 text-amber-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 inline-block">
          🍌 Camilan Crispy Favorit Keluarga
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Nikmati Renyahnya <br />
          <span className="text-amber-500">Pishang Goreng</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
          Dibuat dari pisang pilihan, digoreng *fresh* setiap hari. Tersedia berbagai macam topping manis dan gurih yang bikin nagih!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button href="/products">Pesan Sekarang</Button>
          <Button href="/about" variant="secondary">
            Kenali Kami
          </Button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-amber-200 to-amber-50 rounded-[3rem] shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-20 transform rotate-12">🍌</div>
          <div className="absolute bottom-8 left-4 text-6xl opacity-20 transform -rotate-12">🍌</div>
          <span className="text-9xl drop-shadow-xl">🍌</span>
        </div>
      </div>
    </section>
  );
}