import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectVisual } from '../../models/site.models';

/**
 * Lightweight, resolution-independent "screenshot" illustration for demo
 * projects — pure HTML/CSS/SVG, so no image downloads are needed.
 */
@Component({
  selector: 'app-project-visual',
  templateUrl: './project-visual.component.html',
  styleUrl: './project-visual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[style.--a1]': 'accent()[0]',
    '[style.--a2]': 'accent()[1]',
  },
})
export class ProjectVisualComponent {
  readonly variant = input.required<ProjectVisual>();
  readonly accent = input<[string, string]>(['#3b82f6', '#00d4ff']);

  protected readonly bars = [42, 68, 54, 82, 61, 90, 74];
  protected readonly rows = [0, 1, 2, 3];
  protected readonly six = [0, 1, 2, 3, 4, 5];
  /** 0 = free day, 1 = selected, 2 = unavailable */
  protected readonly days = [0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0];
}
