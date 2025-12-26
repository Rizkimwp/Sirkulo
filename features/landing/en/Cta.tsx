import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-green-900/20">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Have Unused Items? <br />
              <span className="text-green-400">
                Turn Them Into Real Value.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-0 leading-relaxed">
              Join thousands of users and start building a smarter,
              more sustainable circular ecosystem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="px-10 py-5 bg-green-500 text-gray-900 rounded-2xl font-black text-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
