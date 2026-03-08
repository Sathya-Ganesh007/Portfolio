import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, work, budget, message } = await req.json();

    // 1. Connection with MongoDB
    await connectToDatabase();

    // 2. Database for Record persistence
    const newInquiry = new Inquiry({ name, email, work, budget, message });
    await newInquiry.save();

    // 3. Automation for Email notification using Resend (SKIPPED IF NO KEY)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && resendKey !== "re_your_api_key_here") {
      try {
        const resend = new Resend(resendKey);
        
        // Notify you
        await resend.emails.send({
          from: 'Portfolio Inquiry <onboarding@resend.dev>',
          to: 'ganeshusuals@gmail.com',
          subject: `New Project Inquiry from ${name}`,
          html: `
            <h1>New Lead: ${work}</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });

        // Send confirmation to User
        await resend.emails.send({
          from: 'Ganesh <onboarding@resend.dev>',
          to: email,
          subject: `Confirming your inquiry / Ganesh`,
          html: `
            <h2>Hey ${name},</h2>
            <p>Got your inquiry regarding <strong>${work}</strong>.</p>
            <p>I'll be reaching out to you personally within <strong>24 hours</strong> via mail or text to discuss how we build the future together.</p>
            <br/>
            <p>Best Regards,</p>
            <p>Ganesh / Software Engineer</p>
          `,
        });
      } catch (emailError) {
        console.error("Email automation failed but record was saved:", emailError);
      }
    }

    return NextResponse.json({ message: "Inquiry saved successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
