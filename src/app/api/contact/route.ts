import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, company, role, email, businessChallenge, message } =
      await req.json();

    if (!name || !company || !role || !email || !businessChallenge) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Avyu.ai Contact <onboarding@resend.dev>",
      to: "sgarg317@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="margin: 0 0 24px; color: #18181b;">New Discovery Session Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #18181b; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; vertical-align: top;">Company</td>
              <td style="padding: 8px 0; color: #18181b; font-weight: 600;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; vertical-align: top;">Role</td>
              <td style="padding: 8px 0; color: #18181b;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; vertical-align: top;">Challenge</td>
              <td style="padding: 8px 0; color: #18181b;">${businessChallenge}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 8px 0; color: #71717a; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #18181b;">${message.replace(/\n/g, "<br>")}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin: 24px 0 0; font-size: 12px; color: #a1a1aa;">
            Hit Reply to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
