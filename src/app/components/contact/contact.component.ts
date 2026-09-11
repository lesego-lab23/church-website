import { Component } from '@angular/core';
import { CHURCH_LOCATION } from '../../data/location';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  readonly location = CHURCH_LOCATION;
}
