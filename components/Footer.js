export default async function Footer() {
  "use cache";

  return (
    <footer className="bg-amber-800 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Pishang Goreng. All rights reserved.</p>
    </footer>
  );
}