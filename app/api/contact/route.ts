import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").refine((email) => {
    const domain = email.split("@")[1];
    if (!domain) return false;
    const typos = ["gamil.com", "gmial.com", "gmai.com", "gmal.com", "gmaill.com", "yaho.com", "hotmal.com"];
    return !typos.includes(domain.toLowerCase());
  }, "Please double-check your email spelling (e.g., @gmail.com)"),
  work: z.string(),
  budget: z.string(),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, work, budget, message } = parsed.data;

    // Send Discord webhook notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "Portfolio Bot",
            embeds: [
              {
                title: "🔔 New Portfolio Contact!",
                color: 5763719,
                fields: [
                  { name: "👤 Name", value: name, inline: true },
                  { name: "📧 Email", value: email, inline: true },
                  { name: "🛠 Project Type", value: work, inline: false },
                  { name: "💰 Budget", value: budget, inline: true },
                  { name: "💬 Message", value: message, inline: false },
                ],
              },
            ],
          }),
        });
      } catch (discordError) {
        console.error("Discord webhook failed, but inquiry was saved:", discordError);
      }
    } else {
      console.log("DISCORD_WEBHOOK_URL not set — skipping Discord notification.");
    }

    // Send email notification
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        const notifyPromise = transporter.sendMail({
          from: `"Portfolio Alerts" <${process.env.GMAIL_USER}>`,
          to: "ganeshveleappa@gmail.com",
          subject: `🔔 New Portfolio Contact - ${name}`,
          html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Arial',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#111;border:1px solid #222;border-radius:12px;overflow:hidden;">
    <div style="background:#c8ff00;padding:24px 32px;">
      <h1 style="margin:0;color:#000;font-size:22px;font-weight:900;letter-spacing:2px;">🔔 NEW PORTFOLIO CONTACT</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Name</td><td style="padding:12px 0;border-bottom:1px solid #222;color:#fff;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Email</td><td style="padding:12px 0;border-bottom:1px solid #222;color:#c8ff00;">${email}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Project</td><td style="padding:12px 0;border-bottom:1px solid #222;color:#fff;">${work}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Budget</td><td style="padding:12px 0;border-bottom:1px solid #222;color:#c8ff00;font-weight:bold;">${budget}</td></tr>
        <tr><td style="padding:12px 0;color:#888;font-size:11px;letter-spacing:1px;text-transform:uppercase;vertical-align:top;">Message</td><td style="padding:12px 0;color:#fff;line-height:1.6;">${message}</td></tr>
      </table>
    </div>
    <div style="background:#0a0a0a;padding:16px 32px;text-align:center;">
      <p style="margin:0;color:#444;font-size:11px;letter-spacing:1px;">GANESH V — PORTFOLIO ALERT SYSTEM</p>
    </div>
  </div>
</body>
</html>`,
        });

        const confirmPromise = transporter.sendMail({
          from: `"Ganesh Sathya" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `AETHER System: Connection Confirmed / ${work}`,
          html: `
            <div style="font-family: sans-serif; background: #000; color: #fff; padding: 50px; border-top: 4px solid #ccff00; max-width: 600px;">
              <h2 style="font-size: 28px; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 24px; text-transform: uppercase;">CONNECTION ESTABLISHED.</h2>
              <p style="color: #888; line-height: 1.8; font-size: 16px; margin-bottom: 30px;">
                Hello ${name}, I've successfully received your brief regarding <strong>${work}</strong>.
                Our connection is now active.
              </p>
              <div style="background: rgba(204, 255, 0, 0.05); border: 1px solid rgba(204, 255, 0, 0.2); padding: 30px; border-radius: 4px; margin-bottom: 40px;">
                <p style="color: #ccff00; font-weight: bold; font-size: 18px; margin: 0; line-height: 1.4;">
                  "Your objective is being analyzed. Expect my direct communication within the next 24 hours to discuss the architecture for your ${work} project."
                </p>
              </div>
              <p style="color: #666; font-size: 14px; margin-bottom: 50px;">
                Talk soon,<br/>
                <strong style="color: #fff; font-size: 18px;">Ganesh / AI & Systems Engineer</strong>
              </p>
              <div style="height: 1px; background: #222; margin-bottom: 20px;"></div>
              <p style="color: #333; font-size: 9px; text-transform: uppercase; letter-spacing: 2px;">SECURE TRANSMISSION // ENGINEER_AUTO_REPLY</p>
            </div>
          `,
        });

        const results = await Promise.allSettled([notifyPromise, confirmPromise]);
        results.forEach((result, i) => {
          if (result.status === "rejected") {
            console.error(`Email send failed [${i === 0 ? "notify" : "confirm"}]:`, result.reason);
          }
        });
      } catch (emailError) {
        console.error("Nodemailer failed, but inquiry was saved:", emailError);
      }
    } else {
      console.log("GMAIL_USER / GMAIL_APP_PASSWORD not set — skipping email.");
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
