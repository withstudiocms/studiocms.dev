/**
 * Creates a smooth text reveal animation similar to Notion's style
 * @param element - The element to animate
 * @param duration - Animation duration in milliseconds
 */
export class TextRevealAnimation {
  private element: HTMLElement;
  private text: string;
  private currentIndex = 0;
  private isAnimating = false;

  constructor(element: HTMLElement, duration = 1000) {
    this.element = element;
    this.text = element.textContent || '';
    this.element.textContent = '';
    this.element.style.opacity = '1';
    this.animate(duration);
  }

  private animate(duration: number): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const intervalTime = duration / this.text.length;
    const chars = this.text.split('');

    const interval = setInterval(() => {
      if (this.currentIndex >= chars.length) {
        clearInterval(interval);
        this.isAnimating = false;
        return;
      }

      this.element.textContent += chars[this.currentIndex];
      this.currentIndex++;
    }, intervalTime);
  }
}

/**
 * Creates a number counter animation
 * @param element - The element containing the number
 * @param endValue - The final number to count to
 * @param duration - Animation duration in milliseconds
 */
export class NumberCountAnimation {
  private element: HTMLElement;
  private startValue = 0;
  private endValue: number;
  private current = 0;
  private isAnimating = false;

  constructor(element: HTMLElement, endValue: number, duration = 1000) {
    this.element = element;
    this.endValue = endValue;
    this.animate(duration);
  }

  private animate(duration: number): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const start = performance.now();
    const updateFrame = (currentTime: number): void => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      this.current = Math.round(this.startValue + (this.endValue - this.startValue) * progress);
      this.element.textContent = this.current.toString();

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      } else {
        this.isAnimating = false;
      }
    };

    requestAnimationFrame(updateFrame);
  }
}

/**
 * Initialize text reveal animation for multiple elements
 * @param selector - CSS selector for elements to animate
 * @param staggerDelay - Delay between each element's animation
 */
export function initTextRevealAnimations(selector: string, staggerDelay = 200): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  for (const [index, element] of Array.from(elements).entries()) {
    setTimeout(() => {
      new TextRevealAnimation(element);
    }, index * staggerDelay);
  }
}

/**
 * Initialize number counter animations for multiple elements
 * @param selector - CSS selector for elements to animate
 * @param staggerDelay - Delay between each element's animation
 */
export function initNumberCountAnimations(selector: string, staggerDelay = 200): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  for (const [index, element] of Array.from(elements).entries()) {
    const targetNumber = Number(element.textContent || '0');
    setTimeout(() => {
      new NumberCountAnimation(element, targetNumber);
    }, index * staggerDelay);
  }
} 