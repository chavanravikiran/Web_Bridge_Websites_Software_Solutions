import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WHY_US } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-why-choose-us',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUsComponent {
  protected readonly items = WHY_US;
}
