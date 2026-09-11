import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { GATHERINGS } from './data/gatherings';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, CommonModule],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should list each gathering day once, with every service on it', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const distinctDays = new Set(GATHERINGS.map((gathering) => gathering.weekday));

    expect(fixture.componentInstance.weeklyRhythm.length).toBe(distinctDays.size);
    expect(fixture.componentInstance.weeklyRhythm[0].times)
      .toContain('Morning Worship');
    expect(fixture.componentInstance.weeklyRhythm[0].times)
      .toContain('Evening Worship');
  });

  it('should show the current year in the baseline', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-baseline p')?.textContent)
      .toContain(String(new Date().getFullYear()));
  });
});
