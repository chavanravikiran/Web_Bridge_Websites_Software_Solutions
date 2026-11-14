import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { BUDGET_OPTIONS, CONTACT, SERVICE_OPTIONS } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';

type Channel = 'whatsapp' | 'email';
type Status = 'idle' | 'error' | 'choose' | 'success';
type Field = 'name' | 'email' | 'phone' | 'service' | 'budget' | 'description';

interface EmailProvider {
  id: 'gmail' | 'yahoo' | 'outlook' | 'app';
  label: string;
  hint: string;
  mark: string;
  color: string;
}

const EMAIL_PROVIDERS: EmailProvider[] = [
  { id: 'gmail', label: 'Gmail', hint: 'Opens Gmail in your browser', mark: 'G', color: '#ea4335' },
  { id: 'yahoo', label: 'Yahoo Mail', hint: 'Opens Yahoo Mail in your browser', mark: 'Y!', color: '#7e1fff' },
  { id: 'outlook', label: 'Outlook / Hotmail', hint: 'Opens Outlook.com in your browser', mark: 'O', color: '#0078d4' },
  { id: 'app', label: 'Default email app', hint: 'Apple Mail, Outlook desktop, phone mail app…', mark: '@', color: '#00d4ff' },
];

/** Accepts +, spaces, dashes and brackets; requires 10–15 digits. */
export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = (control.value ?? '').toString().trim();
  if (!value) return null; // `required` handles empties
  if (!/^\+?[\d\s\-()]+$/.test(value)) return { phone: true };
  const digits = value.replace(/\D/g, '').length;
  return digits >= 10 && digits <= 15 ? null : { phone: true };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly contact = CONTACT;
  protected readonly serviceOptions = SERVICE_OPTIONS;
  protected readonly budgetOptions = BUDGET_OPTIONS;
  protected readonly status = signal<Status>('idle');
  protected readonly sentVia = signal<Channel>('whatsapp');
  protected readonly copied = signal(false);
  protected readonly providers = EMAIL_PROVIDERS;
  protected readonly maxDescription = 1500;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN), Validators.maxLength(120)]],
    phone: ['', [Validators.required, phoneValidator]],
    service: ['', Validators.required],
    budget: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(this.maxDescription)]],
  });

  protected readonly whatsappDirect = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hi ${CONTACT.brand}, I'd like to discuss a project.`,
  )}`;
  protected readonly mailDirect = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Project inquiry')}`;

  /** Show a field's error only after the user has interacted with it. */
  invalid(name: Field): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  error(name: Field): string {
    const e = this.form.controls[name].errors;
    if (!e) return '';
    if (e['required']) return 'This field is required.';
    if (name === 'email' && e['pattern']) return 'Please enter a valid email address.';
    if (e['phone']) return 'Enter a valid phone number (10–15 digits, + allowed).';
    if (e['minlength']) return `Please enter at least ${e['minlength'].requiredLength} characters.`;
    if (e['maxlength']) return `Please keep this under ${e['maxlength'].requiredLength} characters.`;
    return 'Please check this field.';
  }

  submit(channel: Channel): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('error');
      // move focus to the first invalid control for keyboard / screen-reader users
      queueMicrotask(() =>
        this.host.nativeElement.querySelector<HTMLElement>('.ng-invalid:not(form)')?.focus(),
      );
      return;
    }

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(this.message())}`, '_blank', 'noopener');
      this.sentVia.set('whatsapp');
      this.status.set('success');
    } else {
      // A website can't pick the visitor's email account, so let them choose.
      this.copied.set(false);
      this.status.set('choose');
    }
  }

  /** Open the chosen email provider with the inquiry pre-filled. */
  sendEmail(provider: EmailProvider['id']): void {
    const to = encodeURIComponent(CONTACT.email);
    const su = encodeURIComponent(this.subject());
    const body = encodeURIComponent(this.message());
    const urls: Record<EmailProvider['id'], string> = {
      gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`,
      yahoo: `https://compose.mail.yahoo.com/?to=${to}&subject=${su}&body=${body}`,
      outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${body}`,
      app: `mailto:${CONTACT.email}?subject=${su}&body=${body}`,
    };

    if (provider === 'app') {
      window.location.href = urls.app;
    } else {
      window.open(urls[provider], '_blank', 'noopener');
    }
    this.sentVia.set('email');
    this.status.set('success');
  }

  /** Fallback: copy the full inquiry so it can be pasted into any email. */
  async copyDetails(): Promise<void> {
    const text = `To: ${CONTACT.email}\nSubject: ${this.subject()}\n\n${this.message()}`;
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(true);
    } catch {
      this.copied.set(false);
      window.prompt('Copy your inquiry:', text);
    }
  }

  backToForm(): void {
    this.status.set('idle');
  }

  reset(): void {
    this.form.reset();
    this.status.set('idle');
  }

  private subject(): string {
    const v = this.form.getRawValue();
    return `Project inquiry: ${v.service} — ${v.name}`;
  }

  private message(): string {
    const v = this.form.getRawValue();
    return [
      `New project inquiry — ${CONTACT.brand}`,
      '',
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Service: ${v.service}`,
      `Budget: ${v.budget}`,
      '',
      'Project description:',
      v.description,
    ].join('\n');
  }
}
