import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TESTIMONIALS } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-testimonials',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  protected readonly items = TESTIMONIALS;
  protected readonly index = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  private paused = false;
  private touchX = 0;

  ngOnInit(): void {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      this.timer = setInterval(() => !this.paused && this.next(), 6500);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  next(): void {
    this.index.update((i) => (i + 1) % this.items.length);
  }

  prev(): void {
    this.index.update((i) => (i - 1 + this.items.length) % this.items.length);
  }

  go(i: number): void {
    this.index.set(i);
  }

  pause(state: boolean): void {
    this.paused = state;
  }

  onTouchStart(e: TouchEvent): void {
    this.touchX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchX;
    if (Math.abs(dx) > 50) dx < 0 ? this.next() : this.prev();
  }
}
