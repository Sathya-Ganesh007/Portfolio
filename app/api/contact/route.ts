import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").refine(email => {
    const domain = email.split('@')[1];
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
    
    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message }, 
        { status: 400 }
      );
    }

    const { name, email, work, budget, message } = parsed.data;

    // 1. Connection with MongoDB
    await connectToDatabase();

    // 2. Database for Record persistence
    const newInquiry = new Inquiry({ name, email, work, budget, message });
    await newInquiry.save();

    // 3. Automation for Email notification using Nodemailer (Gmail SMTP)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Notify you (Ganesh)
        const notifyPromise = transporter.sendMail({
          from: `"Portfolio Alerts" <${process.env.EMAIL_USER}>`,
          to: 'ganeshusuals@gmail.com', // Sending to yourself
          subject: `🚀 新しいリード: ${name} | ${work}`, // Adding a cool aesthetic subject
          html: `
            <div style="font-family: 'JetBrains Mono', monospace; background: #000; color: #fff; padding: 40px; border: 1px solid #ccff00;">
              <h1 style="color: #ccff00; font-size: 24px; text-transform: uppercase; letter-spacing: 4px; font-weight: 900;">Incoming Transmission</h1>
              <div style="height: 2px; background: #ccff00; width: 60px; margin-bottom: 30px;"></div>
              
              <p style="font-size: 14px; margin-bottom: 8px;"><strong style="color: #ccff00;">SOURCE:</strong> ${name}</p>
              <p style="font-size: 14px; margin-bottom: 8px;"><strong style="color: #ccff00;">OBJECTIVE:</strong> ${work}</p>
              <p style="font-size: 14px; margin-bottom: 8px;"><strong style="color: #ccff00;">CAPEX:</strong> ${budget || 'UNDETERMINED'}</p>
              <p style="font-size: 14px; margin-bottom: 8px;"><strong style="color: #ccff00;">CHANNEL:</strong> ${email}</p>
              
              <div style="margin-top: 30px; background: #111; padding: 25px; border: 1px solid #333; line-height: 1.8; color: #aaa;">
                <p style="margin: 0;">${message}</p>
              </div>
              
              <p style="margin-top: 40px; color: #444; font-size: 10px; font-family: sans-serif;">SYSTEM_PRIORITY_HIGH // SESSION_ID: ${Date.now().toString(16)}</p>
            </div>
          `,
        });

        // Send confirmation to Client (Cool Sentence)
        const confirmPromise = transporter.sendMail({
          from: `"Ganesh Sathya" <${process.env.EMAIL_USER}>`,
          to: email, // Sending to the client who filled the form
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

        // Execute both email operations concurrently to reduce API response time
        await Promise.allSettled([notifyPromise, confirmPromise]);
      } catch (emailError) {
        console.error("Nodemailer automation failed but record was saved:", emailError);
      }
    } else {
       console.log("Nodemailer credentials not found in env. Skipping email notification.");
    }

    return NextResponse.json({ message: "Inquiry saved successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
  }
}
