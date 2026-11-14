import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT, ABOUT_HIGHLIGHTS } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [IconComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly about = ABOUT;
  protected readonly highlights = ABOUT_HIGHLIGHTS;
}
