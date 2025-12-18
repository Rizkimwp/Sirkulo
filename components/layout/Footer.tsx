import Link from "next/link";


const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-6 px-4 sm:px-8 text-center text-sm">
    <div className="max-w-6xl mx-auto">
      <p>&copy; {new Date().getFullYear()}  Sirkulo: Dari Rumah ke Rumah, Tanpa Jadi Sampah</p>
      <div className="mt-2 space-x-4">
        <Link href="/about" className="hover:text-white transition duration-200">Tentang Kami</Link>
        <Link href="/faq" className="hover:text-white transition duration-200">FAQ</Link>
        <Link href="/kebijakan" className="hover:text-white transition duration-200">Kebijakan Privasi</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
