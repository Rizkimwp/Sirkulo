import { Filter } from "lucide-react"

interface MarketSidebarProps {
    categories: string[];
    category: string;
    minPoints: number;
    setMinPoints: (points: number) => void;
    maxPoints: number;
    setMaxPoints: (points: number) => void;
    setCategory: (category: string) => void;
}

const MarketSidebar = ({categories, category,minPoints,setMinPoints, maxPoints, setMaxPoints,setCategory}:MarketSidebarProps) => {
    return (
        < aside className="w-full lg:w-1/4 space-y-8" >
            <div className="bg-white p-7 rounded-[2rem] border border-gray-50 shadow-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
                    <Filter className="w-5 h-5 text-gray-800" />
                    <h3 className="text-xl font-bold text-gray-800">Filter</h3>
                </div>

                {/* Category Selector */}
                <div className="mb-8">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Kategori</label>
                    <div className="flex flex-col gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${category === cat
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-100'
                                    : 'bg-transparent text-gray-600 hover:bg-green-50 hover:text-green-700'
                                    }`}
                            >
                                {cat}
                                {category === cat && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Points Range Slider Replacement */}
                <div>
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Rentang Poin</label>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 ml-1">MIN</span>
                            <input
                                type="number"
                                className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-sm font-semibold"
                                value={minPoints}
                                onChange={(e) => setMinPoints(Number(e.target.value))}
                            />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 ml-1">MAX</span>
                            <input
                                type="number"
                                className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-sm font-semibold"
                                value={maxPoints}
                                onChange={(e) => setMaxPoints(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )

}

export default MarketSidebar;