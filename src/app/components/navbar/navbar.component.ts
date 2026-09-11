import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  readonly navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services' },
    { label: 'Events', path: '/events' },
    { label: 'Giving', path: '/giving' },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 8;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
