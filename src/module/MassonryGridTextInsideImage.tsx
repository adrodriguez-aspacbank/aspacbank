import { motion } from "framer-motion";

export interface MasonryItem {
  title: string;
  image: string;
  description: string;
}

interface MasonryGridProps {
  items: MasonryItem[];
  heights?: string[];
  columns?: string;
}

const defaultHeights = [
  "h-[260px]",
  "h-[440px]",
  "h-[400px]",
  "h-[400px]",
  "h-[380px]",
  "h-[390px]",
];

const getHeightClass = (index: number, heights: string[]) =>
  heights[index % heights.length];

const MasonryGridTextInsideImage = ({
  items,
  heights = defaultHeights,
  columns = "columns-1 md:columns-2 lg:columns-3",
}: MasonryGridProps) => {
  return (
    <div className={`${columns} gap-6 space-y-6`}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="break-inside-avoid rounded-2xl overflow-hidden group relative shadow-md"
        >
          <div
            className={`relative w-full ${getHeightClass(
              index,
              heights
            )} overflow-hidden`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-lg font-bold">{item.title}</h3>

              <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
                <p className="text-sm text-white/90 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGridTextInsideImage;