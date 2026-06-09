export interface Category {
  id: string;
  name: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  model: string;
  prompt: string;
  imageUrl: string;
  date: string;
}

export const categories: Category[] = [
  { id: 'all', name: '全部' },
  { id: 'ui', name: 'UI 界面' },
  { id: 'chart', name: '图表信息' },
  { id: 'poster', name: '海报字体' },
  { id: 'ecommerce', name: '电商产品' },
  { id: 'photo', name: '人物摄影' },
  { id: 'illustration', name: '插画' },
  { id: 'anime', name: '动漫' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Dashboard UI',
    category: 'UI 界面',
    model: 'GPT-4o Image',
    prompt: 'A modern dark dashboard interface with floating cards and charts',
    imageUrl: 'https://picsum.photos/seed/gallery1/800/600',
    date: '2025-01-15',
  },
  {
    id: '2',
    title: 'Financial Chart',
    category: '图表信息',
    model: 'GPT-4o Image',
    prompt: 'Professional financial data visualization with line graphs and bar charts',
    imageUrl: 'https://picsum.photos/seed/gallery2/800/600',
    date: '2025-01-14',
  },
  {
    id: '3',
    title: 'Event Poster',
    category: '海报字体',
    model: 'GPT-4o Image',
    prompt: 'Bold typography event poster with neon colors',
    imageUrl: 'https://picsum.photos/seed/gallery3/800/600',
    date: '2025-01-13',
  },
  {
    id: '4',
    title: 'Product Showcase',
    category: '电商产品',
    model: 'GPT-4o Image',
    prompt: 'Minimalist product photography with soft shadows',
    imageUrl: 'https://picsum.photos/seed/gallery4/800/600',
    date: '2025-01-12',
  },
  {
    id: '5',
    title: 'Portrait Photography',
    category: '人物摄影',
    model: 'GPT-4o Image',
    prompt: 'Professional portrait with natural lighting',
    imageUrl: 'https://picsum.photos/seed/gallery5/800/600',
    date: '2025-01-11',
  },
  {
    id: '6',
    title: 'Digital Illustration',
    category: '插画',
    model: 'GPT-4o Image',
    prompt: 'Colorful vector illustration with geometric shapes',
    imageUrl: 'https://picsum.photos/seed/gallery6/800/600',
    date: '2025-01-10',
  },
];