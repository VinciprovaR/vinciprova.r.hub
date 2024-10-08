import { Component, effect, inject, NgZone, OnInit } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadTrianglesPreset } from '@tsparticles/preset-triangles';
import { ToggleThemeService } from '../../services/toggle-theme.service';
import { PageEventService } from '../../services/page-event.service';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css',
})
export class ParticlesComponent implements OnInit {
  private readonly toggleThemeService = inject(ToggleThemeService);
  private readonly pageEventService = inject(PageEventService);
  private readonly ngZone = inject(NgZone);

  particlesColorForDarkTheme = '#962828';
  particlesColorForLightTheme = '#0a2540';

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      effect(() => {
        this.toggleThemeService.$isDarkTheme();
        this.pageEventService.$windowInnerWidth();
        this.load();
      });
    });
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.load();
    });
  }

  async load() {
    const particlesNumber =
      this.pageEventService.$windowInnerWidth() / 25 < 100
        ? this.pageEventService.$windowInnerWidth() / 25
        : 100;

    const themeParticle = this.toggleThemeService.$isDarkTheme()
      ? this.particlesColorForDarkTheme
      : this.particlesColorForLightTheme;

    await loadTrianglesPreset(tsParticles);

    await tsParticles.load({
      id: 'particles',
      options: {
        preset: 'triangles',
        fpsLimit: 60,
        background: {
          color: {
            value: 'none',
          },
        },
        fullScreen: {
          enable: false,
        },
        particles: {
          color: {
            value: themeParticle,
          },
          links: {
            color: themeParticle,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 2 },
          },
          number: {
            value: particlesNumber,
          },
          opacity: {
            value: { min: 0.2, max: 0.8 },
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      },
    });
  }
}
