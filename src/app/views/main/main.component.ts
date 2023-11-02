import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    // Animate the letters
    gsap.to('.letter', {
      duration: 0.8,
      opacity: 1,
      stagger: 0.08,
      ease: 'power2.out',
    });

    // Animate the hexagons into view
    gsap.fromTo(
      '.hexagon',
      {
        opacity: 0,
        yPercent: 80,
      },
      {
        delay: 0.6,
        duration: 0.8,
        opacity: 0.8,
        yPercent: 0,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );

    // Add hover effect using GSAP
    let hexagons = document.querySelectorAll('.hexagon');
    hexagons.forEach((hex) => {
      hex.addEventListener('mouseenter', () => {
        gsap.to(hex, { scale: 1.1, duration: 0.1, ease: 'power2.out' });
      });

      hex.addEventListener('mouseleave', () => {
        gsap.to(hex, { scale: 1, duration: 0.1, ease: 'power2.out' });
      });
    });
  }
  animateCircle(event: MouseEvent) {
    const hexagon = event.target as HTMLElement;
    const circle = hexagon.querySelector('.circle') as HTMLDivElement;

    if (!circle) {
      console.error('Circle element is not available');
      return;
    }

    const rect = hexagon.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x - size / 2}px`;
    circle.style.top = `${y - size / 2}px`;

    gsap.to(circle, {
      duration: 0.5,
      opacity: 1,
      scale: 2,
      onComplete: () => {
        gsap.to(circle, {
          duration: 0.2,
          opacity: 0,
          scale: 0,
        });
      },
    });
  }
}
