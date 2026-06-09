import { motion } from 'framer-motion';
import type { Template } from '../data/gallery';

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -2 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5 bg-[#141414] rounded-xl border border-[#222] hover:border-[#333] transition-all">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-sm font-medium text-white group-hover:text-[#60a5fa] transition-colors">
            {template.title}
          </h3>
          <span className="text-xs text-gray-500 bg-[#1a1a1a] px-2 py-0.5 rounded">
            {template.category}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {template.tags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-[#0a0a0a] px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}