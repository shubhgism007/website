import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service | Avyu.ai",
  description:
    "Terms governing use of the Avyu.ai website and enterprise accelerator engagements.",
};

const EFFECTIVE_DATE = "June 8, 2026";
const CONTACT_EMAIL = "contact@avyu.ai";

export default function TermsOfServicePage() {
  return (
    <Section variant="grid" className="pt-24 pb-24">
      <div className="max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose-legal">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Avyu.ai
            website at <strong>avyu.ai</strong> (the &quot;Site&quot;), operated by
            Avyu.ai (&quot;Avyu&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using
            the Site, you agree to these Terms. If you do not agree, please do
            not use the Site.
          </p>
          <p>
            Engagements for accelerator customisation, deployment, or ongoing
            support are governed by a separate commercial agreement signed
            between Avyu and the client organisation. These Terms apply only to
            use of this public website.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            You may use the Site to learn about Avyu&apos;s accelerators, explore
            demo environments, and submit inquiries. You agree not to:
          </p>
          <ul>
            <li>
              Use the Site for any unlawful purpose or in violation of any
              applicable law or regulation
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Site or
              its underlying infrastructure
            </li>
            <li>
              Scrape, crawl, or systematically extract content from the Site
              without our prior written consent
            </li>
            <li>
              Transmit any malware, viruses, or other harmful code through the
              Site
            </li>
            <li>
              Impersonate any person, organisation, or entity in connection
              with your use of the Site
            </li>
          </ul>

          <h2>2. Accelerator Demos and Content</h2>
          <p>
            Certain pages on the Site embed live sandbox demonstrations of
            Avyu&apos;s accelerators. These demos are provided for evaluation
            purposes only. Demo environments may use synthetic or anonymised
            data and do not represent production deployments.
          </p>
          <p>
            All content on the Site — including accelerator descriptions,
            capability lists, process documentation, and visual assets — is
            provided for informational purposes. Avyu reserves the right to
            update, modify, or remove content at any time without notice.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on the Site, including but not limited to text,
            graphics, logos, icons, and software code, is the property of
            Avyu.ai or its content suppliers and is protected by applicable
            intellectual property laws.
          </p>
          <p>
            Avyu&apos;s accelerator frameworks, modules, and associated
            intellectual property remain the exclusive property of Avyu.ai.
            Commercial access to accelerator source code is granted only under
            the terms of an executed client engagement agreement. Nothing on
            this Site transfers any ownership or licence to Avyu&apos;s
            proprietary technology.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative
            works of Site content without our prior written permission.
          </p>

          <h2>4. Inquiries and Communications</h2>
          <p>
            When you submit an inquiry through our Contact page, you consent to
            Avyu following up with you by email or phone regarding your request.
            You may opt out of further communication at any time by replying to
            any email with &quot;unsubscribe&quot; or by emailing{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            Submitting a contact form does not create a binding commercial
            agreement. Any engagement for services requires a separately
            executed written agreement.
          </p>

          <h2>5. Third-Party Links and Embedded Content</h2>
          <p>
            The Site may contain links to or embed content from third-party
            websites or services. These are provided for convenience only. Avyu
            does not endorse, control, or assume responsibility for any
            third-party content, and your use of linked sites is subject to
            their own terms and privacy policies.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            The Site and its content are provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied, including
            but not limited to implied warranties of merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>
          <p>
            Avyu does not warrant that the Site will be uninterrupted,
            error-free, or free of harmful components. Any reliance you place on
            information from the Site is at your own risk.
          </p>
          <p>
            Outcome and timeline descriptions on the Site (such as &quot;deployed in
            weeks&quot;) reflect typical engagements and are not guarantees.
            Actual timelines depend on client infrastructure, data readiness,
            and scope agreed in the commercial engagement.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Avyu.ai and its
            affiliates, officers, employees, and agents shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of, or inability to use, the Site.
          </p>
          <p>
            Our total liability for any claim arising from your use of the Site
            shall not exceed the amount paid by you to Avyu in the 12 months
            preceding the claim, or USD 100 if no payment has been made.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold Avyu.ai harmless from any claims,
            damages, losses, and expenses (including reasonable legal fees)
            arising from your violation of these Terms or your misuse of the
            Site.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with
            applicable law. Any disputes arising from these Terms or your use
            of the Site shall be resolved through good-faith negotiation in the
            first instance. If unresolved, disputes shall be subject to binding
            arbitration or the jurisdiction of competent courts as agreed in
            writing between the parties.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The effective date at
            the top of this page will be updated accordingly. Continued use of
            the Site after any revision constitutes your acceptance of the
            updated Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these Terms? Contact us at:
          </p>
          <p>
            <strong>Avyu.ai</strong>
            <br />
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6 text-sm">
          <Link href="/privacy" className="text-brand hover:text-brand/80 transition-colors font-medium">
            Privacy Policy →
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
