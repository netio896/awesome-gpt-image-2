import { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import GalleryGrid from './components/GalleryGrid';
import Lightbox from './components/Lightbox';
import { galleryItems, categories } from './data/gallery';
import type { GalleryItem } from './data/gallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const matchesCategory = activeCategory === '全部' || item.category === activeCategory;
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryBar 
        categories={categories} 
        active={activeCategory} 
        onChange={setActiveCategory} 
      />
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-4 text-sm text-text-secondary">
          共 {filteredItems.length} 个结果
        </div>
        <GalleryGrid items={filteredItems} onLightbox={setLightboxItem} />
      </main>
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </div>
  );
}
