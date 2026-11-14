import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../core/reveal.directive';

/** Consistent eyebrow + title + subtitle block used by every section. */
@Component({
  selector: 'app-section-header',
  imports: [RevealDirective],
  template: `
    <header class="sh" [class.sh--left]="align() === 'left'" appReveal>
      <span class="eyebrow">{{ eyebrow() }}</span>
      <h2 [id]="headingId()">
        {{ title() }}
        @if (highlight()) { <span class="gradient-text">{{ highlight() }}</span> }
      </h2>
      @if (subtitle()) { <p>{{ subtitle() }}</p> }
    </header>
  `,
  styles: `
    .sh {
      max-width: 720px;
      margin: 0 auto clamp(44px, 6vw, 64px);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
    }
    .sh--left { margin-inline: 0; text-align: left; align-items: flex-start; }
    h2 { font-size: clamp(30px, 4.4vw, 48px); }
    p { color: var(--text-2); font-size: clamp(16px, 1.6vw, 18px); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly highlight = input<string>('');
  readonly subtitle = input<string>('');
  readonly headingId = input<string | null>(null);
  readonly align = input<'center' | 'left'>('center');
}
