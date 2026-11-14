import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT, NAV_LINKS, SERVICES } from '../../data/site.data';
import { IconComponent } from '../../shared/icon/icon.component';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-footer',
  imports: [IconComponent, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly contact = CONTACT;
  protected readonly links = NAV_LINKS;
  protected readonly services = SERVICES.slice(0, 6);
  protected readonly tech = ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Spring AI', 'Oracle', 'Jasper Reports'];
  protected readonly year = new Date().getFullYear();
  protected readonly whatsapp = `https://wa.me/${CONTACT.whatsapp}`;
}
