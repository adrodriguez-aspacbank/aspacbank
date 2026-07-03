import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Seo from "./components/Seo";
import ApplyNowModal from "./components/ApplyNowModal";
import BspSecurityTipsNewYearAdvisory from "./components/advisories/BspSecurityTipsNewYearAdvisory";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./WelcomePage.css";
import { heroSlides } from "./data/hero";
import { MasonryGrid } from "./module/MasonryGrid";
import { reviews } from "./data/reviews";
import { ReviewCard } from "./module/ReviewCardMasonry";
import { news } from "./data/news";
import ParallaxHero from "./module/Parallax";
import CoreTiles from "./components/CoreTiles";

/**
 * WelcomePage – ASPAC brand integration
 * - Uses Tailwind tokens: bg-primary / text-primary / bg-aspac-yellow
 * - Black text on yellow for accessibility
 * - Stable keys in maps
 */

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  // Toggle this if your Layout already renders a global header

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white text-gray-900"
    >
      {/* SEO */}
      <Seo
        title="ASPAC Bank"
        description="ASPAC Bank empowers teachers and Filipino families with secure banking, fast loan approvals, and low-interest APDS Teacher Salary Loans. Experience Simply Safe banking with reliable savings, deposits, and community-focused financial services."
        canonical="https://www.aspacbank.com/"
        ogType="website"
        ogImage="https://www.aspacbank.com/APDS3.jpg"
        ogImageAlt="ASPAC Bank – Teacher Salary Loan and Secure Banking Services"
        ogSiteName="ASPAC Bank"
        ogLocale="en_PH"
        /* Match brand & manifest theme color */
        themeColor="#459243"
        iconHref="https://www.aspacbank.com/favicon.ico"
        appleTouchIconHref="https://www.aspacbank.com/favicon.ico"
        manifestHref="https://www.aspacbank.com/manifest.json"
        includeTwitter={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "ASPAC Bank",
          description:
            "ASPAC Bank empowers teachers and Filipino families with secure banking, fast loan approvals, and low-interest APDS Teacher Salary Loans. Experience Simply Safe banking with reliable savings, deposits, and community-focused financial services.",
          url: "https://www.aspacbank.com/",
          publisher: {
            "@type": "Organization",
            name: "ASPAC Bank",
            url: "https://www.aspacbank.com",
            logo: "https://www.aspacbank.com/favicon.ico",
            sameAs: ["https://www.facebook.com/aspacbank0620/"],
          },
        }}
      />

      {/* Top announcement bar */}
      <div
        className="w-full bg-primary text-white text-sm md:text-[15px] py-2 px-4 mt-14"
        role="status"
        aria-live="polite"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-between">
          <p className="flex items-center gap-2">
            {/* <span
              className="inline-flex h-2 w-2 rounded-full bg-white"
              aria-hidden
            /> */}
            <span className="font-light text-xs md:text-base">
              Your trusted Bank - serving communities across Cebu and beyond.
            </span>
          </p>
          <div className="flex items-center gap-4 text-xs md:text-base">
            <a
              href="tel:+63322722724"
              className="inline-flex items-center gap-2 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
            >
              <FaPhoneAlt aria-hidden /> <span>(032) 501-2724</span>
            </a>

            <a
              href="https://www.facebook.com/aspacbank0620/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ASPAC Bank on Facebook"
              className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <FaFacebookF aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* HERO Swiper (FADE) */}
      <ParallaxHero
        slides={heroSlides}
        onNavigate={navigate}
        onApply={() => setShowApplyModal(true)}
        onContact={() => setShowContactModal(true)}
        onExplore={() => navigate("/explore")}
      />

      {/* Advisory ticker */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
            Advisory
          </span>
          <div
            className="overflow-hidden whitespace-nowrap w-full"
            aria-live="polite"
          >
            <div className="animate-[scroll_18s_linear_infinite] inline-block min-w-full">
              {news.map((n) => (
                <button
                  key={n.title}
                  onClick={() => n.to && navigate(n.to)}
                  className="text-sm md:text-[15px] hover:underline mx-6"
                >
                  {n.title} — {n.content}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core tiles – Enhanced with animations & icons */}
      <CoreTiles />
      {/* Latest News & video feature card */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.03] to-white" />
        <div className="absolute  right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-0 w-[500px] h-[500px] bg-aspac-green/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
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
              <div className="absolute -top-24 -right-24 h-72 w-72 bg-primary/10 blur-3xl rounded-full" />

              <div className="h-1 w-full bg-gradient-to-r from-primary to-aspac-green" />

              <div className="p-6 md:p-8 md:flex justify-between">
                {/* header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-aspac-green text-white flex items-center justify-center shadow-lg">
                    <FaShieldAlt className="text-2xl" />
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-primary/60">
                      Security Advisory
                    </p>
                    <h3 className="text-lg md:text-3xl font-bold text-primary">
                      BSP Security Tips – New Year
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700">
                      Stay alert against scams and protect your accounts this
                      season.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <BspSecurityTipsNewYearAdvisory
                    title="BSP Security Tips – New Year"
                    caption=""
                  />
                </div>
              </div>
            </div>
          </motion.section>

          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-xs text-primary/70 font-semibold">
              News & Advisories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Latest news & updates
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Branch movements, service advisories, and community updates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {news.map((item, index) => (
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
                {/* glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />

                <div className="grid md:grid-cols-[1fr_420px]">
                  <div className="p-4 md:p-8">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <item.Icon className={`text-base ${item.iconColor}`} />
                      <span className="uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-2xl font-bold text-primary">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base mt-4 text-gray-600 leading-relaxed">
                      {item.content}
                    </p>

                    <div className="mt-3 md:mt-6 flex gap-3 justify-between">
                      {item.to && (
                        <Link
                          to="/advisories"
                          className="
                      inline-flex items-center gap-2
                      px-2 py-2 md:px-5 md:py-3
                      rounded-full
                      bg-gradient-to-r from-primary to-aspac-green
                      text-white md:font-semibold
                      hover:shadow-lg
                      transition
                    "
                        >
                          View advisory
                          <FaArrowRight />
                        </Link>
                      )}

                      <button
                        onClick={() => navigate("/advisories")}
                        className="text-primary md:font-semibold hover:underline pr-4 flex items-center justify-items-center gap-3"
                      >
                        All advisories <FaArrowRight size={10} />
                      </button>
                    </div>
                  </div>

                  {/* ================= MEDIA (IMAGE / VIDEO) ================= */}
                  <div className="relative h-72 md:h-auto overflow-hidden">
                    {/* glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

                    {item.mediaType === "image" ? (
                      <img
                        src={item.mediaSrc || "/bogo_reopens.jpg"}
                        alt={item.mediaAlt || item.title}
                        className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition-transform duration-700
                  "
                      />
                    ) : (
                      <video
                        src={item.mediaSrc || "/assets/vid/cnsvid3.webm"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition-transform duration-700
                  "
                      />
                    )}

                    {/* floating label */}
                    <div
                      className="
                absolute top-4 left-4 z-20
                bg-black/40 backdrop-blur-md
                text-white text-xs
                px-3 py-1 rounded-full
              "
                    >
                      Featured Update
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-[11px] md:text-xs text-primary/80 font-semibold">
            Customer Stories
          </p>
          <h2 className="text-3xl font-bold text-primary">
            What our clients say
          </h2>
        </div>
        <MasonryGrid
          items={reviews}
          renderItem={(review) => <ReviewCard review={review} />}
        />
      </section>

      {/* Contact modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 w-[92%] max-w-md relative"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Contact ASPAC Bank"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                Contact us
              </h2>
              <p className="text-gray-700 text-center">
                For inquiries or assistance, call:
              </p>
              <div className="mt-3 flex justify-center">
                <ul className="space-y-1 text-left">
                  <li className="text-gray-900 font-medium">
                    Hotline: (032)-501-2724
                  </li>
                  <li className="text-gray-900 font-medium">
                    Mobile Number: 0898-272-2724
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-gray-200 font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Chatbot mounts only on WelcomePage */}
      {/* <AspacChatbot /> */}

      <ApplyNowModal
        isOpen={showApplyModal}
        onClose={() => setShowApplyModal(false)}
      />

      {/* Page-level keyframes & Swiper tweaks */}
      <style>
        {`
  @keyframes scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  /* Make swiper arrows clearer over photos */
  .swiper-button-next, .swiper-button-prev {
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 18px;
    font-weight: 700;
  }
  /* Larger, high-contrast pagination bullets */
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.7);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #459243; /* brand green */
  }
`}
      </style>
    </motion.div>
  );
};

export default WelcomePage;
