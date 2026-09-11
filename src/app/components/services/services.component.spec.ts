import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ServicesComponent],
      // lucide-icon and appReveal are provided by the app module, not by this unit.
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should only list days that have a gathering', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    expect(fixture.componentInstance.days.length).toBeGreaterThan(0);
    expect(fixture.componentInstance.days.every((day) => day.gatherings.length > 0)).toBeTrue();
  });
});
