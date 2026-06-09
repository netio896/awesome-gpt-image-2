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
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.name)}
            className={`text-sm transition-colors ${
              active === cat.name
                ? 'text-white font-medium'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}