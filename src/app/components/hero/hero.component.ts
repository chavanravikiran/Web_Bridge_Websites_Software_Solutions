import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HERO, HERO_CODE } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-hero',
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly hero = HERO;
  protected readonly code = HERO_CODE;

  /** Floating technology chips around the terminal visual. */
  protected readonly chips = [
    { label: 'Angular', mark: 'A', color: '#dd0031', pos: 'tl' },
    { label: 'Spring Boot', mark: 'SB', color: '#6db33f', pos: 'tr' },
    { label: 'TypeScript', mark: 'TS', color: '#3178c6', pos: 'ml' },
    { label: 'PostgreSQL', mark: 'Pg', color: '#4f8fd6', pos: 'mr' },
    { label: 'Docker', mark: 'D', color: '#2496ed', pos: 'bl' },
    { label: 'AWS', mark: 'aws', color: '#ff9900', pos: 'br' },
  ];
}
