import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ToggleThemeService } from '../../services/toggle-theme.service';

@Component({
  selector: 'app-toggle-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-theme-button.component.html',
  styleUrl: './toggle-theme-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleThemeButtonComponent implements AfterViewInit {
  private readonly toggleThemeService = inject(ToggleThemeService);
  $isDarkTheme = this.toggleThemeService.$isDarkTheme;

  destroyed$ = new Subject();

  @ViewChild('sun')
  sun!: ElementRef;
  @ViewChild('moon')
  moon!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.setTheme();
  }

  toggleTheme() {
    this.toggleThemeService.toggleTheme();
    this.setTheme();
  }

  setTheme() {
    if (this.$isDarkTheme()) {
      console.log('sono dark');
      this.moon.nativeElement.classList = 'opacity-0 transition';
      this.sun.nativeElement.classList = 'opacity-1 transition';
    } else {
      console.log('sono light');
      this.moon.nativeElement.classList = 'translate-y opacity-1 transition';
      this.sun.nativeElement.classList = 'translate-y opacity-0 transition';
    }
  }
}
