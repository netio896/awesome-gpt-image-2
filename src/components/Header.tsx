import { motion } from 'framer-motion';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary">
            AI Gallery
          </h1>
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="搜索图片..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-bg-secondary border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}