import React, { useEffect, useMemo, useState } from "react";
import ReadonlyPdfViewer from "../ReadonlyPdfViewer";

type Year = 2024 | 2025;
type ReportId = "annual-2024" | "part2-afs-2024" | "annual-2025";

type ReportConfig = {
  id: ReportId;
  year: Year;
  title: string;
  pdfPath: string;
  description: string;
  type: string;
};

export default function AnnualReport2024() {
  const REPORTS: ReportConfig[] = useMemo(
    () => [
      {
        id: "annual-2024",
        year: 2024,
        title: "Annual Report 2024",
        pdfPath: "/annual-report/2024/AnnualReport2024.pdf",
        description:
          "View ASPAC Bank's official annual report for the year 2024.",
        type: "Annual Report",
      },
      {
        id: "part2-afs-2024",
        year: 2024,
        title: "Part II AFS of Aspac Rural Bank 2024",
        pdfPath: "/annual-report/2024/part-ii-afs/Part2AFS2024.pdf",
        description:
          "View the Part II Audited Financial Statements of ASPAC Rural Bank for 2024.",
        type: "Financial Statement",
      },
      {
        id: "annual-2025",
        year: 2025,
        title: "Annual Report 2025",
        pdfPath: "",
        description:
          "The 2025 annual report will be available once officially published.",
        type: "Coming Soon",
      },
    ],
    [],
  );

  const YEARS: Year[] = useMemo(() => [2024, 2025], []);

  const [activeYear, setActiveYear] = useState<Year>(2024);

  const reportsForYear = useMemo(
    () => REPORTS.filter((report) => report.year === activeYear),
    [REPORTS, activeYear],
  );

  const defaultReportIdByYear: Record<Year, ReportId> = useMemo(
    () => ({
      2024: "annual-2024",
      2025: "annual-2025",
    }),
    [],
  );

  const [activeReportId, setActiveReportId] = useState<ReportId>(
    defaultReportIdByYear[2024],
  );

  useEffect(() => {
    setActiveReportId(defaultReportIdByYear[activeYear]);
  }, [activeYear, defaultReportIdByYear]);

  const current = useMemo(() => {
    return (
      REPORTS.find((report) => report.id === activeReportId) ??
      reportsForYear[0] ??
      REPORTS[0]
    );
  }, [REPORTS, activeReportId, reportsForYear]);

  const hasPdf = Boolean(current.pdfPath);

  useEffect(() => {
    const block = (e: MouseEvent) => e.preventDefault();

    document.addEventListener("contextmenu", block, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", block, { capture: true });
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br pt-24 from-green-50 via-white to-emerald-50 px-3 py-6 sm:px-5 md:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-6 overflow-hidden rounded-[2rem] border border-green-100 bg-white/85 shadow-xl shadow-green-900/5 backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Official Bank Reports
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl lg:text-4xl">
                ASPAC Bank Annual Reports
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Access ASPAC Bank’s published annual reports and financial
                statement documents. Select a year and report below to view the
                protected PDF preview.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {YEARS.map((year) => {
                  const isActive = year === activeYear;
                  const yearReports = REPORTS.filter(
                    (report) => report.year === year,
                  );
                  const availableCount = yearReports.filter(
                    (report) => report.pdfPath,
                  ).length;

                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setActiveYear(year)}
                      className={[
                        "group rounded-2xl border p-4 text-left transition duration-300",
                        isActive
                          ? "border-[#459243] bg-gradient-to-br from-[#459243] to-[#38cb2c] text-white shadow-lg shadow-green-700/20"
                          : "border-green-100 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={[
                            "text-xl font-bold",
                            isActive ? "text-white" : "text-green-900",
                          ].join(" ")}
                        >
                          {year}
                        </span>

                        <span
                          className={[
                            "rounded-full px-2 py-1 text-[10px] font-semibold",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-green-100 text-green-700",
                          ].join(" ")}
                        >
                          {availableCount > 0
                            ? `${availableCount} available`
                            : "Soon"}
                        </span>
                      </div>

                      <p
                        className={[
                          "mt-2 text-xs",
                          isActive ? "text-white/85" : "text-gray-500",
                        ].join(" ")}
                      >
                        {yearReports.length} report
                        {yearReports.length > 1 ? "s" : ""} listed
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Decorative Report Preview */}
            <div className="relative hidden min-h-[280px] overflow-hidden bg-gradient-to-br from-[#229b15] via-[#27b51a] to-[#38cb2c] lg:block">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-white/20 blur-2xl" />

              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="w-full max-w-xs rounded-[2rem] bg-white/20 p-6 text-white shadow-2xl ring-1 ring-white/30 backdrop-blur-md">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/85">
                      PDF Preview
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs">
                      Protected
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded-full bg-white/80" />
                    <div className="h-3 w-full rounded-full bg-white/40" />
                    <div className="h-3 w-5/6 rounded-full bg-white/40" />
                    <div className="h-28 rounded-2xl bg-white/20" />
                  </div>

                  <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-center text-sm font-bold text-green-700">
                    View Annual Report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Report Selector */}
        <div className="mb-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Reports for {activeYear}
              </h2>
              <p className="text-sm text-gray-500">
                Choose a document to preview.
              </p>
            </div>

            <div className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm ring-1 ring-green-100 sm:block">
              {reportsForYear.length} document
              {reportsForYear.length > 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {reportsForYear.map((report) => {
              const isActive = report.id === activeReportId;
              const isAvailable = Boolean(report.pdfPath);

              return (
                <button
                  key={report.id}
                  type="button"
                  onClick={() => setActiveReportId(report.id)}
                  className={[
                    "group relative overflow-hidden rounded-3xl border p-4 text-left transition duration-300 sm:p-5",
                    isActive
                      ? "border-[#459243] bg-white shadow-xl shadow-green-900/10"
                      : "border-green-100 bg-white/80 shadow-sm hover:-translate-y-0.5 hover:border-green-200 hover:bg-white hover:shadow-lg",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "absolute right-0 top-0 h-24 w-24 rounded-bl-full transition",
                      isActive ? "bg-green-100" : "bg-gray-50",
                    ].join(" ")}
                  />

                  <div className="relative flex gap-4">
                    <div
                      className={[
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ring-1",
                        isActive
                          ? "bg-green-50 text-green-700 ring-green-100"
                          : "bg-gray-50 text-gray-500 ring-gray-100",
                      ].join(" ")}
                    >
                      {isAvailable ? "📄" : "⏳"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span
                          className={[
                            "rounded-full px-2.5 py-1 text-[10px] font-bold",
                            isAvailable
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700",
                          ].join(" ")}
                        >
                          {isAvailable ? report.type : "Coming Soon"}
                        </span>

                        {isActive && (
                          <span className="rounded-full bg-[#459243] px-2.5 py-1 text-[10px] font-bold text-white">
                            Selected
                          </span>
                        )}
                      </div>

                      <h3
                        className={[
                          "truncate text-sm font-bold sm:text-base",
                          isActive ? "text-green-900" : "text-gray-900",
                        ].join(" ")}
                      >
                        {report.title}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                        {report.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Report Title Bar */}
        <div className="mb-4 rounded-3xl border border-green-100 bg-white/85 p-4 shadow-sm backdrop-blur sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  {current.year}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {current.type}
                </span>
              </div>

              <h2 className="truncate text-lg font-bold text-gray-950 sm:text-xl">
                {current.title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {hasPdf
                  ? "The document is displayed below in protected preview mode."
                  : "This document is not yet available."}
              </p>
            </div>

            {hasPdf && (
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                PDF Available
              </div>
            )}
          </div>
        </div>

        {/* PDF Area */}
        {!hasPdf ? (
          <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-amber-50 shadow-sm">
            <div className="p-6 text-center sm:p-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-3xl">
                ⏳
              </div>

              <h3 className="text-xl font-bold text-amber-900">
                No PDF available yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-amber-800">
                The {current.title} is not yet uploaded. Once the official PDF
                is available, it will appear here automatically.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-2xl shadow-green-900/10">
            <div className="flex items-center justify-between gap-3 border-b border-green-100 bg-gradient-to-r from-green-50 to-white px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-green-900">
                  {current.title}
                </p>
                <p className="text-xs text-gray-500">
                  Read-only PDF preview
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-green-100 sm:flex">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Loaded
              </div>
            </div>

            <div className="bg-slate-100 p-2 sm:p-4">
              <ReadonlyPdfViewer
                pdfUrl={current.pdfPath}
                containerHeight={1050}
                maxPageWidth={900}
                scale={1.5}
              />
            </div>
          </div>
        )}

        <p className="mt-5 text-center text-xs text-gray-400">
          Documents are provided for viewing purposes only.
        </p>
      </div>
    </section>
  );
}