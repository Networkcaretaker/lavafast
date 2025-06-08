import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import * as nodemailer from "nodemailer";
import * as cors from "cors";

// Set global options for all functions
setGlobalOptions({
  maxInstances: 10,
  region: "europe-west1", // Closer to Mallorca for better performance
});

// Initialize CORS with options
const corsHandler = cors({
  origin: [
    "https://lavafast-laundry-service.web.app",
    "https://lavafast-laundry-service--dev-y6pj4v14.web.app",
    "https://lavafast.es", // For when you switch domains
    "http://localhost:5173", // For local development
  ],
  methods: ["POST"],
  credentials: true,
});

// Interface for contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validation function
function validateContactForm(data: any): data is ContactFormData {
  return (
    data &&
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.email === "string" &&
    data.email.includes("@") &&
    typeof data.message === "string" &&
    data.message.trim().length > 0
  );
}

// Sanitize input to prevent injection
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove < and >
    .trim()
    .substring(0, 1000); // Limit length
}

// Main contact form function
export const sendContactEmail = onRequest(
  { cors: true },
  async (request, response) => {
    return new Promise<void>((resolve) => {
      corsHandler(request, response, async () => {
        try {
          // Only allow POST requests
          if (request.method !== "POST") {
            response.status(405).json({ 
              success: false, 
              error: "Method not allowed" 
            });
            resolve();
            return;
          }

          // Validate request body
          if (!validateContactForm(request.body)) {
            response.status(400).json({
              success: false,
              error: "Invalid form data. Please check all fields.",
            });
            resolve();
            return;
          }

          const { name, email, message } = request.body;

          // Sanitize inputs
          const sanitizedName = sanitizeInput(name);
          const sanitizedEmail = sanitizeInput(email);
          const sanitizedMessage = sanitizeInput(message);

          // Get environment variables
          const gmailUser = process.env.GMAIL_USER;
          const gmailPassword = process.env.GMAIL_PASSWORD;
          const emailTo = process.env.EMAIL_TO || "networkcaretaker@gmail.com";
          const fromName = process.env.EMAIL_FROM_NAME || "Lavafast Website";

          if (!gmailUser || !gmailPassword) {
            console.error("Gmail credentials not configured");
            response.status(500).json({
              success: false,
              error: "Email service configuration error",
            });
            resolve();
            return;
          }

          // Create nodemailer transporter
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailUser,
              pass: gmailPassword,
            },
          });

          // Email content
          const subject = `New message from Lavafast website from ${sanitizedName}`;
          
          const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0; font-size: 24px;">New Contact Form Message</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">From Lavafast Website</p>
              </div>
              
              <div style="background: #f8fafc; padding: 30px; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e3a8a; margin-top: 0;">Contact Details</h3>
                <p><strong>Name:</strong> ${sanitizedName}</p>
                <p><strong>Email:</strong> ${sanitizedEmail}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-GB", {
                  timeZone: "Europe/Madrid",
                  day: "2-digit",
                  month: "2-digit", 
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</p>
              </div>
              
              <div style="background: white; padding: 30px; border-left: 4px solid #10b981;">
                <h3 style="color: #1e3a8a; margin-top: 0;">Message</h3>
                <div style="background: #f1f5f9; padding: 15px; border-radius: 5px; line-height: 1.6;">
                  ${sanitizedMessage.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="background: #e2e8f0; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
                <p style="margin: 0;">This message was sent from the Lavafast contact form.</p>
                <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${sanitizedName}.</p>
              </div>
            </div>
          `;

          const textContent = `
New Contact Form Message from Lavafast Website

Contact Details:
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Submitted: ${new Date().toLocaleString("en-GB", {
            timeZone: "Europe/Madrid",
          })}

Message:
${sanitizedMessage}

---
This message was sent from the Lavafast contact form.
Reply directly to this email to respond to ${sanitizedName}.
          `;

          // Email options
          const mailOptions = {
            from: `"${fromName}" <${gmailUser}>`,
            to: emailTo,
            replyTo: sanitizedEmail, // Allow direct replies to the customer
            subject: subject,
            text: textContent,
            html: htmlContent,
          };

          // Send email
          await transporter.sendMail(mailOptions);

          console.log(`Contact form email sent successfully from ${sanitizedName} (${sanitizedEmail})`);

          // Send success response
          response.status(200).json({
            success: true,
            message: "Email sent successfully",
          });

        } catch (error) {
          console.error("Error sending contact form email:", error);
          
          response.status(500).json({
            success: false,
            error: "Failed to send email. Please try again.",
          });
        }
        
        resolve();
      });
    });
  }
);
