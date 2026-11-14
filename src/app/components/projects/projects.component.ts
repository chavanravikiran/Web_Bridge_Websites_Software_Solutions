import { ChangeDetectionStrategy, Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { INDUSTRIES, PROJECTS } from '../../data/site.data';
import { Project, ProjectType } from '../../models/site.models';

type Filter = 'all' | ProjectType;
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectVisualComponent } from './project-visual.component';

@Component({
  selector: 'app-projects',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent, ProjectVisualComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly industries = INDUSTRIES;
  protected readonly filter = signal<Filter>('all');
  protected readonly filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'website', label: 'Business Websites', count: PROJECTS.filter((p) => p.type === 'website').length },
    { id: 'app', label: 'Web Applications', count: PROJECTS.filter((p) => p.type === 'app').length },
  ];
  protected readonly projects = computed(() =>
    this.filter() === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === this.filter()),
  );
  protected readonly selected = signal<Project | null>(null);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private lastTrigger: HTMLElement | null = null;

  open(project: Project, trigger: HTMLElement): void {
    this.lastTrigger = trigger;
    this.selected.set(project);
    this.dialog().nativeElement.showModal();
    document.body.classList.add('no-scroll');
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /** Fired by the native dialog on close (button, Esc key or backdrop). */
  onClosed(): void {
    document.body.classList.remove('no-scroll');
    this.lastTrigger?.focus();
  }

  /** Close when clicking the backdrop area outside the panel. */
  onBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
