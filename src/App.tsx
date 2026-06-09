import { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import TemplateGrid from './components/TemplateGrid';
import TemplateModal from './components/TemplateModal';
import { templates, categories } from './data/gallery';
import type { Template } from './data/gallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = useMemo(() => {
    return templates.filter(item => {
      const matchesCategory = activeCategory === '全部' || item.category === activeCategory;
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryBar 
        categories={categories} 
        active={activeCategory} 
        onChange={setActiveCategory} 
      />
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-4 text-sm text-gray-500">
          共 {filteredTemplates.length} 个模板
        </div>
        <TemplateGrid templates={filteredTemplates} onSelect={setSelectedTemplate} />
      </main>
      {selectedTemplate && (
        <TemplateModal template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
      )}
    </div>
  );
}