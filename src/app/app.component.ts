import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NAV_LINKS } from './data/site.data';
import { ActiveSectionService } from './core/active-section.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FreelanceComponent } from './components/freelance/freelance.component';
import { ProcessComponent } from './components/process/process.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    FreelanceComponent,
    ProcessComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-navbar />
    <main id="main" tabindex="-1">
      <app-hero />
      <app-about />
      <app-services />
      <app-technologies />
      <app-projects />
      <app-freelance />
      <app-process />
      <app-why-choose-us />
      <app-testimonials />
      <app-faq />
      <app-contact />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private readonly sections = inject(ActiveSectionService);

  ngAfterViewInit(): void {
    this.sections.watch(NAV_LINKS.map((l) => l.target));
  }
}
