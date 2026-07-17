import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Seo from "../components/Seo";

const LS_KEY = "aspac-balance-selected-asOf";

type DocOption = {
  label: string;
  asOf: string;
  pages: string[];
};

const fileUrl = (name: string) => `/assets/balancesheet/${name}`;

const DOC_OPTIONS: DocOption[] = [
  {
    label: "March 31, 2026 (Q1)",
    asOf: "2026-03-31",
    pages: [
      fileUrl("balancesheet-3-31-2026.jpg"),
      fileUrl("balancesheet-3-31-2026_1.jpg"),
    ],
  },
  {
    label: "December 31, 2025 (Q4)",
    asOf: "2025-12-31",
    pages: [
      fileUrl("balancesheet-12-31-2025_1.jpg"),
      fileUrl("balancesheet-12-31-2025_2.jpg"),
    ],
  },
  {
    label: "September 30, 2025 (Q3)",
    asOf: "2025-09-30",
    pages: [
      fileUrl("balancesheet-9-30-2025_1.jpg"),
      fileUrl("balancesheet-9-30-2025_2.jpg"),
    ],
  },
  {
    label: "June 30, 2025 (Q2)",
    asOf: "2025-06-30",
    pages: [
      fileUrl("balancesheet-6-30-2025.jpg"),
      fileUrl("balancesheet-6-30-2025_1.jpg"),
    ],
  },
  {
    label: "March 31, 2025 (Q1)",
    asOf: "2025-03-31",
    pages: [
      fileUrl("balancesheet-3-31-2025.jpg"),
      fileUrl("balancesheet-3-31-2025_1.jpg"),
    ],
  },
];

const findByAsOf = (asOf: string) => DOC_OPTIONS.find((o) => o.asOf === asOf);

const formatDateLabel = (label: string) => {
  return label.replace(/\s*\((Q\d)\)/, " ($1)");
};

const AspacBankBalanceSheet: React.FC = () => {
  const options = useMemo(() => DOC_OPTIONS, []);

  const initialAsOf = (() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const asOfParam = params.get("asOf");
      if (asOfParam && findByAsOf(asOfParam)) return asOfParam;

      const saved = localStorage.getItem(LS_KEY);
      if (saved && findByAsOf(saved)) return saved;
    } catch {}

    return options[0]?.asOf || "";
  })();

  const [selectedAsOf, setSelectedAsOf] = useState<string>(initialAsOf);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const selectedOption = findByAsOf(selectedAsOf);
  const totalPages = selectedOption?.pages.length ?? 0;
  const currentSrc = selectedOption ? selectedOption.pages[pageIndex] : "";

  const selectedYear = selectedOption?.label.match(/\d{4}/)?.[0] ?? "";
  const selectedQuarter = selectedOption?.label.match(/\((Q\d)\)/)?.[1] ?? "";

  useEffect(() => {
    if (!selectedAsOf) return;

    try {
      localStorage.setItem(LS_KEY, selectedAsOf);

      const url = new URL(window.location.href);
      url.searchParams.set("asOf", selectedAsOf);
      window.history.replaceState({}, "", url.toString());
    } catch {}
  }, [selectedAsOf]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
  }, [currentSrc]);

  const stepPeriod = useCallback(
    (delta: number) => {
      if (!options.length) return;

      const idx = options.findIndex((o) => o.asOf === selectedAsOf);
      const next = options[(idx + delta + options.length) % options.length];

      setSelectedAsOf(next.asOf);
      setPageIndex(0);
    },
    [options, selectedAsOf],
  );

  const stepPage = useCallback(
    (delta: number) => {
      if (totalPages <= 0) return;
      setPageIndex((prev) => (prev + delta + totalPages) % totalPages);
    },
    [totalPages],
  );

  const triggerDownload = useCallback(() => {
    if (!currentSrc) return;

    const a = document.createElement("a");
    a.href = currentSrc;

    const file = currentSrc.split("/").pop() || "balance-sheet.jpg";
    a.download = file;

    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [currentSrc]);

  const enterFullscreen = useCallback(async () => {
    const container = document.getElementById("img-container");
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;

      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

      const key = e.key.toLowerCase();

      if (key === "arrowright" || key === "j") {
        e.preventDefault();
        stepPeriod(1);
      } else if (key === "arrowleft" || key === "k") {
        e.preventDefault();
        stepPeriod(-1);
      }

      if (key === "arrowdown" || key === "n" || key === " ") {
        e.preventDefault();
        stepPage(1);
      } else if (key === "arrowup" || key === "p" || key === "backspace") {
        e.preventDefault();
        stepPage(-1);
      }

      if (key === "o" && currentSrc) {
        window.open(currentSrc, "_blank", "noopener,noreferrer");
      } else if (key === "d") {
        triggerDownload();
      }

      if (key === "f") {
        enterFullscreen();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [currentSrc, stepPeriod, stepPage, triggerDownload, enterFullscreen]);

  return (
    <>
      <Seo
        title="ASPAC Bank Balance Sheets | Quarterly Financial Reports"
        description="View ASPAC Bank balance sheet publications by quarterly reporting period and access available financial documents."
        canonical="https://www.aspacbank.com/advisories/financial-overview/aspacbank-balance-sheet"
        ogType="website"
        ogImage="https://www.aspacbank.com/Aspac_logo-03A.png"
        ogImageAlt="ASPAC Bank logo"
        ogSiteName="ASPAC Bank"
        ogLocale="en_PH"
      />
      <div className="relative min-h-screen overflow-hidden pt-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 pb-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      {/* Top Header */}
      <header className="sticky top-0 z-30 ">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Official Financial Document
            </div>

            <h1 className="truncate text-xl font-bold tracking-tight text-green-950 sm:text-2xl lg:text-3xl">
              ASPAC Bank Balance Sheet
            </h1>

            {selectedOption && (
              <p className="mt-1 text-sm text-gray-600">
                As of{" "}
                <span className="font-semibold text-gray-800">
                  {formatDateLabel(selectedOption.label)}
                </span>
                {totalPages > 1 && (
                  <>
                    {" "}
                    • Page{" "}
                    <span className="font-semibold text-gray-800">
                      {pageIndex + 1}
                    </span>{" "}
                    of {totalPages}
                  </>
                )}
              </p>
            )}
          </div>

          <div className="hidden  gap-2 md:flex sm:items-center">
            <button
              type="button"
              onClick={() => stepPeriod(-1)}
              className="rounded-2xl border border-green-100 bg-white px-3 py-2 text-xs font-semibold text-green-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-green-50 sm:text-sm"
            >
              ← Previous
            </button>

            <button
              type="button"
              onClick={enterFullscreen}
              className="rounded-2xl border border-green-100 bg-white px-3 py-2 text-xs font-semibold text-green-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-green-50 sm:text-sm"
            >
              Fullscreen
            </button>

            <button
              type="button"
              onClick={() => stepPeriod(1)}
              className="rounded-2xl border border-green-100 bg-white px-3 py-2 text-xs font-semibold text-green-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-green-50 sm:text-sm"
            >
              Next →
            </button>
          </div>
          <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 md:hidden">
            <button
              type="button"
              onClick={() => stepPeriod(-1)}
              aria-label="Previous report"
              title="Previous report"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-white text-xl text-green-700 shadow-xl shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-50 active:scale-95"
            >
              ←
            </button>

            <button
              type="button"
              onClick={enterFullscreen}
              aria-label="Fullscreen"
              title="Fullscreen"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-white text-xl text-green-700 shadow-xl shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-50 active:scale-95"
            >
              ⛶
            </button>

            <button
              type="button"
              onClick={() => stepPeriod(1)}
              aria-label="Next report"
              title="Next report"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-white text-xl text-green-700 shadow-xl shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-50 active:scale-95"
            >
              →
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Dashboard Summary */}
        <section className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white/85 shadow-xl shadow-green-900/5 backdrop-blur">
            <div className="p-5 sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-950 sm:text-xl">
                    Balance Sheet Viewer
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Select a reporting period and view the available balance
                    sheet pages in a protected document viewer.
                  </p>
                </div>

                <div className="hidden rounded-2xl bg-gradient-to-br from-[#229b15] to-[#38cb2c] p-3 text-2xl text-white shadow-lg shadow-green-700/20 sm:block">
                  📊
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-green-50 p-4">
                  <p className="text-xs font-semibold text-green-700">
                    Selected Year
                  </p>
                  <p className="mt-1 text-2xl font-bold text-green-950">
                    {selectedYear || "—"}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-xs font-semibold text-emerald-700">
                    Quarter
                  </p>
                  <p className="mt-1 text-2xl font-bold text-emerald-950">
                    {selectedQuarter || "—"}
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-slate-50 p-4 sm:col-span-1">
                  <p className="text-xs font-semibold text-slate-600">Pages</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {totalPages || 0}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-[#229b15] via-[#27b51a] to-[#38cb2c] p-5 text-white shadow-xl shadow-green-900/10 sm:p-7">
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-14 -left-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />

              <div className="relative">
                <p className="text-sm font-semibold text-white/80">
                  Current Report
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {selectedOption?.label || "No report selected"}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Use the controls below to switch period, change page, open in
                  new tab, download, or enter fullscreen mode.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Keyboard: J / K
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Page: N / P
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Fullscreen: F
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Controls */}
        <section className="mb-5 rounded-[2rem] border border-green-100 bg-white/90 p-4 shadow-lg shadow-green-900/5 backdrop-blur sm:p-5">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-end">
            <div>
              <label
                htmlFor="period"
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500"
              >
                Reporting period
              </label>

              <div className="relative">
                <select
                  id="period"
                  className="w-full appearance-none rounded-2xl border border-green-100 bg-green-50/70 px-4 py-3 pr-10 text-sm font-semibold text-gray-800 outline-none transition focus:border-[#459243] focus:bg-white focus:ring-4 focus:ring-green-100"
                  value={selectedAsOf}
                  onChange={(e) => {
                    setSelectedAsOf(e.target.value);
                    setPageIndex(0);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.asOf} value={option.asOf}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  ▾
                </span>
              </div>
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col">
                <label
                  htmlFor="page"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500"
                >
                  Page
                </label>

                <div className="flex self-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => stepPage(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-100 bg-white text-green-700 shadow-sm transition hover:bg-green-50"
                  >
                    ←
                  </button>

                  <select
                    id="page"
                    className="h-full md:h-11 rounded-2xl border border-green-100 bg-white px-4 text-sm font-semibold text-gray-700 outline-none focus:border-[#459243] focus:ring-4 focus:ring-green-100"
                    value={pageIndex}
                    onChange={(e) => setPageIndex(Number(e.target.value))}
                  >
                    {Array.from({ length: totalPages }, (_, index) => (
                      <option key={index} value={index}>
                        Page {index + 1}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => stepPage(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-green-100 bg-white text-green-700 shadow-sm transition hover:bg-green-50"
                  >
                    →
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <a
                href={currentSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-green-100 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:bg-green-50 sm:flex-none"
              >
                Open
              </a>

              <button
                type="button"
                onClick={triggerDownload}
                className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-[#229b15] to-[#38cb2c] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 transition hover:scale-[1.01] active:scale-[0.99] sm:flex-none"
              >
                Download
              </button>
            </div>
          </div>
        </section>

        {/* Period Cards */}
        <section className="mb-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-gray-950">
                Available Balance Sheets
              </h2>
              <p className="text-sm text-gray-500">
                Tap a period to quickly switch documents.
              </p>
            </div>

            <span className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-green-700 shadow-sm ring-1 ring-green-100 sm:inline-flex">
              {options.length} reports
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {options.map((option) => {
              const isActive = option.asOf === selectedAsOf;
              const quarter = option.label.match(/\((Q\d)\)/)?.[1] ?? "";
              const year = option.label.match(/\d{4}/)?.[0] ?? "";

              return (
                <button
                  key={option.asOf}
                  type="button"
                  onClick={() => {
                    setSelectedAsOf(option.asOf);
                    setPageIndex(0);
                  }}
                  className={[
                    "min-w-[210px] rounded-3xl border p-4 text-left transition duration-300 lg:min-w-0",
                    isActive
                      ? "border-[#459243] bg-gradient-to-br from-[#459243] to-[#38cb2c] text-white shadow-xl shadow-green-700/20"
                      : "border-green-100 bg-white/85 text-gray-700 shadow-sm hover:-translate-y-0.5 hover:border-green-200 hover:bg-white hover:shadow-lg",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={[
                        "rounded-full px-2.5 py-1 text-xs font-bold",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-green-100 text-green-700",
                      ].join(" ")}
                    >
                      {quarter || "Report"}
                    </span>

                    <span
                      className={[
                        "text-xs font-semibold",
                        isActive ? "text-white/80" : "text-gray-400",
                      ].join(" ")}
                    >
                      {option.pages.length} page
                      {option.pages.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3
                    className={[
                      "mt-4 text-xl font-bold",
                      isActive ? "text-white" : "text-gray-950",
                    ].join(" ")}
                  >
                    {year}
                  </h3>

                  <p
                    className={[
                      "mt-1 text-xs leading-relaxed",
                      isActive ? "text-white/85" : "text-gray-500",
                    ].join(" ")}
                  >
                    {option.label}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Image Viewer */}
        <section
          id="img-container"
          className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-2xl shadow-green-900/10"
        >
          <div className="flex flex-col gap-3 border-b border-green-100 bg-gradient-to-r from-green-50 to-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-green-950">
                {selectedOption?.label}
              </p>
              <p className="text-xs text-gray-500">
                Protected image preview • Page {pageIndex + 1} of {totalPages}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {!isError && !isLoading && (
                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-green-100">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Loaded
                </span>
              )}

              {isLoading && !isError && (
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                  Loading
                </span>
              )}

              {isError && (
                <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-red-100">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Error
                </span>
              )}
            </div>
          </div>

          <div
            className="flex items-center justify-center bg-slate-100 p-2 sm:p-4"
            style={{ minHeight: "min(85vh, calc(100vh - 220px))" }}
          >
            {isLoading && !isError && (
              <div className="flex h-[60vh] w-full max-w-4xl animate-pulse items-center justify-center rounded-3xl bg-white shadow-inner md:h-[75vh]">
                <div className="w-full max-w-md space-y-4 px-8">
                  <div className="h-4 w-3/4 rounded-full bg-gray-200" />
                  <div className="h-4 w-full rounded-full bg-gray-200" />
                  <div className="h-4 w-5/6 rounded-full bg-gray-200" />
                  <div className="h-72 rounded-3xl bg-gray-200" />
                </div>
              </div>
            )}

            {isError && (
              <div className="w-full max-w-lg rounded-[2rem] border border-red-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-red-50 text-3xl">
                  ⚠️
                </div>

                <h3 className="text-lg font-bold text-gray-950">
                  Unable to display image
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {isError}
                </p>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <a
                    className="inline-flex items-center justify-center rounded-2xl bg-[#459243] px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                    href={currentSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open current page
                  </a>

                  <button
                    onClick={triggerDownload}
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    Download current page
                  </button>
                </div>
              </div>
            )}

            {!isError && currentSrc && (
              <img
                ref={imgRef}
                src={currentSrc}
                alt={`ASPAC Bank Balance Sheet ${selectedOption?.label} page ${
                  pageIndex + 1
                }`}
                className={[
                  "h-auto max-w-full rounded-xl bg-white shadow-lg transition duration-300",
                  isLoading ? "hidden" : "block",
                ].join(" ")}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setIsError(
                    "We couldn’t display the image in this browser. You can still open it in a new tab or download it below.",
                  );
                }}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            )}
          </div>
        </section>

        <p className="mt-5 text-center text-xs text-gray-400">
          Documents are provided for viewing purposes only. Right-click and drag
          actions are disabled as an extra deterrent.
        </p>
      </main>
      </div>
    </>
  );
};

export default AspacBankBalanceSheet;
