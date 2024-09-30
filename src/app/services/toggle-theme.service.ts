import { DOCUMENT } from '@angular/common';
import {
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  signal,
} from '@angular/core';
import { WebStorageService } from './web-storage.service';
import { THEME_STORAGE_KEY } from '../app.config';

export interface Themes {
  [key: string]: { key: string; icon: string; class: string };
}

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly webStorageService = inject(WebStorageService);
  private readonly themeStorageKey = inject(THEME_STORAGE_KEY);

  private readonly themes: Themes = {
    dark: { key: 'dark', icon: 'dark_mode', class: 'dark' },
    light: { key: 'light', icon: 'light_mode', class: 'light' },
  };
  $isDarkTheme = signal(false);
  $icon = signal(this.themes['light'].icon);
  readonly renderer!: Renderer2;

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme() {
    if (
      this.webStorageService.getItem(this.themeStorageKey) != undefined ||
      this.webStorageService.getItem(this.themeStorageKey) != null
    ) {
      this.$isDarkTheme.set(
        'true' === this.webStorageService.getItem(this.themeStorageKey)
      );
    } else {
      this.$isDarkTheme.set(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    this.setTheme();
  }

  toggleTheme() {
    this.$isDarkTheme.set(!this.$isDarkTheme());
    this.setTheme();
  }

  setTheme() {
    if (this.$isDarkTheme()) {
      this.setDarkTheme();
    } else {
      this.removeDarkTheme();
    }

    this.webStorageService.saveitem({
      key: this.themeStorageKey,
      value: this.$isDarkTheme().toString(),
    });
  }

  private setDarkTheme() {
    this.$icon.set(this.themes['light'].icon);
    this.renderer.removeClass(this.document.body, this.themes['light'].class);
    this.renderer.addClass(this.document.body, this.themes['dark'].class);
  }

  private removeDarkTheme() {
    this.$icon.set(this.themes['dark'].icon);
    this.renderer.removeClass(this.document.body, this.themes['dark'].class);
    this.renderer.addClass(this.document.body, this.themes['light'].class);
  }
}
