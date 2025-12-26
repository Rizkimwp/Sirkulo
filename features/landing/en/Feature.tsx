import FeatureCard from "@/components/ui/FeatureCard";
import { CheckCircle, Leaf, RefreshCcw, Users } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Why Choose Sirkulo?
          </h2>
          <p className="text-gray-500">
            A smart system for a more efficient and impactful circular lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={RefreshCcw}
            title="Circular Points"
            description="Asset value keeps circulating instead of ending up as waste."
            index={1}
          />
          <FeatureCard
            icon={CheckCircle}
            title="Quality Curation"
            description="Every item is carefully reviewed to ensure reliable quality."
            index={2}
          />
          <FeatureCard
            icon={Users}
            title="Peer-to-Peer"
            description="Direct exchanges between users for faster and transparent transactions."
            index={3}
          />
          <FeatureCard
            icon={Leaf}
            title="Eco Impact"
            description="Reduce carbon footprint by extending the lifecycle of goods."
            index={4}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
