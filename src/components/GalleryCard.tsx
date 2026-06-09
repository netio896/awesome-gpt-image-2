import { motion } from 'framer-motion';
import type { GalleryItem } from '../data/gallery';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-bg-secondary">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-medium text-sm truncate">{item.title}</h3>
            <p className="text-white/70 text-xs mt-1">{item.model}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}