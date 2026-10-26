/** Runs after the mobile menu cover is gone so page reveals don't flash underneath. */
export function runWhenMobileMenuClear(run: () => () => void): () => void {
  let teardown: (() => void) | undefined;
  let observer: MutationObserver | null = null;

  const start = () => {
    teardown = run();
  };

  const blocked =
    document.documentElement.dataset.mobileMenu === "open" ||
    document.documentElement.dataset.mobileMenu === "closing";

  if (blocked) {
    observer = new MutationObserver(() => {
      const state = document.documentElement.dataset.mobileMenu;
      if (state !== "open" && state !== "closing") {
        observer?.disconnect();
        observer = null;
        start();
      }
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
