import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT } from '../../data/site.data';

/** Text-based brand logo with gradient monogram. */
@Component({
  selector: 'app-logo',
  template: `
    <span class="logo">
      <span class="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#00D4FF" />
              <stop offset="1" stop-color="#9333EA" />
            </linearGradient>
          </defs>
          <path d="M7 13l4.5 15 4.5-10 4.5 10L25 13" fill="none" stroke="url(#logoGrad)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M27 20c3-3 6-3 6 0s-3 3-6 0" fill="none" stroke="url(#logoGrad)" stroke-width="2.6" stroke-linecap="round" />
        </svg>
      </span>
      <span class="logo__text">
        <span class="logo__name">Web<b>Bridge</b></span>
        <span class="logo__tag">{{ tagline }}</span>
      </span>
    </span>
  `,
  styles: `
    .logo { display: inline-flex; align-items: center; gap: 10px; }
    .logo__mark {
      width: 40px; height: 40px;
      display: grid; place-items: center;
      border-radius: 12px;
      background: linear-gradient(145deg, rgba(0,212,255,.12), rgba(147,51,234,.14));
      border: 1px solid rgba(0, 212, 255, 0.25);
      box-shadow: 0 0 18px -4px rgba(0, 212, 255, 0.45);
      svg { width: 30px; height: 30px; }
    }
    .logo__text { display: flex; flex-direction: column; line-height: 1.1; }
    .logo__name {
      font-family: var(--font-display);
      font-size: 20px; font-weight: 600; letter-spacing: -0.02em;
      b {
        font-weight: 700;
        background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
      }
    }
    .logo__tag { font-size: 10.5px; color: var(--text-3); letter-spacing: 0.08em; text-transform: uppercase; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  protected readonly tagline = CONTACT.tagline;
}
