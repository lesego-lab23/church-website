import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy, Renderer2 } from '@angular/core';

/**
 * Fades an element up once it scrolls into view. Falls back to showing the
 * element immediately where IntersectionObserver is unavailable, and stays
 * out of the way entirely when the visitor has asked for reduced motion.
 */
@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Stagger, in milliseconds, applied when the element comes into view. */
  @Input('appReveal') delay: number | string = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    const element = this.host.nativeElement;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.renderer.setStyle(element, 'transition-delay', `${Number(this.delay) || 0}ms`);

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

            this.renderer.addClass(element, 'is-visible');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
