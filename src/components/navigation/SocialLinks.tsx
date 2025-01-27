import { Instagram, Facebook, Youtube } from "lucide-react";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wood-dark hover:text-wood transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wood-dark hover:text-wood transition-colors"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wood-dark hover:text-wood transition-colors"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  );
};