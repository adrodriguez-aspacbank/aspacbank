import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Seo from "../components/Seo"; // ← update path if needed
import ServicesGrid from "../module/ServicesCard";
import { services } from "../data/services";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const OurServices: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* SEO Setup */}
      <Seo
        title="Our Services | ASPAC Bank"
        description="Discover ASPAC Bank’s Simply Safe financial services — from APDS Teacher Loans and reliable deposit accounts to bills payment, branch assistance, and community-focused banking across Cebu and nearby areas."
        canonical="https://www.aspacbank.com/our-services"
        ogType="website"
        ogImage="https://www.aspacbank.com/Services5.jpg"
        ogImageAlt="ASPAC Bank financial services including loans, deposits, and bills payment"
        ogSiteName="ASPAC Bank"
        ogLocale="en_PH"
        themeColor="#459243"
        iconHref="https://www.aspacbank.com/favicon.ico"
        appleTouchIconHref="https://www.aspacbank.com/favicon.ico"
        manifestHref="https://www.aspacbank.com/manifest.json"
        includeTwitter={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "ASPAC Bank Services",
          description:
            "Explore ASPAC Bank’s Simply Safe financial services including Teacher Salary Loans (APDS), deposit accounts, bills payment, branch support, and reliable community banking.",
          url: "https://www.aspacbank.com/our-services",
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
        transition={{ duration: 0.5 }}
        className="bg-gray-50/50 min-h-screen text-gray-800 font-sans selection:bg-[#459243]/20 selection:text-[#459243]"
      >
        {/* Modern Immersive Hero Section */}
        <section className="relative h-[65vh] sm:h-[70vh] w-full flex items-center justify-start overflow-hidden">
          <img
            src="/Services5.jpg"
            alt="ASPAC Bank services collage"
            className="absolute inset-0 h-full w-full object-cover transform motion-safe:animate-[pulse_8s_infinite_alternate]"
            loading="eager"
          />
          {/* Multi-layered radial & linear dynamic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 via-transparent to-transparent z-10" />

          <div className="relative z-20  px-4 max-w-7xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" border-white/10 p-6 sm:p-10 rounded-3xl max-w-2xl text-white "
            >
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 inline-block bg-[#fbbf24]/10 px-3 py-1 rounded-full border border-[#fbbf24]/20">
                Simply Safe Financial Ecosystem
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                Tailored Banking <br />
                <span className="text-accent">Built Around You</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed">
                Explore a comprehensive suit of diverse banking options designed
                to safeguard assets, build credit, and streamline your dynamic
                ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        <ServicesGrid items={services} learnMore={true} />

        {/* Why Choose ASPAC Bank Wrapper Grid */}
        <section className="pt-16  pb-24 bg-white px-4 sm:px-6 lg:px-8 space-y-24 max-w-7xl mx-auto">
          <div className="absolute  left-0 w-[300px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-0 h-[500px] bg-aspac-green/10 rounded-full blur-3xl" />
          <motion.div
            className="text-center max-w-3xl mx-auto space-y-4"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#459243] bg-[#459243]/10 px-4 py-1.5 rounded-full">
              Why ASPAC Bank
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              A Banking Experience You Can Count On
            </h2>
            <p className="text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              We prioritize your financial ecosystem safety and community
              convenience. Our workflows are tailored cleanly to build pathways
              with effortless reliability.
            </p>
          </motion.div>

          {/* Block 1 - Customer Support */}

          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#459243] to-[#fbbf24] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <img
                src="/customer-support1.jpg"
                alt="Customer support in-branch"
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl border border-gray-100"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#459243]">
                <span className="w-2 h-2 rounded-full bg-[#459243]" />
                <span>Customer Centric Support</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                We’re here when you need us
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Open Monday to Friday, 9:00 AM – 3:00 PM — our responsive
                in-branch consultants and helpful team are always synchronized
                and ready to support you step-by-step.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center bg-[#459243] hover:bg-[#459243]/90 text-white font-medium px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-[#459243]/20"
              >
                <FaPhoneAlt className="mr-2 text-sm" /> Contact Us
              </button>
            </div>
          </motion.div>

          {/* Block 2 - Security */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 bg-gray-50/60 p-6 sm:p-10 rounded-[40px] border border-gray-100"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#fbbf24] to-[#459243] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <img
                src="/security.jpg"
                alt="Secure banking systems"
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#459243]">
                <span className="w-2 h-2 rounded-full bg-[#459243]" />
                <span>Enterprise Security</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Bank with absolute peace of mind
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                We implement next-generation cryptographic architectures and
                top-tier secure infrastructure paradigms to isolate and
                safeguard your hard-earned funds effortlessly.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-gray-900/20"
              >
                Learn More Verification
              </button>
            </div>
          </motion.div>

          {/* Block 3 - Convenience */}
          <div className="absolute  right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-0 h-[500px] bg-aspac-green/10 rounded-full blur-3xl" />
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#459243] to-[#fbbf24] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <img
                src="/online-banking.jpg"
                alt="Convenient over-the-counter services"
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#459243]">
                <span className="w-2 h-2 rounded-full bg-[#459243]" />
                <span>Seamless Accessibility</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Banking made fluidly simple
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Experience friction-free environments via our extensive
                over-the-counter channels, friendly field assistance staff, and
                streamlined branch offices near you.
              </p>
              <Link
                to="/branches"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center bg-[#fbbf24] hover:bg-[#fbbf24]/90 text-gray-950 font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-[#fbbf24]/20"
              >
                <FaMapMarkerAlt className="mr-2 text-sm" /> Find a Branch Area
              </Link>
            </div>
          </motion.div>

          {/* Block 4 - Expert Advice */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 bg-gray-50/60 p-6 sm:p-10 rounded-[40px] border border-gray-100"
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#fbbf24] to-[#459243] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <img
                src="/financial-advice.jpg"
                alt="Advisors providing financial guidance"
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#459243]">
                <span className="w-2 h-2 rounded-full bg-[#459243]" />
                <span>Expert Guidance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Financial strategies you can trust
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Our certified wealth advisors navigate macro trends effectively,
                assisting you to formulate long-term parameters with maximum
                security and transparent logic.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center bg-[#459243] hover:bg-[#459243]/90 text-white font-medium px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-[#459243]/20"
              >
                Talk to a Consultant
              </button>
            </div>
          </motion.div>
        </section>

        {/* Contact Us Modern Glassmorphic Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-white rounded-[32px] p-8 md:p-10 max-w-md w-full relative shadow-2xl border border-gray-100"
                initial={{ y: 50, scale: 0.95, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 50, scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Contact ASPAC Bank"
              >
                <div className="w-12 h-12 bg-[#459243]/10 rounded-2xl flex items-center justify-center text-[#459243] mx-auto mb-4">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">
                  Get in Touch
                </h2>
                <p className="text-gray-500 mb-6 text-center text-sm font-light leading-relaxed">
                  Have questions about custom plans or APDS loans? Connect
                  directly with support desks instantly.
                </p>

                <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-semibold uppercase">
                      Hotline Desk
                    </span>
                    <span className="text-base font-bold text-gray-900 tracking-tight">
                      501-2724
                    </span>
                  </div>
                  <div className="h-[1px] bg-gray-200/60 w-full" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-semibold uppercase">
                      Mobile Route
                    </span>
                    <span className="text-base font-bold text-gray-900 tracking-tight">
                      0898-272-2724
                    </span>
                  </div>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold shadow-md transition focus:outline-none focus:ring-4 focus:ring-gray-900/20"
                  >
                    Close Window
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

export default OurServices;
