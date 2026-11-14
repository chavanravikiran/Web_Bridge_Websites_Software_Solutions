import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT, ENGAGEMENT_MODELS, FREELANCE } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-freelance',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './freelance.component.html',
  styleUrl: './freelance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreelanceComponent {
  protected readonly content = FREELANCE;
  protected readonly models = ENGAGEMENT_MODELS;
  protected readonly whatsapp = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hi ${CONTACT.brand}, I'd like to hire you for a freelance project.`,
  )}`;
}
