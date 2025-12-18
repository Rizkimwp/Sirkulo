import { easeInOut, motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: easeInOut },
  }),
};


type FeatureProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
};
// --- Feature Card Component (Bento Style) ---
const FeatureCard = ({ icon: Icon, title, description, index }: FeatureProps) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500"
  >
    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
      <Icon size={28} className="text-green-600 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
  </motion.div>
);


export default FeatureCard;