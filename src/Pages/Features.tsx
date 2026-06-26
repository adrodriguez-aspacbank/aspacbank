/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../components/Testimonials";
import Seo from "../components/Seo";
import { faqs, FeatureItem, features, steps, whyUs } from "../data/features";
import MasonryGridTextInsideImage from "../module/MassonryGridTextInsideImage";
import { IoMdOpen } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const FeatureCard: React.FC<FeatureItem> = ({ title, image, description }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-[0_0_15px_#EBD839] transition-shadow duration-300 flex flex-col"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover"
      loading="lazy"
    />
    <div className="p-6 flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  </motion.article>
);

const Features: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ✅ SEO for /features */}
      <Seo
        title="Banking Features | ASPAC Bank"
        description="Explore ASPAC Bank’s key features — fast loan processing, secure in-branch transactions, dedicated customer support, and community-focused banking across Cebu and nearby areas."
        canonical="https://www.aspacbank.com/features"
        ogType="website"
        ogImage="https://www.aspacbank.com/features3.jpg"
        ogImageAlt="ASPAC Bank fast loan processing, secure transactions, and community-focused banking features"
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
          name: "ASPAC Bank Features",
          description:
            "ASPAC Bank’s Simply Safe banking features include fast loan approvals, secure transactions, accessible branches, and community-focused service for Filipinos.",
          url: "https://www.aspacbank.com/features",
          publisher: {
            "@type": "Organization",
            name: "ASPAC Bank",
            url: "https://www.aspacbank.com",
            logo: "https://www.aspacbank.com/favicon.ico",
            sameAs: ["https://www.facebook.com/aspacbank0620/"],
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gray-50"
      >
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-aspac-green text-white py-12 md:py-16">
          {/* 🟢 Background Media Layers with Parallax Scaling Effect */}
          <img
            src="/features3.jpg"
            alt="Highlights of ASPAC Bank services and community"
            className="absolute inset-0 h-full w-full object-cover opacity-35 scale-105 transition-transform duration-[10s] ease-out pointer-events-none"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-slate-950/75 to-aspac-green/40 mix-blend-multiply" />

          <div className="absolute -top-40 -right-40 w-96 h-96 bg-aspac-yellow/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-aspac-yellow animate-pulse" />
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-aspac-yellow">
                  ASPAC BANK FEATURES
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Banking made simple, <br className="hidden sm:inline" />
                secure, and{" "}
                <span className="text-aspac-yellow">closer to home.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 max-w-xl font-normal leading-relaxed">
                From fast loan approvals to community-focused banking, ASPAC
                Bank is here to support your plans—whether for your family, your
                farm, or your business.
              </p>

              {/* 🛑 CORE CTA BUTTON REGION (UNTOUCHED ACTION LAYER LOGIC) */}
              <div className="flex flex-wrap gap-4 items-center ">
                <button
                  onClick={() => setShowModal(true)}
                  className="relative inline-block md:mt-6 overflow-hidden text-white border border-white px-6 md:px-6 py-3 text-sm md:text-base font-light md:font-semibold rounded shadow group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Apply for a Loan
                    <IoMdOpen className="group-hover:scale-125   transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-primary  translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>

                <a
                  href="/branches"
                  className="relative inline-block md:mt-6 overflow-hidden text-white border border-white px-6 md:px-6 py-3 text-sm md:text-base font-light md:font-semibold rounded shadow group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Find a Branch
                    <FaArrowRight className="group-hover:-translate-y-0.5   relative -top-0.5 -rotate-12  transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-primary  translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </a>
              </div>
            </div>

            {/* Right Glassmorphic Interactive Metric / Advantage Grid Panel */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/[0.07] backdrop-blur-xl border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-aspac-yellow">
                    At a glance
                  </h2>
                  <span className="text-[10px] font-bold text-white/50 bg-white/10 px-2 py-0.5 rounded-full border border-white/5">
                    Core Promise
                  </span>
                </div>

                {/* Feature Matrix Cards */}
                <div className="space-y-4">
                  {[
                    "Fast loan processing with guided in-branch assistance",
                    "Secure, documented transactions for your peace of mind",
                    "Personalized assessment based on your real situation",
                    "Strong focus on local communities and small businesses",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-aspac-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-aspac-yellow" />
                      </div>
                      <p className="text-sm md:text-base text-slate-100 font-medium leading-normal">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-xs text-slate-300 font-medium">
                    Visit your nearest ASPAC Bank branch to learn which product
                    fits your needs best.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY ASPAC SECTION */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
                  Why bank with ASPAC?
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  We combine the reliability of a regulated bank with the
                  familiarity of a hometown partner.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 rounded-2xl p-5 shadow-sm border border-gray-100"
                  >
                    <h3 className="font-semibold text-primary mb-1 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE GRID */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          {/* Header */}
          <header className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              What we offer
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore features that make banking simple, reliable, and
              goal-driven.
            </p>
          </header>
          <MasonryGridTextInsideImage items={features} />

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Start Your Application
            </button>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-aspac-green">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                How to get started
              </h2>
              <p className="text-white/90 text-sm md:text-base">
                Getting a loan or opening an account with ASPAC Bank is simple.
                Here’s what to expect when you visit us.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 border border-white/30 rounded-2xl p-6 text-white"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-full bg-aspac-yellow text-black flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                      {step.label}
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/90">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-18">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Frequently asked questions
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Here are some of the common questions we receive about our
                services. For anything else, our branches are always ready to
                help.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group bg-gray-50 rounded-2xl border border-primary/20 px-5 py-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-medium text-primary text-sm md:text-base">
                      {item.question}
                    </span>
                    <span className="ml-4 text-xl text-primary group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-gray-700">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / APPLY MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-md w-[92%] relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Contact ASPAC Bank"
              >
                <h2 className="text-2xl font-bold text-primary mb-4 text-center">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4 text-center text-sm">
                  Ready to apply or need more information? Get in touch with our
                  team:
                </p>
                <p className="text-gray-900 text-center font-medium text-sm mb-2">
                  Landline: 501-2724
                </p>
                <p className="text-gray-900 text-center font-medium text-sm">
                  Mobile: 0898-272-2724
                </p>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Our staff will gladly walk you through the requirements and
                  next steps for your chosen product.
                </p>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Features;
