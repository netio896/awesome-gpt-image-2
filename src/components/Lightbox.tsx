import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryItem } from '../data/gallery';

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full bg-bg-secondary rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-text-primary">{item.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
              <span className="px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary">
                {item.category}
              </span>
              <span>{item.model}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-bg-primary">
              <p className="text-sm text-text-secondary mb-2">Prompt:</p>
              <p className="text-text-primary text-sm">{item.prompt}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}