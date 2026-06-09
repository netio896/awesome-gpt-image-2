import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Template } from '../data/gallery';

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
}

export default function TemplateModal({ template, onClose }: TemplateModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template.promptTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden bg-[#141414] rounded-xl border border-[#222]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#141414] border-b border-[#222] p-5 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">{template.title}</h2>
              <p className="text-sm text-gray-400 mt-1">{template.description}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#222] text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Tags */}
          <div className="px-5 py-3 border-b border-[#222] flex flex-wrap gap-2">
            {template.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-[#0a0a0a] px-2.5 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* Prompt Template */}
          <div className="p-5 overflow-y-auto max-h-[50vh]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">提示词模板</span>
              <button
                onClick={handleCopy}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'
                }`}
              >
                {copied ? '✓ 已复制' : '复制模板'}
              </button>
            </div>
            <pre className="text-sm text-gray-300 bg-[#0a0a0a] p-4 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono">
              {template.promptTemplate}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}