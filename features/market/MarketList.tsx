import { Item } from "@/types/market";
import { ShoppingBag, Star, ArrowRight, Search } from "lucide-react";

import Image, { StaticImageData } from "next/image";



interface MarketListProps {
   filteredData: Item[];
   setSearch: (value: string) => void;
   setCategory: (value: string) => void;
}
const MarketList = ({filteredData, setCategory, setSearch} : MarketListProps) => {
    return (
        <div className="flex-1">
            {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-50 shadow-sm hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold rounded-lg shadow-sm border border-white/20">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="bg-white p-3 rounded-full shadow-lg text-green-600 hover:bg-green-600 hover:text-white transition-colors">
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="flex items-center text-orange-400">
                                        <Star fill="currentColor" size={14} />
                                        <span className="text-xs font-bold ml-1 text-gray-600">4.8</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Harga Tukar</span>
                                        <span className="text-xl font-black text-green-600">{item.points} <span className="text-xs font-medium text-gray-400">Poin</span></span>
                                    </div>
                                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-green-600 transition-all shadow-md active:scale-95">
                                        Tukar <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200">
                    <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search size={32} className="text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Barang tidak ditemukan</h3>
                    <p className="text-gray-500">Coba ubah kata kunci atau filter pencarian Anda.</p>
                    <button
                        onClick={() => { setSearch(''); setCategory('Semua'); }}
                        className="mt-6 text-green-600 font-bold hover:underline"
                    >
                        Reset Semua Filter
                    </button>
                </div>
            )}
        </div>
    )
}

export default MarketList;