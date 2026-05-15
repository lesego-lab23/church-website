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
      name: 'Pastor Riaan & Mirjam Botha',
      title: 'Lead Pastor',
      description:
        'Pastor Riaan & Mirjam Botha provide spiritual direction for the church, lead the teaching ministry, and care for the overall growth of the congregation.'
    },
    {
      image: 'assets/leader-2.jpeg',
      name: 'Aaron & Lusanda Matentshe',
      title: 'Outreach Directors',
      description:
      'Aaron & Lusanda Matentshe lead outreach efforts, connect the church with the local community, and oversee the church operations.'
        
    },
    {
      image: 'assets/leader-3.jpeg',
      name: 'Pieter & Safiya Mahlangu',
      title: 'Evangelist Pieter ',
      description:
      'Evangelist Pieter supports '
    }
  ];
}
