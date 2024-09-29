import { Component, effect, inject, OnInit } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';
import { ToggleThemeService } from '../../services/toggle-theme.service';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css',
})
export class ParticlesComponent implements OnInit {
  private readonly toggleThemeService = inject(ToggleThemeService);
  darkParticles = '#E0FFFF';
  lightParticles = '#191970';

  constructor() {
    effect(() => {
      this.toggleThemeService.$isDarkTheme();
      this.load();
    });
  }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    const themeParticle = this.toggleThemeService.$isDarkTheme()
      ? '#E0FFFF'
      : '#191970';

    await loadAll(tsParticles);

    await tsParticles.addPreset('lightdark', {
      fullScreen: {
        enable: false,
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        number: {
          value: 30,
        },
        opacity: {
          value: { min: 0.2, max: 0.8 },
        },
        shape: {
          type: ['circle', 'square', 'triangle', 'polygon'],
          options: {
            polygon: [
              {
                sides: 5,
              },
              {
                sides: 6,
              },
              {
                sides: 8,
              },
            ],
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    });

    await tsParticles.load({
      id: 'particles',
      options: {
        preset: 'lightdark',
        particles: {
          color: {
            value: themeParticle,
          },
          links: {
            color: themeParticle,
          },
        },
      },
    });
  }
}
