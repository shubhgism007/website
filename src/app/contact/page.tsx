"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, MessageSquare, Calendar, ShieldCheck, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    businessChallenge: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", company: "", role: "", businessChallenge: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Section variant="grid" className="pt-24 pb-12">
        <SectionHeader
          title="Schedule a Discovery Session"
          subtitle="Let's discuss your high-value enterprise workflows, review related accelerators, and map out custom deployment plans."
          label="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Form Side */}
          <FadeIn direction="left">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <CheckCircle className="h-12 w-12 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground">Discovery Session Request Received</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                    Thank you for reaching out. A technical deployment engineer will contact you within 24 business hours to coordinate our session.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground hover:bg-brand/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Role / Title *
                      </label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        placeholder="e.g. CIO / Director of Operations"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessChallenge" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Primary Business Challenge *
                    </label>
                    <input
                      type="text"
                      name="businessChallenge"
                      id="businessChallenge"
                      required
                      value={formData.businessChallenge}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      placeholder="e.g. Scaling customer operations / onboarding automation"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
                      placeholder="Tell us more about your target workflows, system integration boundaries, or hosting regulations..."
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-destructive font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-brand py-3 text-sm font-semibold text-brand-foreground shadow-sm hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-55 transition-colors"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Discovery Session"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Info Side / Calendly Placeholder */}
          <FadeIn direction="right" className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand" />
                Schedule directly via Calendly
              </h3>
              
              {/* Calendly Placeholder Frame */}
              <div className="rounded-lg border border-border bg-secondary/35 p-8 text-center flex flex-col items-center justify-center h-64 relative">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full border border-border">
                    Calendly Placeholder
                  </span>
                </div>
                <Calendar className="h-10 w-10 text-brand mb-4" />
                <h4 className="text-sm font-bold text-foreground">Interactive Scheduling Sandbox</h4>
                <p className="text-xs text-muted-foreground max-w-xs mt-2 leading-relaxed">
                  During production setups, we swap this block with your active Calendly URL scheduler widgets.
                </p>
              </div>
            </div>

            {/* Sidebar Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Direct Inquiries</h4>
                  <p className="mt-1 text-xs text-muted-foreground">contact@avyu.ai</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Enterprise Support</h4>
                  <p className="mt-1 text-xs text-muted-foreground">priority-support@avyu.ai</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Data Privacy & Security</h4>
                  <p className="mt-1 text-xs text-muted-foreground">compliance@avyu.ai</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
