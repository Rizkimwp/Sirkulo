import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-6 px-4 sm:px-8 text-center text-sm">
    <div className="max-w-6xl mx-auto">
      <p>
        &copy; {new Date().getFullYear()} Sirkulo — From Homes to Businesses,
        Without Becoming Waste
      </p>
      <div className="mt-2 space-x-4">
        <Link href="/en/about" className="hover:text-white transition duration-200">
          About Us
        </Link>
        <Link href="/en/faq" className="hover:text-white transition duration-200">
          FAQ
        </Link>
        <Link
          href="/en/privacy-policy"
          className="hover:text-white transition duration-200"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
