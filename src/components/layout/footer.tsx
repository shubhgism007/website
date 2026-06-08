import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  Solutions: [
    { href: "/solutions/learning-education", label: "Learning & Education" },
    { href: "/solutions/workforce-hr", label: "Workforce & HR" },
    { href: "/solutions/training-simulation", label: "Training & Simulation" },
    { href: "/solutions/customer-operations", label: "Customer Operations" },
    { href: "/solutions/knowledge-management", label: "Knowledge Management" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/deployment", label: "Deployment" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/accelerators", label: "Accelerator Library" },
    { href: "/contact", label: "Schedule a Demo" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Logo iconSize={28} showTagline />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Deploy Enterprise AI Faster. Business-ready accelerators tailored
              to your workflows.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-brand hover:text-brand/80 transition-colors"
            >
              Schedule Discovery Session
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border py-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Avyu.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
