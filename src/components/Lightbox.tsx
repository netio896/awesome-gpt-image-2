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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#222] text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-base font-medium text-white">{item.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{item.prompt}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}