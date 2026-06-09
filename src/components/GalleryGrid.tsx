import { AnimatePresence, motion } from 'framer-motion';
import GalleryCard from './GalleryCard';
import type { GalleryItem } from '../data/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  onLightbox: (item: GalleryItem) => void;
}

export default function GalleryGrid({ items, onLightbox }: GalleryGridProps) {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} onClick={() => onLightbox(item)} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}