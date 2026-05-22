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
      name: 'Riaan Botha',
      title: 'Senior Pastor'
    },
    {
      image: 'assets/leader-2.jpeg',
      name: 'Aaron Matentshe',
      title: 'Outreach Director'
    },
    {
      image: 'assets/leader-3.jpeg',
      name: 'Pieter Mahlangu',
      title: 'Evangelist'
    }
  ];
}
