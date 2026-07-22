import { useEffect } from "react";

type JsonLd = Record<string, any>;

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string; // absolute URL preferred
  ogImage?: string; // absolute URL preferred
  ogImageAlt?: string;

  jsonLd?: JsonLd; // single JSON-LD block
  jsonLdList?: JsonLd[]; // multiple JSON-LD blocks

  // Open Graph options
  ogType?: string; // "website" | "article" | "product" ...
  ogSiteName?: string; // e.g., "ASPAC Bank"
  ogLocale?: string; // e.g., "en_PH"

  // Twitter options (off by default)
  includeTwitter?: boolean; // set true only if you want Twitter tags
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string; // e.g., "@aspacbank"
  twitterCreator?: string;

  // Robots controls
  noindex?: boolean;
  nofollow?: boolean;

  // Icons / PWA / theme
  themeColor?: string; // e.g., "#0a3d62"
  iconHref?: string; // e.g., "https://www.aspacbank.com/favicon.ico"
  appleTouchIconHref?: string; // e.g., "https://www.aspacbank.com/apple-touch-icon.png"
  manifestHref?: string; // e.g., "https://www.aspacbank.com/manifest.json"
};

// Confirmed canonical production domain (matches robots.txt, sitemap.xml,
// index.html, and the www redirect already deployed). If this ever changes,
// update it here — every canonical/OG/Twitter URL in the app derives from it.
export const SITE_URL = "https://www.aspacbank.com";
const SITE_ORIGIN = SITE_URL;
const DEFAULT_TITLE = "ASPAC Bank";
const DEFAULT_DESCRIPTION = "ASPAC Bank – reliable banking services.";
const DEFAULT_OG_SITE_NAME = "ASPAC Bank";
const DEFAULT_OG_LOCALE = "en_PH";
const DEFAULT_THEME_COLOR = "#459243";
const DEFAULT_ICON_HREF = `${SITE_ORIGIN}/favicon.ico`;
const DEFAULT_APPLE_TOUCH_ICON_HREF = `${SITE_ORIGIN}/apple-touch-icon.png`;
const DEFAULT_MANIFEST_HREF = `${SITE_ORIGIN}/manifest.json`;
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/Aspac_logo-03A.png`;
const DEFAULT_OG_IMAGE_ALT = "ASPAC Bank logo";
const DATA_ATTR = "data-seo-managed";
const JSON_LD_ATTR = "data-seo-jsonld";

const OPEN_GRAPH_PROPERTIES = [
  "og:type",
  "og:title",
  "og:description",
  "og:url",
  "og:image",
  "og:image:alt",
  "og:site_name",
  "og:locale",
];

const TWITTER_NAMES = [
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
  "twitter:image:alt",
  "twitter:site",
  "twitter:creator",
];

function removeElements(selector: string) {
  document.head.querySelectorAll(selector).forEach((element) => element.remove());
}

function upsertUniqueTitle(content: string) {
  const matches = Array.from(document.head.querySelectorAll("title"));
  const element = matches.shift() ?? document.createElement("title");

  matches.forEach((duplicate) => duplicate.remove());
  element.textContent = content;

  if (!element.parentNode) {
    document.head.appendChild(element);
  }
}

function upsertUniqueMeta(
  keyAttr: "name" | "property",
  keyValue: string,
  content: string,
) {
  const selector = `meta[${keyAttr}="${keyValue}"]`;
  const matches = Array.from(
    document.head.querySelectorAll<HTMLMetaElement>(selector),
  );
  const element = matches.shift() ?? document.createElement("meta");

  matches.forEach((duplicate) => duplicate.remove());
  element.setAttribute(keyAttr, keyValue);
  element.setAttribute("content", content);
  element.setAttribute(DATA_ATTR, "1");

  if (!element.parentNode) {
    document.head.appendChild(element);
  }
}

function upsertUniqueLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  const matches = Array.from(
    document.head.querySelectorAll<HTMLLinkElement>(selector),
  );
  const element = matches.shift() ?? document.createElement("link");

  matches.forEach((duplicate) => duplicate.remove());
  element.setAttribute("rel", rel);
  element.setAttribute("href", href);
  element.setAttribute(DATA_ATTR, "1");

  if (!element.parentNode) {
    document.head.appendChild(element);
  }
}

function keepFirst(selector: string) {
  const matches = Array.from(document.head.querySelectorAll(selector));
  matches.slice(1).forEach((duplicate) => duplicate.remove());
}

function snapshotFirst(selector: string) {
  const element = document.head.querySelector<HTMLElement>(selector);
  return element ? (element.cloneNode(true) as HTMLElement) : null;
}

function restoreFirst(selector: string, snapshot: HTMLElement | null) {
  removeElements(selector);
  if (snapshot) {
    document.head.appendChild(snapshot);
  }
}

function canonicalFor(value?: string) {
  const fallbackPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  try {
    const parsed = new URL(value || fallbackPath, SITE_ORIGIN);
    return `${SITE_ORIGIN}${parsed.pathname || "/"}`;
  } catch {
    return `${SITE_ORIGIN}${fallbackPath || "/"}`;
  }
}

function validateJsonLdValue(
  value: unknown,
  path: string,
  ancestors: Set<object>,
) {
  if (value === null || typeof value === "string" || typeof value === "boolean") {
    return;
  }

  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new TypeError(`${path} contains a non-finite number.`);
    }
    return;
  }

  if (typeof value !== "object") {
    throw new TypeError(`${path} contains an unsupported ${typeof value} value.`);
  }

  if (ancestors.has(value)) {
    throw new TypeError(`${path} contains a circular reference.`);
  }

  ancestors.add(value);

  if (Array.isArray(value)) {
    for (let index = 0; index < value.length; index += 1) {
      if (!Object.prototype.hasOwnProperty.call(value, index)) {
        throw new TypeError(`${path} contains a sparse array.`);
      }
      validateJsonLdValue(value[index], `${path}[${index}]`, ancestors);
    }

    const extraKeys = Object.keys(value).filter(
      (key) => !/^\d+$/.test(key) || Number(key) >= value.length,
    );
    if (extraKeys.length > 0) {
      throw new TypeError(`${path} contains unsupported array properties.`);
    }
  } else {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) {
      throw new TypeError(`${path} contains an unsupported object type.`);
    }

    if (Object.getOwnPropertySymbols(value).length > 0) {
      throw new TypeError(`${path} contains symbol-keyed properties.`);
    }

    Object.entries(value).forEach(([key, nestedValue]) => {
      validateJsonLdValue(nestedValue, `${path}.${key}`, ancestors);
    });
  }

  ancestors.delete(value);
}

function serializeJsonLdBlocks(jsonLd?: JsonLd, jsonLdList?: JsonLd[]) {
  const blocks: JsonLd[] = [
    ...(jsonLd ? [jsonLd] : []),
    ...(jsonLdList ?? []),
  ];

  const serializedBlocks = blocks.map((block, index) => {
    try {
      validateJsonLdValue(block, `JSON-LD block ${index}`, new Set());
      const serialized = JSON.stringify(block);

      if (typeof serialized !== "string") {
        throw new TypeError(`JSON-LD block ${index} could not be serialized.`);
      }

      return serialized;
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      throw new TypeError(`Invalid JSON-LD: ${reason}`);
    }
  });

  return JSON.stringify(serializedBlocks);
}

function removeRouteMetadata() {
  removeElements('link[rel="canonical"]');
  removeElements('meta[name="robots"]');
  removeElements('meta[name="googlebot"]');
  OPEN_GRAPH_PROPERTIES.forEach((property) =>
    removeElements(`meta[property="${property}"]`),
  );
  TWITTER_NAMES.forEach((name) =>
    removeElements(`meta[name="${name}"]`),
  );
  removeElements(`script[${JSON_LD_ATTR}]`);
}

export default function Seo({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  jsonLd,
  jsonLdList,

  ogType = "website",
  ogSiteName = DEFAULT_OG_SITE_NAME,
  ogLocale = DEFAULT_OG_LOCALE,

  includeTwitter = false,
  twitterCard = "summary_large_image",
  twitterSite,
  twitterCreator,

  noindex,
  nofollow,

  themeColor = DEFAULT_THEME_COLOR,
  iconHref = DEFAULT_ICON_HREF,
  appleTouchIconHref = DEFAULT_APPLE_TOUCH_ICON_HREF,
  manifestHref = DEFAULT_MANIFEST_HREF,
}: SeoProps) {
  const serializedJsonLdBlocks = serializeJsonLdBlocks(jsonLd, jsonLdList);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const effectiveTitle = title || DEFAULT_TITLE;
    const effectiveDescription = description || DEFAULT_DESCRIPTION;
    const effectiveCanonical = canonicalFor(canonical);
    const robots = `${noindex ? "noindex" : "index"}, ${
      nofollow ? "nofollow" : "follow"
    }`;

    const themeColorSnapshot = snapshotFirst('meta[name="theme-color"]');
    const iconSnapshot = snapshotFirst('link[rel="icon"]');
    const appleTouchIconSnapshot = snapshotFirst(
      'link[rel="apple-touch-icon"]',
    );
    const manifestSnapshot = snapshotFirst('link[rel="manifest"]');

    removeRouteMetadata();

    upsertUniqueTitle(effectiveTitle);
    upsertUniqueMeta("name", "description", effectiveDescription);
    upsertUniqueLink("canonical", effectiveCanonical);
    upsertUniqueMeta("name", "robots", robots);
    upsertUniqueMeta("name", "googlebot", robots);

    if (themeColor) {
      upsertUniqueMeta("name", "theme-color", themeColor);
    } else {
      keepFirst('meta[name="theme-color"]');
    }

    if (iconHref) {
      upsertUniqueLink("icon", iconHref);
    } else {
      keepFirst('link[rel="icon"]');
    }

    if (appleTouchIconHref) {
      upsertUniqueLink("apple-touch-icon", appleTouchIconHref);
    } else {
      keepFirst('link[rel="apple-touch-icon"]');
    }

    if (manifestHref) {
      upsertUniqueLink("manifest", manifestHref);
    } else {
      keepFirst('link[rel="manifest"]');
    }

    upsertUniqueMeta("property", "og:type", ogType);
    upsertUniqueMeta("property", "og:title", effectiveTitle);
    upsertUniqueMeta("property", "og:description", effectiveDescription);
    upsertUniqueMeta("property", "og:url", effectiveCanonical);

    if (ogImage) {
      upsertUniqueMeta("property", "og:image", ogImage);
      if (ogImageAlt) {
        upsertUniqueMeta("property", "og:image:alt", ogImageAlt);
      }
    }

    if (ogSiteName) {
      upsertUniqueMeta("property", "og:site_name", ogSiteName);
    }

    if (ogLocale) {
      upsertUniqueMeta("property", "og:locale", ogLocale);
    }

    if (includeTwitter) {
      upsertUniqueMeta("name", "twitter:card", twitterCard);
      upsertUniqueMeta("name", "twitter:title", effectiveTitle);
      upsertUniqueMeta("name", "twitter:description", effectiveDescription);

      if (ogImage) {
        upsertUniqueMeta("name", "twitter:image", ogImage);
        if (ogImageAlt) {
          upsertUniqueMeta("name", "twitter:image:alt", ogImageAlt);
        }
      }

      if (twitterSite) {
        upsertUniqueMeta("name", "twitter:site", twitterSite);
      }

      if (twitterCreator) {
        upsertUniqueMeta("name", "twitter:creator", twitterCreator);
      }
    }

    const blocks = JSON.parse(serializedJsonLdBlocks) as string[];

    blocks.forEach((block, index) => {
      const element = document.createElement("script");
      element.type = "application/ld+json";
      element.text = block;
      element.setAttribute(JSON_LD_ATTR, `block-${index}`);
      document.head.appendChild(element);
    });

    return () => {
      removeRouteMetadata();
      upsertUniqueTitle(DEFAULT_TITLE);
      upsertUniqueMeta("name", "description", DEFAULT_DESCRIPTION);
      upsertUniqueMeta("name", "robots", "index, follow");
      upsertUniqueMeta("name", "googlebot", "index, follow");

      restoreFirst('meta[name="theme-color"]', themeColorSnapshot);
      restoreFirst('link[rel="icon"]', iconSnapshot);
      restoreFirst(
        'link[rel="apple-touch-icon"]',
        appleTouchIconSnapshot,
      );
      restoreFirst('link[rel="manifest"]', manifestSnapshot);
    };
  }, [
    title,
    description,
    canonical,
    ogImage,
    ogImageAlt,
    serializedJsonLdBlocks,
    ogType,
    ogSiteName,
    ogLocale,
    includeTwitter,
    twitterCard,
    twitterSite,
    twitterCreator,
    noindex,
    nofollow,
    themeColor,
    iconHref,
    appleTouchIconHref,
    manifestHref,
  ]);

  return null;
}
