export function trapFocus(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const focusableEls = element.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
  );
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  function handleTrapFocus(e) {
    const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  element.addEventListener('keydown', handleTrapFocus);

  return () => {
    element?.removeEventListener('keydown', handleTrapFocus);
  };
}
export default trapFocus;
