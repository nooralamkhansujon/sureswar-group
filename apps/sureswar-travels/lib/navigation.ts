export type NavSection = {
  name: string;
  href: string;
};

export const navSections: NavSection[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Hajj & Umrah", href: "/hajj-umrah" },
  { name: "Packages", href: "/packages" },
  // { name: "Contact", href: "/contact" },
];
