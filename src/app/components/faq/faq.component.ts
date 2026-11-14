import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FAQS } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-faq',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  protected readonly faqs = FAQS;
  /** index of the open item, or -1 when all are closed */
  protected readonly openIndex = signal(0);

  toggle(i: number): void {
    this.openIndex.update((cur) => (cur === i ? -1 : i));
  }
}
