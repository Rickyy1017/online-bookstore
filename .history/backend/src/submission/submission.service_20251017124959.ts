import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SubmissionService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    // Email config using env vars
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async handleSubmission(email: string, phone: string): Promise<{ success: boolean; message: string }> {
    try {
      await this.sendEmail(email, phone);

      return { success: true, message: 'Submission processed successfully' };
    } catch (error) {
      console.error('Error processing submission:', error);
      return { success: false, message: 'Failed to process submission' };
    }
  }

  private async sendEmail(userEmail: string, userPhone: string): Promise<void> {
    const clientEmail = 'neptunhomes@gmail.com';

    await this.transporter.sendMail({
      from: this.configService.get<string>('EMAIL_USER'),
      to: clientEmail,
      subject: 'New User Submission',
      text: `New user submitted: Email - ${userEmail}, Phone - ${userPhone}`,
    });
  }
}
