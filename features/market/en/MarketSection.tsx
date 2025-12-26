'use client';
import { useState } from "react";
import MarketHero from "./MarketHero";
import MarketSidebar from "./MarketSidebar";
import MarketList from "./MarketList";
import { Item } from "@/types/market";

import rice from '@/public/assets/image/rice.jpeg';
import blender from '@/public/assets/image/blender.jpeg';
import laptop from '@/public/assets/image/laptop.jpeg';
import sepatu from '@/public/assets/image/sepatu.webp';
import ps4 from '@/public/assets/image/ps4.jpg';

const catalogData: Item[] = [
  {
    id: 1,
    name: 'Rice Cooker',
    category: 'Kitchen',
    image: rice,
    points: 120,
    description: 'Pre-owned rice cooker in excellent condition, ready to use.',
  },
  {
    id: 2,
    name: 'Blender',
    category: 'Kitchen',
    image: blender,
    points: 80,
    description: 'Compact blender for everyday kitchen needs.',
  },
  {
    id: 3,
    name: 'PS4',
    category: 'Electronics',
    image: ps4,
    points: 200,
    description: 'Pre-owned PS4 complete with controller and cables.',
  },
  {
    id: 4,
    name: 'Laptop',
    category: 'Electronics',
    image: laptop,
    points: 350,
    description: 'Used laptop in good condition, suitable for work and study.',
  },
  {
    id: 5,
    name: 'Sneakers',
    category: 'Fashion',
    image: sepatu,
    points: 60,
    description: 'Comfortable and clean pre-owned sneakers, size 42.',
  },
];

const MarketSection = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [minPoints, setMinPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(1000);

  const categories = ['All', 'Kitchen', 'Electronics', 'Fashion'];

  const filteredData = catalogData.filter((item) => {
    const matchesCategory =
      category === 'All' || item.category === category;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());
    const matchesPoints =
      item.points >= minPoints && item.points <= maxPoints;

    return matchesCategory && matchesSearch && matchesPoints;
  });

  return (
    <section
      id="catalog"
      className="py-16 px-4 sm:px-8 bg-[#F9FAFB] mt-20"
    >
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

        <MarketList
          filteredData={filteredData}
          setCategory={setCategory}
          setSearch={setSearch}
        />
      </div>
    </section>
  );
};

export default MarketSection;
