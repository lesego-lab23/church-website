import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GivingComponent } from './giving.component';

describe('GivingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      declarations: [GivingComponent],
      // lucide-icon and appReveal are provided by the app module, not by this unit.
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GivingComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should expose the bank details shown on the page', () => {
    const fixture = TestBed.createComponent(GivingComponent);
    const labels = fixture.componentInstance.bankDetails.map((detail) => detail.label);
    expect(labels).toContain('Account number');
  });
});
