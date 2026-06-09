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
      className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#222]"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold text-white">
              GPT Image 2 Prompt Gallery
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">393 个案例提炼的 21 套工业级提示词模板</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索模板..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-56 h-9 px-3 pl-9 text-sm bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#555]"
              />
              <svg className="absolute left-2.5 top-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <a 
              href="https://github.com/freestylefly/awesome-gpt-image-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-9 px-4 flex items-center text-sm font-medium bg-[#333] hover:bg-[#444] text-white rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}