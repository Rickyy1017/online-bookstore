import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import twilio from 'twilio';

@Injectable()
export class SubmissionService {
  private transporter: nodemailer.Transporter;
  private twilioClient: twilio.Twilio;

  constructor() {
    // Placeholder email config - Replace with real SMTP credentials
    this.transporter = nodemailer.createTransporter({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });

    // Placeholder Twilio config - Replace with real credentials
    this.twilioClient = twilio('your-account-sid', 'your-auth-token');
  }

  async handleSubmission(email: string, phone: string): Promise<{ success: boolean; message: string }> {
    try {
      // Send email to client
      await this.sendEmail(email, phone);

      // Send WhatsApp message to client
      await this.sendWhatsApp(phone);

      return { success: true, message: 'Submission processed successfully' };
    } catch (error) {
      console.error('Error processing submission:', error);
      return { success: false, message: 'Failed to process submission' };
    }
  }

  private async sendEmail(userEmail: string, userPhone: string): Promise<void> {
    const clientEmail = 'client@example.com'; // Placeholder client email

    await this.transporter.sendMail({
      from: 'your-email@example.com',
      to: clientEmail,
      subject: 'New User Submission',
      text: `New user submitted: Email - ${userEmail}, Phone - ${userPhone}`,
    });
  }

  private async sendWhatsApp(userPhone: string): Promise<void> {
    const clientWhatsApp = '+1234567890'; // Placeholder client WhatsApp number

    await this.twilioClient.messages.create({
      body: `New user submission: Phone - ${userPhone}`,
      from: 'whatsapp:+14155238886', // Twilio sandbox WhatsApp number
      to: `whatsapp:${clientWhatsApp}`,
    });
  }
}
