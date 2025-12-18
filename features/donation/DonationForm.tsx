import { DonationRecord } from "@/types/donation";
import { ImageIcon, Package, User } from "lucide-react";
import { useState } from "react";

type Props = {
    categories: string[];
    onSubmit: (data: {
      name: string;
      itemName: string;
      category: string;
      description?: string;
      image?: string;
    }) => void;
  };

  
const DonationForm = ({ categories, onSubmit }: Props) => {
    const [name, setName] = useState('');
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('Dapur');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
 


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !itemName || !category) return;

        onSubmit({
            name,
            itemName,
            category,
            description,
            image: image ? URL.createObjectURL(image) : undefined,
          });
      
        setName('');
        setItemName('');
        setCategory('Dapur');
        setDescription('');
        setImage(null);
    };

    return (
        < div className="lg:col-span-5" >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-green-100/50 border border-green-50 sticky top-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <Package className="text-green-500" /> Form Donasi
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Nama Lengkap</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Contoh: Budi Santoso"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Nama Barang</label>
                            <input
                                type="text"
                                placeholder="Sofa, Meja, dll"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all outline-none"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Kategori</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all outline-none bg-white"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Deskripsi</label>
                        <textarea
                            placeholder="Ceritakan kondisi barang Anda..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all outline-none resize-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Foto Barang</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                                    <ImageIcon className="w-8 h-8 mb-2" />
                                    <p className="text-xs uppercase font-bold tracking-wider">{image ? image.name : 'Upload Foto'}</p>
                                </div>
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        Kirim Donasi Sekarang
                    </button>
                </form>
            </div>
        </div >

    )
}

export default DonationForm;