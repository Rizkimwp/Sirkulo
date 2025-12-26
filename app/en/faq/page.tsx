import React from 'react';
import {
  UploadCloud,
  ShieldCheck,
  BadgeCheck,
  ShoppingBag,
  ArrowRight,
  Search,
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Does Sirkulo Work?',
};

const steps = [
  {
    icon: UploadCloud,
    title: 'Upload Items',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description:
      'Take photos of your unused items, provide an honest description, and submit them through the app.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Curation',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    description:
      'Our expert team reviews eligibility, authenticity, and physical condition to maintain community standards.',
  },
  {
    icon: BadgeCheck,
    title: 'Earn Points',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description:
      'Once approved, Sirkulo points are credited automatically. Better condition means higher points.',
  },
  {
    icon: ShoppingBag,
    title: 'Redeem Items',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    description:
      'Use your points to redeem other high-quality items from Sirkulo’s verified catalog.',
  },
];

const Faq: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <h2 className="text-xs font-black text-green-700 uppercase tracking-[0.2em]">
              Simple & Verified Process
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            How Does <span className="text-green-600">Sirkulo</span> Work?
          </h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We ensure every circulating item meets high-quality standards
            through a transparent and professional curation process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12%] w-[76%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group flex flex-col items-center">
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 ${step.bgColor} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>

                    <div
                      className={`relative w-24 h-24 ${step.bgColor} rounded-[2.5rem] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 shadow-sm border border-white`}
                    >
                      <Icon size={38} className={step.color} />
                    </div>

                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gray-900 border-4 border-white rounded-2xl flex items-center justify-center font-black text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
                      {index + 1}
                    </div>
                  </div>

                  <div className="text-center px-2">
                    <h4 className="text-xl font-black text-gray-800 mb-3 tracking-tight group-hover:text-green-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-8 lg:hidden text-gray-200">
                      <ArrowRight size={24} className="rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 flex flex-col items-center">
          <button className="group flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-black text-lg hover:bg-green-600 transition-all shadow-2xl shadow-gray-200 hover:shadow-green-200 active:scale-95">
            Start Contributing
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href="/curation-standards"
            className="mt-6 text-gray-400 text-sm font-semibold flex items-center gap-2 hover:text-gray-600 transition-colors"
          >
            <Search size={16} /> View our curation eligibility standards
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
