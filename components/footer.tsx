import { ReactNode } from "react";
import { GithubIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  copyright = "© 2025 Yashi. All rights reserved",
  showModeToggle = false,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-5 py-6 md:py-7", className)}>
      <div className="flex justify-center items-center w-full max-w-5xl mx-auto mb-4">
        <Footer>
          <FooterContent>
            <FooterColumn>
              <a href="#about-me" className="text-md pt-1 font-semibold block">
                About Me
              </a>
            </FooterColumn>
            <FooterColumn>
              <a href="#profile" className="text-md pt-1 font-semibold block">
                Profile
              </a>
            </FooterColumn>
            <FooterColumn>
              <a href="#blog" className="text-md pt-1 font-semibold block">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <a href="#works" className="text-md pt-1 font-semibold block">
                Works
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">SNS</h3>
              <a
                href={siteConfig.links.github}
                className="text-muted-foreground text-sm inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  className="size-4 text-foreground"
                  aria-hidden="true"
                />
                GitHub
              </a>
            </FooterColumn>
          </FooterContent>

          <FooterBottom className="pt-0">
            <div className="flex-1 text-center">{copyright}</div>
            <div className="flex items-center gap-4">
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
