import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Animate the letters
    gsap.to('.letter', {
      duration: 1,
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Animate the hexagons into view
    gsap.fromTo(
      '.hexagon',
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        delay: 1.2,
        duration: 1,
        opacity: 1,
        yPercent: 0,
        stagger: 0.2,
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
}
