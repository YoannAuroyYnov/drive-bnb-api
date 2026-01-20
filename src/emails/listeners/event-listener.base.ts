// emails/listeners/event-listener.base.ts
import { Logger } from '@nestjs/common';
import { EmailsService } from '../emails.service';

export abstract class EventListener {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(protected readonly emailsService: EmailsService) {}

  /**
   * Méthode principale que chaque listener doit implémenter
   * @param payload données spécifiques de l'événement
   */
  abstract handle(payload: any): Promise<void>;

  protected async sendEmail(
    to: string,
    templateName: string,
    context: Record<string, any>,
    subject?: string,
  ) {
    try {
      await this.emailsService.sendTemplateEmail(to, templateName, context, subject);
      this.logger.log(`Email envoyé à ${to} via template ${templateName}`);
    } catch (error) {
      this.logger.error(`Erreur lors de l'envoi d'email à ${to}`, error);
    }
  }
}
