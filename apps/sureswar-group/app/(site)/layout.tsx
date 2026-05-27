import type { ReactNode } from "react";
import { FixedFacebookSocialLink } from "@/components/facebook-social-link";
import { FixedWhatsAppSocialLink } from "@/components/whatsapp-social-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <FixedFacebookSocialLink />
      <FixedWhatsAppSocialLink />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
