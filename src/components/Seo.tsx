import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
}

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    document.title = title.length > 60 ? title.slice(0, 57) + "..." : title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        (description || "").slice(0, 155)
      );
    } else if (description) {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      m.setAttribute("content", description.slice(0, 155));
      document.head.appendChild(m);
    }

    const canonicalHref = window.location.origin + window.location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [title, description]);

  return null;
};

export default Seo;
