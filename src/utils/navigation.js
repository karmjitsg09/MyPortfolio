/**
 * Robust smooth scrolling to a target element id, accounting for the fixed navbar height
 * and updating browser URL hash without causing page jump.
 */
export function scrollToSection(id, options = {}) {
    if (typeof window === 'undefined') return;

    const cleanId = (id || '').replace(/^#/, '');
    if (!cleanId) return;

    const element = document.getElementById(cleanId);
    if (!element) return;

    const navOffset = options.offset !== undefined ? options.offset : 75;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const targetTop = Math.max(0, elementTop - navOffset);

    window.scrollTo({
        top: targetTop,
        behavior: options.behavior || 'smooth',
    });

    if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${cleanId}`);
    }
}
