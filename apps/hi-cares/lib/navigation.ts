export type NavSection = {
  name: string;
  href: string;
};

export const navHome: NavSection = {
  name: "Home",
  href: "/#top",
};

/** Brochure table of contents — single-page anchors */
export const navSections: NavSection[] = [
  { name: "Vision", href: "#vision" },
  { name: "Chairman", href: "#message-chairman" },
  { name: "MD", href: "#message-md" },
  { name: "Overview", href: "#overview" },
  { name: "Bangladesh", href: "#bangladesh" },
  { name: "Manpower", href: "#manpower-potentials" },
  { name: "Why HiCare", href: "#why-choose" },
  { name: "Organogram", href: "#organogram" },
  { name: "Services", href: "#services" },
  { name: "Recruitment", href: "#recruitment" },
];
