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
      className="sticky top-0 z-40 bg-[#0f0f0f]/95 backdrop-blur border-b border-[#222]"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-base font-medium text-white">
            GPT Image 2 Prompt Gallery
          </h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="搜索提示词..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-48 h-8 px-3 text-sm bg-[#1a1a1a] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#555]"
            />
            <button className="h-8 px-4 text-sm font-medium bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-md transition-colors">
              生成
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}