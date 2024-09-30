import { CommonModule } from '@angular/common';
import { Component, inject, isDevMode } from '@angular/core';
import { SOCIAL_MAP, SocialMap } from './app.config';
import { ConnectComponent } from './components/connect/connect.component';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { ToggleThemeService } from './services/toggle-theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ConnectComponent,
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
  readonly socialMap: SocialMap = inject(SOCIAL_MAP);
  isDevMode: boolean = isDevMode();
}
