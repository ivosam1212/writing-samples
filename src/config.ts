export const SITE = {
  title: "Ivo Sam",
  description: "Site containing my technical writing samples.",
  defaultLanguage: "en_US",
  github: "ivosam1212",
  linkedin: "ivosam2",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "About me", header: true },
  { text: "My experience", link: "/patterns/about_me" },

  { text: "Writing samples", header: true },
  { text: "Sample 1. Instructions", link: "/core/sample_1" },
  { text: "Colors", link: "/core/colors" },
  { text: "Typography", link: "/core/typography" },
  { text: "Shadows", link: "/core/shadows" },

  { text: "Live documentation", header: true },
  { text: "Product", link: "/components/product_documentation" },
  { text: "Input", link: "/components/input" },
  { text: "Status pills", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },
];
