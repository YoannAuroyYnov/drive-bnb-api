import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class SmtpEmailProvider {
  private readonly logger = new Logger(SmtpEmailProvider.name);
  private transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'iCloud',
      auth: {
        user: configService.get<string>('NODEMAILER_USER')!,
        pass: configService.get<string>('NODEMAILER_PASS')!,
      },
    });
  }

  async sendMail(options: {
    to: string;
    subject: string;
    html: string;
    from?: string;
  }): Promise<SMTPTransport.SentMessageInfo> {
    const fromEmail = options.from || this.configService.get<string>('NODEMAILER_USER');
    options.from = `DriveBnB <${fromEmail}>`;

    try {
      const info = (await this.transporter.sendMail(options)) as SMTPTransport.SentMessageInfo;
      this.logger.log(`Email envoyé à ${options.to}`);
      return info;
    } catch (error) {
      this.logger.error(`Erreur lors de l'envoi de l'email à ${options.to}`, error);
      // create EmailError class for better error handling
      throw error;
    }
  }
}
