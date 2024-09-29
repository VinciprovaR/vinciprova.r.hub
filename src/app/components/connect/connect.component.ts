import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../app.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css',
})
export class ConnectComponent implements OnInit {
  @Input({ required: true })
  social!: Social;
  classes: string = '';

  ngOnInit(): void {
    this.classes = `fa-${this.social.icon}`;
  }
}
