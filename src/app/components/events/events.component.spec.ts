import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [EventsComponent],
      // lucide-icon and appReveal are provided by the app module, not by this unit.
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should group events under one entry per month', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    const months = fixture.componentInstance.eventGroups.map((group) => group.month);
    expect(new Set(months).size).toBe(months.length);
  });
});
