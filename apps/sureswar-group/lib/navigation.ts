import { externalUrls } from "./site-config";

export type NavLeaf = {
  label: string;
  /** Shorter label for the top bar (e.g. uppercase “ABOUT”). */
  headerLabel?: string;
  href: string;
  external?: boolean;
};

export type NavBranch = {
  label: string;
  headerLabel?: string;
  children: NavLeaf[];
};

export type NavEntry = NavLeaf | NavBranch;

function isBranch(entry: NavEntry): entry is NavBranch {
  return "children" in entry;
}

export const mainNav: NavEntry[] = [
  { label: "Home", headerLabel: "HOME", href: "/" },
  {
    label: "About Sureswar Group",
    headerLabel: "ABOUT",
    children: [
      { label: "Our Vision", href: "/about#our-vision" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Business Values", href: "/about#business-values" },
    ],
  },
  {
    label: "Our Companies",
    headerLabel: "OUR COMPANIES",
    children: [
      {
        label: "Sureswar Travels",
        href: externalUrls.sureswarTravels,
        external: true,
      },
      { label: "Sadi Corporation", href: "/sadi-corporation" },
      {
        label: "HiCare Services Ltd.",
        href: externalUrls.hiCareServices,
        external: true,
      },
      { label: "Holiday Express", href: "/holiday-express" },
    ],
  },
  {
    label: "Sadi Corporation",
    headerLabel: "SERVICES",
    children: [
      { label: "Overview", href: "/sadi-corporation" },
      { label: "Contracting Services", href: "/sadi-corporation#contracting-services" },
      { label: "Electrical Works", href: "/sadi-corporation#electrical-works" },
      {
        label: "Supply & Security Equipment",
        href: "/sadi-corporation#supply-security-equipment",
      },
      { label: "Contact", href: "/sadi-corporation#contact" },
    ],
  },
  {
    label: "Holiday Express",
    headerLabel: "TOURS",
    children: [
      { label: "Overview", href: "/holiday-express" },
      { label: "Tour Packages", href: "/holiday-express#tour-packages" },
      { label: "Visa Assistance", href: "/holiday-express#visa-assistance" },
      { label: "Contact", href: "/holiday-express#contact" },
    ],
  },
  { label: "News / Updates", headerLabel: "NEWS", href: "/news" },
  {
    label: "Contact Us",
    headerLabel: "CONTACT",
    children: [
      { label: "Inquiry Form", href: "/contact#inquiry" },
      { label: "Phone / Email", href: "/contact#details" },
      { label: "Google Map", href: "/contact#map" },
    ],
  },
];

export { isBranch };
