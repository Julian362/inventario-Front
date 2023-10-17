import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Resend } from 'resend';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private resend: Resend;
  constructor(private readonly notifier: NotifierService) {
    this.notifier = notifier;
    this.resend = new Resend(environment.KEY_EMAIL);
  }

  async sendEmail(from: string, to: string[], subject: string, html: string) {
    try {
      await this.resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: html,
      });

      this.notifier.notify('success', 'Se ha enviado el email: ' + to);
    } catch (error) {
      this.notifier.notify(
        'error',
        'No se ha podido enviar el email: ' +
          to +
          ', por el siguiente motivo ' +
          error
      );
    }
  }
}
