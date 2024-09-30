import { Component } from '@angular/core';
import { ToggleThemeButtonComponent } from '../toggle-theme-button/toggle-theme-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleThemeButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
