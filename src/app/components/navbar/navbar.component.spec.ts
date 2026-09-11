import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [NavbarComponent],
      // lucide-icon and appReveal are provided by the app module, not by this unit.
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should close the menu when a link is followed', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.componentInstance.toggleMenu();
    expect(fixture.componentInstance.isMenuOpen).toBeTrue();

    fixture.componentInstance.closeMenu();
    expect(fixture.componentInstance.isMenuOpen).toBeFalse();
  });
});
