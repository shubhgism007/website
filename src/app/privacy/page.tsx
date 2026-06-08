import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy | Avyu.ai",
  description:
    "Avyu.ai's Privacy Policy — how we collect, use, and protect information submitted through our website.",
};

const EFFECTIVE_DATE = "June 8, 2026";
const CONTACT_EMAIL = "contact@avyu.ai";

export default function PrivacyPolicyPage() {
  return (
    <Section variant="grid" className="pt-24 pb-24">
      <div className="max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose-legal">
          <p>
            Avyu.ai (&quot;Avyu&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website at{" "}
            <strong>avyu.ai</strong> (the &quot;Site&quot;). This Privacy Policy explains what
            information we collect when you visit the Site or submit an inquiry,
            how we use it, and your rights regarding that information.
          </p>
          <p>
            We do not sell, rent, or trade your personal information. Full stop.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information you provide directly</h3>
          <p>
            When you submit the Discovery Session request form on our Contact
            page, we collect:
          </p>
          <ul>
            <li>Full name</li>
            <li>Work email address</li>
            <li>Company name</li>
            <li>Your role or title</li>
            <li>A description of your primary business challenge</li>
            <li>Any additional message you choose to include</li>
          </ul>
          <p>
            We collect only what you actively type into the form. We do not
            require account creation or passwords to use the Site.
          </p>

          <h3>Automatically collected information</h3>
          <p>
            When you visit the Site, standard web server logs may record your
            IP address, browser type, referring URL, and pages visited. This
            data is used solely for infrastructure monitoring and security. We
            do not use third-party advertising trackers or behavioural analytics
            on this Site.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>Information submitted through the contact form is used exclusively to:</p>
          <ul>
            <li>
              Respond to your inquiry and schedule a Discovery Session with our
              team
            </li>
            <li>
              Understand your business context so we can recommend the most
              relevant accelerators
            </li>
            <li>
              Follow up on any deployment or customization discussions you
              initiate
            </li>
          </ul>
          <p>
            We do not use your information for automated decision-making,
            profiling, or unsolicited marketing without your explicit consent.
          </p>

          <h2>3. How We Share Your Information</h2>
          <p>
            We do not share your personal information with third parties except
            in the following limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Email delivery:</strong> Form submissions are routed
              through Resend (resend.com), our transactional email provider,
              solely to deliver your inquiry to our team. Resend processes data
              under its own privacy policy and does not use it for independent
              purposes.
            </li>
            <li>
              <strong>Legal obligations:</strong> We may disclose information if
              required to do so by law or in response to valid legal process.
            </li>
          </ul>
          <p>
            No other third parties — analytics vendors, advertisers, data
            brokers, or AI training pipelines — receive your personal
            information from this Site.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            Inquiry data is retained only as long as necessary to complete the
            relevant business conversation. If no engagement follows an inquiry,
            we delete the contact record within 12 months. You may request
            earlier deletion at any time (see Section 6).
          </p>

          <h2>5. Security</h2>
          <p>
            Form submissions are transmitted over HTTPS. We follow industry
            standard practices to protect data in transit and at rest. However,
            no internet transmission is 100% secure, and we cannot guarantee
            absolute security.
          </p>
          <p>
            Avyu's enterprise accelerators are designed to run inside customer
            infrastructure — we do not store, process, or have access to any
            proprietary customer data that flows through deployed accelerators.
            Each deployment is governed by a separate commercial agreement.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>
              Withdraw consent to future communications at any time
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the
            subject line &quot;Privacy Request&quot;. We will respond within 30 days.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This Site does not use tracking cookies or third-party cookie-based
            analytics. We may set a minimal session cookie required for form
            functionality, which expires when you close your browser.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            The Site is directed at business professionals and enterprise
            organisations. We do not knowingly collect information from anyone
            under the age of 16.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will revise the effective date at the top of this page. Continued
            use of the Site after any update constitutes acceptance of the
            revised policy.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about this Privacy Policy? Reach us at:
          </p>
          <p>
            <strong>Avyu.ai</strong>
            <br />
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6 text-sm">
          <Link href="/terms" className="text-brand hover:text-brand/80 transition-colors font-medium">
            Terms of Service →
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
