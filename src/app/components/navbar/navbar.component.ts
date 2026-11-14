import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CONTACT, NAV_LINKS } from '../../data/site.data';
import { ActiveSectionService } from '../../core/active-section.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-navbar',
  imports: [IconComponent, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly doc = inject(DOCUMENT);
  protected readonly sections = inject(ActiveSectionService);
  protected readonly links = NAV_LINKS;
  protected readonly brand = CONTACT;
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    const s = window.scrollY > 24;
    if (s !== this.scrolled()) this.scrolled.set(s);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.toggle(false);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.open() && window.innerWidth > 960) this.toggle(false);
  }

  toggle(state = !this.open()): void {
    this.open.set(state);
    this.doc.body.classList.toggle('no-scroll', state);
  }
}
