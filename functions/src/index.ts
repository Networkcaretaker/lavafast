// # functions/src/index.ts
import { onRequest } from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";
import * as cors from "cors";

const corsHandler = cors({
  origin: [
    "https://lavafast-laundry-service.web.app",
    "https://lavafast-laundry-service--dev-y6pj4v14.web.app",
    "http://localhost:5173",
  ],
  methods: ["POST"],
  credentials: true,
});

export const sendContactEmail = onRequest(
  { 
    region: "europe-west1",
    maxInstances: 10,
    timeoutSeconds: 60
  },
  (request, response) => {
    corsHandler(request, response, async () => {
      try {
        console.log('Function called with method:', request.method);
        console.log('Request body:', request.body);

        if (request.method !== "POST") {
          response.status(405).json({ 
            success: false, 
            error: "Method not allowed" 
          });
          return;
        }

        const { name, email, message } = request.body;
        if (!name || !email || !message) {
          response.status(400).json({
            success: false,
            error: "Missing required fields",
          });
          return;
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailPassword = process.env.GMAIL_PASSWORD;
        
        console.log('Gmail user configured:', !!gmailUser);
        console.log('Gmail password configured:', !!gmailPassword);
        
        if (!gmailUser || !gmailPassword) {
          console.error("Gmail credentials not configured");
          response.status(500).json({
            success: false,
            error: "Email service configuration error",
          });
          return;
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPassword,
          },
        });

        await transporter.sendMail({
          from: `"Lavafast Website" <${gmailUser}>`,
          to: "info@lavafast.es",
          replyTo: email,
          subject: `New message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        console.log('Email sent successfully');
        response.status(200).json({
          success: true,
          message: "Email sent successfully",
        });

      } catch (error) {
        console.error("Error:", error);
        response.status(500).json({
          success: false,
          error: "Failed to send email",
        });
      }
    });
  }
);