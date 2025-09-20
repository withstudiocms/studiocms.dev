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
	private hasSuffix = false;

	constructor(element: HTMLElement, duration = 1000) {
		this.element = element;
		// Remove any non-numeric characters except digits for parsing
		const rawNumber = element.textContent?.replace(/[^0-9]/g, '') || '0';
		this.endValue = Number.parseInt(rawNumber, 10);
		this.hasSuffix = element.textContent?.includes('+') || false;
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
			this.element.textContent = this.current.toString() + (this.hasSuffix ? '+' : '');

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
 * Initialize number counter animations for multiple elements
 * @param selector - CSS selector for elements to animate
 * @param staggerDelay - Delay between each element's animation
 */
export function initNumberCountAnimations(selector: string, staggerDelay = 200): void {
	const elements = document.querySelectorAll<HTMLElement>(selector);
	for (const [index, element] of Array.from(elements).entries()) {
		setTimeout(() => {
			new NumberCountAnimation(element);
		}, index * staggerDelay);
	}
}
