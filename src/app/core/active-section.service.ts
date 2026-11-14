import { Injectable, NgZone, OnDestroy, inject, signal } from '@angular/core';

/** Tracks which page section is currently in view (for nav highlighting). */
@Injectable({ providedIn: 'root' })
export class ActiveSectionService implements OnDestroy {
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  readonly active = signal<string>('home');

  watch(ids: string[]): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          this.zone.run(() => this.active.set(visible[0].target.id));
        }
      },
      // a thin band across the upper-middle of the viewport
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
      .forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
