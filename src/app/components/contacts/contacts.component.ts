import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ConnectComponent } from '../connect/connect.component';
import { SocialMap, SOCIAL_MAP } from '../../app.config';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ConnectComponent],
  templateUrl: './contacts.component.html',

})
export class ContactsComponent {
  readonly socialMap: SocialMap = inject(SOCIAL_MAP);

}
