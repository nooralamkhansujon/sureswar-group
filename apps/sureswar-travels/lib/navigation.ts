export type NavSection = {
  name: string;
  href: string;
};

export const navHome: NavSection = {
  name: "Home",
  href: "/#top",
};

export const navSections: NavSection[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Hajj & Umrah", href: "#hajj-umrah" },
  { name: "Packages", href: "#packages" },
  { name: "Chairman", href: "#chairman" },
  { name: "Team", href: "#team" },
];
