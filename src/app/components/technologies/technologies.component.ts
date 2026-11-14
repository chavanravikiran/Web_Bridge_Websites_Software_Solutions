import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TECH_CATEGORIES } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-technologies',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  protected readonly categories = TECH_CATEGORIES;
  /** Flat list for the infinite marquee strip. */
  protected readonly marquee = TECH_CATEGORIES.flatMap((c) => c.items);
}
