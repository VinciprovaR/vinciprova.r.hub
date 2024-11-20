import { CommonModule } from '@angular/common';
import { Component, inject, isDevMode } from '@angular/core';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { ToggleThemeService } from './services/toggle-theme.service';
import { ContactsComponent } from './components/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ContactsComponent,
    ParticlesComponent,
    DownloadResumeComponent,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vinciprova.r.hub';
  private readonly toggleThemeService = inject(ToggleThemeService);
  isDevMode: boolean = isDevMode();
}
