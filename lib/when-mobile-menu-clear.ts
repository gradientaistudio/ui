function isMenuCovering() {
  const state = document.documentElement.dataset.mobileMenu;
  return state === "open";
}

/**
 * Runs page reveal animations once the mobile menu cover lifts.
 * `reveal` (and no attribute) both count as clear so the menu fade and
 * content fade can start together — avoids a double-pop on iOS Safari.
 */
export function runWhenMobileMenuClear(run: () => () => void): () => void {
  let teardown: (() => void) | undefined;
  let observer: MutationObserver | null = null;
  let started = false;

  const start = () => {
    if (started) return;
    started = true;
    observer?.disconnect();
    observer = null;
    teardown = run();
  };

  if (isMenuCovering()) {
    observer = new MutationObserver(() => {
      if (!isMenuCovering()) start();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-mobile-menu"],
    });
  } else {
    start();
  }

  return () => {
    observer?.disconnect();
    teardown?.();
  };
}
