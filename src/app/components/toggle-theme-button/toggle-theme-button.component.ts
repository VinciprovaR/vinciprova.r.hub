import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
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

  @ViewChild('mode')
  mode!: ElementRef;
  @ViewChild('theme')
  theme!: ElementRef;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    });
  }

  ngAfterViewInit(): void {
    this.mode.nativeElement.checked = !this.$isDarkTheme();

    fromEvent(this.mode.nativeElement, 'change')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.toggleThemeService.toggleTheme();
      });
  }
}
