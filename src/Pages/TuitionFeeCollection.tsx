import React from "react";
import Seo from "../components/Seo";
import { FaArrowRight } from "react-icons/fa6";

const TuitionFeeCollection: React.FC = () => {
  return (
    <>
      {/* ✅ SEO Setup */}
      <Seo
        title="Tuition Fee Collection | ASPAC Bank"
        description="Pay school tuition safely and conveniently at ASPAC Bank partner schools. Fast over-the-counter processing, official receipts, and trusted partner institutions."
        canonical="https://www.aspacbank.com/tuition-fee-collection"
        ogType="website"
        ogImage="https://www.aspacbank.com/PAYTUTION.jpg"
        ogImageAlt="ASPAC Bank Tuition Fee Collection"
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
          name: "Tuition Fee Collection",
          description:
            "ASPAC Bank’s over-the-counter tuition fee collection for partner schools in Cebu.",
          url: "https://www.aspacbank.com/tuition-fee-collection",
          publisher: {
            "@type": "Organization",
            name: "ASPAC Bank",
            url: "https://www.aspacbank.com",
            logo: "https://www.aspacbank.com/favicon.ico",
            sameAs: ["https://www.facebook.com/aspacbank0620/"],
          },
          mainEntity: {
            "@type": "Service",
            name: "Tuition Fee Collection",
            serviceType: "Over-the-counter payment service",
            areaServed: "PH",
            provider: {
              "@type": "BankOrCreditUnion",
              name: "ASPAC Bank",
              url: "https://www.aspacbank.com",
              telephone: "+63-32-272-2724",
            },
            termsOfService: "https://www.aspacbank.com/terms-and-conditions",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://www.aspacbank.com/tuition-fee-collection",
              servicePhone: "+63-917-127-7796",
            },
          },
          about: {
            "@type": "ItemList",
            name: "Partner Schools",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "University of Cebu (Main, Banilad, METC, UCLM)",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "University of San Carlos (Main, Talamban)",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "College of Technological Sciences - Cebu (CTS)",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "University of San Jose–Recoletos (USJR)",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Cebu Doctors University (CDU)",
              },
            ],
          },
        }}
      />

      <main className="bg-slate-50 min-h-screen text-slate-800 font-sans relative overflow-x-hidden selection:bg-aspac-green/20">
       
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[120vh] right-0 w-[400px] h-[400px] bg-gradient-to-bl from-aspac-yellow/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute  left-32 md:left-[25%] w-[400px] md:w-[800px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-0 h-[500px] bg-aspac-green/10 rounded-full blur-3xl" />

        <section className="w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-slate-50 border-b border-slate-200/60 py-16 md:py-24">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10 grid gap-12 items-center mt-16 md:mt-0">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-primary bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-lg w-fit mb-6">
                <span>✨</span> Tuition Fee Collection
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6 text-slate-900">
                Sleek, secure <br />
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  tuition payments.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4">
                Make tuition payments seamless with ultra-fast over-the-counter
                assistance, instantaneous receipts, and a trusted banking
                framework.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#partner-schools"
                  className="relative inline-block overflow-hidden text-slate-800 hover:text-white border border-slate-300 hover:border-primary px-6 py-3.5 text-sm md:text-base font-semibold rounded-xl transition-colors duration-300 shadow-sm group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Partner Schools
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs text-slate-400 group-hover:text-white" />
                  </span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </a>

                <a
                  href="#how-it-works"
                  className="relative inline-block overflow-hidden text-slate-800 hover:text-white border border-slate-300 hover:border-primary px-6 py-3.5 text-sm md:text-base font-semibold rounded-xl transition-colors duration-300 shadow-sm group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    See How It Works
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs text-slate-400 group-hover:text-white" />
                  </span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-primary mb-4 tracking-tight">
              Streamlined Financial Collections
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-aspac-yellow mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              ASPAC Bank bridges the gap between families and universities with
              safe transactional pathways, ensuring compliance and real-time
              confirmation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            {[
              {
                label: "FOR WHOM",
                title: "Students & Parents",
                desc: "Settle educational duties inside a secure, hospitality-focused ecosystem optimized by ASPAC staff counters.",
              },
              {
                label: "MANAGEMENT",
                title: "Schools & Universities",
                desc: "Consolidate accounting flows, lower your campus hazard liabilities, and acquire itemized automated audits.",
              },
              {
                label: "THE PAYOFF",
                title: "Crystal-Clear Records",
                desc: "Every balance is checked and approved under dynamic monetary clearing setups, ensuring clean student ledgers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 bg-slate-100 px-2 py-0.5 rounded w-fit">
                  {item.label}
                </p>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

   
        <section
          id="how-it-works"
          className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-20 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                The Three-Step Pathway
              </h2>
              <p className="text-sm md:text-base text-emerald-100/70">
                We have refined over-the-counter payments down to a simple,
                verified pipeline.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Locate Branch Counter",
                  desc: "Approach any authorized ASPAC Bank branch kiosk or dedicated nearby partner educational portal.",
                },
                {
                  step: "02",
                  title: "Verify Student Profile",
                  desc: "Present basic billing slips or unique student IDs. Our modern ledger system immediately identifies your records.",
                },
                {
                  step: "03",
                  title: "Secure Remittance",
                  desc: "Finalize your deposit. Walk away with a validated, tamper-proof bank statement accepted by your school.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 relative group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl font-black text-white/10 group-hover:text-aspac-yellow/30 transition-colors duration-300 absolute top-4 right-6 select-none font-mono">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 pr-8 text-emerald-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Built for Families
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Clear routing instructions via trained support personnel.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Instantaneous hard-copy validations for peace of mind.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Bypass over-congested school accounting lines entirely.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <span className="text-amber-600 font-bold">✦</span>
              </div>
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Engineered for Institutions
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                  Seamless data pipelines updating student balances securely.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                  Drastically lower local vault cash handling logistics.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                  End-to-end reconciliation dashboards and automated exports.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="partner-schools"
          className="bg-white border-y border-slate-200/60 py-20 relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <div className="max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-3">
                Affiliated Institutions
              </h2>
              <p className="text-sm md:text-base text-slate-500">
                We safely manage tuition systems across prominent regional hubs.
                Ensure precise branch requirements directly with your registrar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <article className="group bg-gradient-to-b from-slate-50 to-white p-5 rounded-2xl shadow-sm border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-[10px] tracking-wider font-extrabold text-primary bg-white shadow-sm border border-slate-200 px-2.5 py-1 rounded-md z-10">
                  OFFICIAL
                </span>
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 aspect-video">
                  <img
                    src="assets/tuitionpaymentphotos/UC.jpg"
                    alt="University of Cebu"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-left group-hover:text-primary transition-colors duration-300">
                  University of Cebu
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-left text-xs text-slate-600 font-medium">
                  {["Main Campus", "Banilad", "METC", "UCLM"].map((c) => (
                    <li key={c} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" /> {c}
                    </li>
                  ))}
                </ul>
              </article>

              {/* USC Card */}
              <article className="group bg-gradient-to-b from-slate-50 to-white p-5 rounded-2xl shadow-sm border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-[10px] tracking-wider font-extrabold text-primary bg-white shadow-sm border border-slate-200 px-2.5 py-1 rounded-md z-10">
                  OFFICIAL
                </span>
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 aspect-video">
                  <img
                    src="assets/tuitionpaymentphotos/USC.jpg"
                    alt="University of San Carlos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-left group-hover:text-primary transition-colors duration-300">
                  University of San Carlos
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-left text-xs text-slate-600 font-medium">
                  {["Main Campus", "Talamban"].map((c) => (
                    <li key={c} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" /> {c}
                    </li>
                  ))}
                </ul>
              </article>

              {[
                {
                  name: "College of Technological Sciences",
                  code: "CTS Cebu",
                  img: "assets/tuitionpaymentphotos/CTSC.jpg",
                },
                {
                  name: "University of San Jose–Recoletos",
                  code: "USJR",
                  img: "assets/tuitionpaymentphotos/USJR.jpg",
                },
                {
                  name: "Cebu Doctors University",
                  code: "CDU",
                  img: "assets/tuitionpaymentphotos/CDU.jpg",
                },
              ].map((school, i) => (
                <article
                  key={i}
                  className="group bg-gradient-to-b from-slate-50 to-white p-5 rounded-2xl shadow-sm border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-[10px] tracking-wider font-extrabold text-primary bg-white shadow-sm border border-slate-200 px-2.5 py-1 rounded-md z-10">
                    OFFICIAL
                  </span>
                  <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 aspect-video">
                    <img
                      src={school.img}
                      alt={school.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 text-left group-hover:text-primary transition-colors duration-300">
                    {school.name}
                  </h3>
                  <p className="text-xs text-slate-500 text-left mt-1 font-mono">
                    {school.code}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16 bg-slate-50 border border-slate-200/60 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-xs md:text-sm text-slate-500 italic leading-relaxed">
                ℹ️ For exact calendar processing limits, active holidays, and
                specialized regional branches, please verify directly with your
                target institution's registration office.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-t from-slate-100 to-white py-20 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
              Incorporate Your Campus Into Our Grid
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Are you part of an academic management body seeking to integrate
              streamlined payments? Let us assist you with a straightforward
              institutional integration setup.
            </p>
            {/* <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition duration-300 shadow-md active:scale-98">
              Connect With Treasury Division
            </button> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default TuitionFeeCollection;
