import { Injectable, Logger } from '@nestjs/common';
import { SmtpEmailProvider } from './providers/smtp-email.provider';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as Handlebars from 'handlebars';

@Injectable()
export class EmailsService {
  private readonly logger = new Logger(EmailsService.name);
  private readonly templatesPath: string;

  constructor(private readonly emailProvider: SmtpEmailProvider) {
    this.templatesPath = path.join(__dirname, 'templates');
  }

  async sendTemplateEmail(
    to: string,
    templateName: string,
    context: Record<string, any>,
    subject?: string,
  ) {
    try {
      const templatePath = path.join(this.templatesPath, `${templateName}.hbs`);
      if (!fs.existsSync(templatePath)) {
        // create EmailError class for better error handling
        throw new Error(`Template ${templateName} not found at path ${templatePath}`);
      }

      const templateContent = fs.readFileSync(templatePath, 'utf-8');
      const compiled = Handlebars.compile(templateContent);
      const html = compiled(context);

      await this.emailProvider.sendMail({
        to,
        subject: subject || 'Notification',
        text: html,
      });

      this.logger.log(`Email sent to ${to} using template ${templateName}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}`, error);
      throw error;
    }
  }
}
