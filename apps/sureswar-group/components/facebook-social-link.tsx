import FacebookIcon from "@mui/icons-material/Facebook";
import { contact } from "@/lib/site-config";

type FacebookSocialLinkProps = {
  className?: string;
};

export function FacebookSocialLink({ className = "" }: FacebookSocialLinkProps) {
  return (
    <a
      href={contact.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Sureswar Group on Facebook"
      className={`inline-flex items-center justify-center rounded-full text-white transition-all duration-200 ${className}`}
    >
      <FacebookIcon sx={{ fontSize: 22 }} />
    </a>
  );
}

export function FixedFacebookSocialLink() {
  return (
    <FacebookSocialLink
      className="fixed left-2 top-1/2 z-[1200] h-11 w-11 -translate-y-1/2 border border-white/25 bg-[#1877F2] shadow-lg shadow-black/25 hover:border-white/40 hover:bg-[#166fe5] hover:shadow-xl sm:left-2"
    />
  );
}
