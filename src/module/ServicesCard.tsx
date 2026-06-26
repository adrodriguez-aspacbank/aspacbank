import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export interface ServiceItem {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  badge?: string;
}

interface ServicesGridProps {
  items: ServiceItem[];
  negativeMarginClass?: string;
  gridColsClass?: string;
  learnMore?: boolean;
}

// Internal Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ServicesGrid: React.FC<ServicesGridProps> = ({
  items,
  negativeMarginClass = "-mt-24 sm:-mt-28",
  gridColsClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  learnMore,
}) => {
  return (
    <section
      className={`relative z-30 px-4 max-w-7xl mx-auto ${negativeMarginClass}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`grid gap-6 ${gridColsClass}`}
      >
        {items.map(({ title, description, Icon, link, badge }) => (
          <motion.div key={title} variants={cardVariants}>
            <Link
              to={link}
                    onClick={() => {
                
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
              className="group relative flex flex-col justify-between h-full bg-white border border-gray-100 hover:border-[#459243]/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl p-6 sm:p-8 overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#459243]/20"
            >
              {/* Neon Glow Hover Effect Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#459243] to-[#fbbf24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="flex items-center justify-between mb-6 justify-self-center md:justify-self-start gap-5">
                  <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-[#459243]/10 text-[#459243] transition-all duration-300 transform group-hover:rotate-6">
                    <Icon className=" text-3xl sm:text-4xl" />
                  </div>
                  {badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#459243] px-2.5 py-1 rounded-full shadow-sm">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#459243] transition-colors duration-200 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  {description}
                </p>
              </div>
              {learnMore && (
                <div className="mt-6 flex items-center self-end md:self-start text-sm font-semibold text-[#459243] opacity-80 group-hover:opacity-100 transition-opacity ">
                  <span>Learn More</span>
                  <FaArrowRight className="ml-2 text-xs transform group-hover:translate-x-1 transition-transform " />
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
