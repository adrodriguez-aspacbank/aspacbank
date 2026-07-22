import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import BspSecurityTipsNewYearAdvisory from "./advisories/BspSecurityTipsNewYearAdvisory";

type NewsItem = {
  title: string;
  content: string;
  label: string;
  Icon: React.ElementType;
  iconColor?: string;
  to?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  mediaAlt?: string;
};

type FeaturedAdvisory = {
  label: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  content?: React.ReactNode;
};

type LatestNewsSectionProps = {
  news: NewsItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  advisoryPath?: string;
  featuredAdvisory?: FeaturedAdvisory;
};

const defaultFeaturedAdvisory: FeaturedAdvisory = {
  label: "Security Advisory",
  title: "BSP Security Tips – New Year",
  description: "Stay alert against scams and protect your accounts this season.",
  icon: FaShieldAlt,
  content: (
    <BspSecurityTipsNewYearAdvisory
      title="BSP Security Tips – New Year"
      caption=""
    />
  ),
};

export default function LatestNewsSection({
  news,
  eyebrow = "News & Advisories",
  title = "Latest news & updates",
  description = "Branch movements, service advisories, and community updates.",
  advisoryPath = "/advisories",
  featuredAdvisory = defaultFeaturedAdvisory,
}: LatestNewsSectionProps) {
  const FeaturedIcon = featuredAdvisory.icon || FaShieldAlt;

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.03] to-white" />
      <div className="absolute right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-32 left-0 h-[500px] w-[500px] rounded-full bg-aspac-green/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[32px]
              bg-white/70
              backdrop-blur-xl
              border border-white/50
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="h-1 w-full bg-gradient-to-r from-primary to-aspac-green" />

            <div className="p-6 md:flex md:justify-between md:p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-aspac-green text-white shadow-lg">
                  <FeaturedIcon className="text-2xl" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/60">
                    {featuredAdvisory.label}
                  </p>

                  <h2 className="text-lg font-bold text-primary md:text-3xl">
                    {featuredAdvisory.title}
                  </h2>

                  <p className="text-xs text-gray-700 md:text-sm">
                    {featuredAdvisory.description}
                  </p>
                </div>
              </div>

              {featuredAdvisory.content && (
                <div className="mt-4">{featuredAdvisory.content}</div>
              )}
            </div>
          </div>
        </motion.section>

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {news.map((item, index) => {
            const ItemIcon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                  group relative overflow-hidden
                  rounded-[32px]
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/50
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_30px_100px_rgba(69,146,67,0.18)]
                  transition-all duration-500
                "
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                <div className="grid md:grid-cols-[1fr_420px]">
                  <div className="p-4 md:p-8">
                    <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
                      <ItemIcon
                        className={`text-base ${item.iconColor || "text-primary"}`}
                      />
                      <span className="uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                      {item.content}
                    </p>

                    <div className="mt-3 flex justify-between gap-3 md:mt-6">
                      {item.to && (
                        /^https?:\/\//i.test(item.to) ? (
                          <a
                            href={item.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex items-center gap-2
                              rounded-full
                              bg-gradient-to-r from-primary to-aspac-green
                              px-2 py-2
                              text-white
                              transition
                              hover:shadow-lg
                              md:px-5 md:py-3 md:font-semibold
                            "
                          >
                            View location
                            <FaArrowRight />
                          </a>
                        ) : (
                          <Link
                            to={item.to}
                            className="
                              inline-flex items-center gap-2
                              rounded-full
                              bg-gradient-to-r from-primary to-aspac-green
                              px-2 py-2
                              text-white
                              transition
                              hover:shadow-lg
                              md:px-5 md:py-3 md:font-semibold
                            "
                          >
                            View advisory
                            <FaArrowRight />
                          </Link>
                        )
                      )}

                      <Link
                        to={advisoryPath}
                        className="flex items-center justify-items-center gap-3 pr-4 text-primary hover:underline md:font-semibold"
                      >
                        All advisories <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>

                  <div className="relative h-72 overflow-hidden md:h-auto">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {item.mediaType === "image" ? (
                      <img
                        src={item.mediaSrc || "/bogo_reopens.jpg"}
                        alt={item.mediaAlt || item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={item.mediaSrc || "/assets/vid/cnsvid3.webm"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}

                    <div className="absolute left-4 top-4 z-20 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
                      Featured Update
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}