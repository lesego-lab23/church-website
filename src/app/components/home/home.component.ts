import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  leaders = [
    {
      image: 'assets/leader-1.jpeg',
      name: 'Pastor Riaan & Mirjam Botha'
    },
    {
      image: 'assets/leader-2.jpeg',
      name: 'Aaron & Lusanda Matentshe'
    },
    {
      image: 'assets/leader-3.jpeg',
      name: 'Pieter & Safiya Mahlangu'
    }
  ];
}
