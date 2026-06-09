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
      className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === cat.name
                ? 'bg-accent-primary text-white'
                : 'bg-bg-secondary text-text-secondary hover:bg-white/10 hover:text-text-primary'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}