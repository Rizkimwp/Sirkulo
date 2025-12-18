'use client';
import { useState } from "react";
import MarketHero from "./MarketHero";
import MarketSidebar from "./MarketSidebar";
import MarketList from "./MarketList";
import { Item } from "@/types/market";
import rice from '@/public/assets/image/rice.jpeg'
import blender from '@/public/assets/image/blender.jpeg'
import laptop from '@/public/assets/image/laptop.jpeg'
import sepatu from '@/public/assets/image/sepatu.webp'
import ps4 from '@/public/assets/image/ps4.jpg'

const catalogData: Item[] = [
    { id: 1, name: 'Rice Cooker', category: 'Dapur', image: rice, points: 120, description: 'Rice cooker bekas tapi masih mulus, siap pakai.' },
    { id: 2, name: 'Blender', category: 'Dapur', image: blender, points: 80, description: 'Blender kecil untuk kebutuhan dapur sehari-hari.' },
    { id: 3, name: 'PS4', category: 'Elektronik', image: ps4, points: 200, description: 'PS4 bekas lengkap dengan controller dan kabel.' },
    { id: 4, name: 'Laptop', category: 'Elektronik', image: laptop, points: 350, description: 'Laptop bekas kondisi baik, cocok untuk kerja dan belajar.' },
    { id: 5, name: 'Sepatu Sneakers', category: 'Fashion', image: sepatu, points: 60, description: 'Sepatu bekas nyaman dan bersih, ukuran 42.' },
];
const MarketSection = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('Semua');
    const [minPoints, setMinPoints] = useState(0);
    const [maxPoints, setMaxPoints] = useState(1000);

    const categories = ['Semua', 'Dapur', 'Elektronik', 'Fashion'];
    const filteredData = catalogData.filter((item) => {
        const matchesCategory = category === 'Semua' || item.category === category;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesPoints = item.points >= minPoints && item.points <= maxPoints;
        return matchesCategory && matchesSearch && matchesPoints;
    });
    return (
        <section id="catalog" className="py-16 px-4 sm:px-8 bg-[#F9FAFB] mt-20">
            <MarketHero search={search} setSearch={setSearch} />
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10">

                <MarketSidebar
                    categories={categories}
                    category={category}
                    maxPoints={maxPoints}
                    minPoints={minPoints}
                    setCategory={setCategory}
                    setMaxPoints={setMaxPoints}
                    setMinPoints={setMinPoints}
                />

                <MarketList filteredData={filteredData} setCategory={setCategory} setSearch={setSearch} />
            </div>
        </section>
    )
}

export default MarketSection;