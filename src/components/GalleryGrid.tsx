import { AnimatePresence, motion } from 'framer-motion';
import TemplateCard from './TemplateCard';
import type { Template } from '../data/gallery';

interface TemplateGridProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export default function TemplateGrid({ templates, onSelect }: TemplateGridProps) {
  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} onClick={() => onSelect(template)} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}