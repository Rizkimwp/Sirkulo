import { Search } from "lucide-react";

const MarketHero = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="max-w-2xl text-left">
        <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
          Eco-Friendly Exchange
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Sirkulo <span className="text-green-600">Market</span>
        </h2>
        <p className="text-lg text-gray-500">
          Redeem the points you’ve earned for high-quality items ready to find a new owner.
        </p>
      </div>

      {/* Modern Search Bar */}
      <div className="relative w-full md:w-80 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors w-5 h-5" />
        <input
          type="text"
          placeholder="Search for hidden treasures..."
          className="w-full text-cyan-800 pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MarketHero;
