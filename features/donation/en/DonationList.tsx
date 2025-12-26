import { DonationRecord } from "@/types/donation";
import { CheckCircle, ImageIcon } from "lucide-react";
import Image from "next/image";

const DonationList = ({ donations }: { donations: DonationRecord[] }) => {
  return (
    <div className="lg:col-span-7">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
          Latest Donations
        </h3>
        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
          {donations.length} Items Listed
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              {donation.image ? (
                <Image
                  src={donation.image}
                  alt={donation.itemName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <ImageIcon size={48} />
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold rounded-lg shadow-sm">
                  {donation.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-800 text-lg leading-tight">
                  {donation.itemName}
                </h4>
                <CheckCircle className="text-blue-500 w-5 h-5" />
              </div>

              <p className="text-gray-500 text-sm mb-4 line-clamp-2 italic">
                {donation.description || 'No description provided.'}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
                    {donation.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {donation.name}
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                  {donation.createdAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;
