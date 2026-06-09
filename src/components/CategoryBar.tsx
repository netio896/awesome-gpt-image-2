import { motion } from 'framer-motion';
import type { Category } from '../data/gallery';

interface CategoryBarProps {
  categories: Category[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryBar({ categories, active, onChange }: CategoryBarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3 border-b border-[#222]"
    >
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.name)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all flex items-center gap-1.5 ${
              active === cat.name
                ? 'bg-[#2563eb] text-white'
                : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}