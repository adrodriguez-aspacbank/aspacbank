import React from "react";
import Seo from "../components/Seo";

type ReportLink = {
  yearLabel: string;
  title: string;
  href: string;
  buttonText: string;
  description: string;
};

const REPORTS: ReportLink[] = [
  {
    yearLabel: "2024",
    title: "Annual Report 2024",
    href: "https://drive.google.com/file/d/1xuqc56kmOF59mC1uEaREu44RSm_pLJ7B/preview",
    buttonText: "View Annual Report 2024",
    description:
      "View ASPAC Bank's full annual report for the year 2024 through Google Drive preview.",
  },
  {
    yearLabel: "2024",
    title: "Part II AFS of Aspac Rural Bank 2024",
    href: "https://drive.google.com/file/d/1395xZqKYDdE1bvSonBJK23U3BHR-HMXm/preview",
    buttonText: "View Part II AFS 2024",
    description:
      "Access the Part II Audited Financial Statements of ASPAC Rural Bank for 2024.",
  },
];

const AnnualReport: React.FC = () => {
  return (
    <>
      <Seo
        title="Annual Reports | ASPAC Bank"
        description="View ASPAC Bank's published annual reports and financial statement documents."
        canonical="https://www.aspacbank.com/annual-reports"
        noindex
      />

    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 py-20 sm:px-6 lg:px-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero Header */}
        <header className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Official Bank Reports
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl lg:text-5xl">
            ASPAC Bank Annual Reports
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            View ASPAC Bank’s published annual reports and financial statement
            documents. These files open securely through Google Drive preview.
          </p>
        </header>

        {/* Featured Panel */}
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-green-100 bg-white/80 shadow-xl shadow-green-900/5 backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#229b15] to-[#38cb2c] text-2xl text-white shadow-lg shadow-green-700/20">
                📊
              </div>

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Transparency through accessible reports
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Browse available ASPAC Bank annual report documents below.
                Each report is provided as a preview link for convenient online
                viewing.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-green-50 px-4 py-3">
                  <p className="text-xs font-medium text-green-700">
                    Available Year
                  </p>
                  <p className="text-xl font-bold text-green-900">2024</p>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-3">
                  <p className="text-xs font-medium text-emerald-700">
                    Documents
                  </p>
                  <p className="text-xl font-bold text-emerald-900">
                    {REPORTS.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[260px] overflow-hidden bg-gradient-to-br from-[#229b15] via-[#27b51a] to-[#38cb2c] lg:block">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-white/20 blur-2xl" />

              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="w-full max-w-xs rounded-3xl bg-white/20 p-6 text-white shadow-2xl backdrop-blur-md ring-1 ring-white/30">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-white/80">
                      Report Preview
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                      PDF
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-white/80" />
                    <div className="h-3 w-full rounded-full bg-white/40" />
                    <div className="h-3 w-5/6 rounded-full bg-white/40" />
                    <div className="h-24 rounded-2xl bg-white/20" />
                  </div>

                  <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-green-700">
                    View Online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {REPORTS.map((report, idx) => (
            <article
              key={`${report.title}-${idx}`}
              className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-5 shadow-lg shadow-green-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/10 sm:p-6"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-green-50 transition group-hover:bg-green-100" />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-2xl text-green-700 ring-1 ring-green-100">
                      📄
                    </div>

                    <div>
                      <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                        {report.yearLabel}
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                    Google Drive
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 transition group-hover:text-green-800 sm:text-xl">
                  {report.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {report.description}
                </p>

                <div className="mt-6">
                  <a
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#229b15] to-[#38cb2c] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-green-700/25 focus:outline-none focus:ring-4 focus:ring-green-200 active:scale-[0.99]"
                  >
                    <span>View Report</span>
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
          <div className="flex gap-3">
            <span className="mt-0.5">ℹ️</span>
            <p>
              These documents open in a new browser tab via Google Drive
              preview. Please ensure pop-ups are allowed if the report does not
              open.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AnnualReport;