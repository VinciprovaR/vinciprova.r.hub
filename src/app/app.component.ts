import { CommonModule } from '@angular/common';
import { Component, inject, isDevMode, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ConnectComponent } from './components/connect/connect.component';
import { SocialMap, SOCIAL_MAP } from './app.config';
import { ToggleThemeService } from './services/toggle-theme.service';
import { ToggleThemeButtonComponent } from './components/toggle-theme-button/toggle-theme-button.component';
import { ParticlesComponent } from './components/particles/particles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ConnectComponent,
    ToggleThemeButtonComponent,
    ParticlesComponent,
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
