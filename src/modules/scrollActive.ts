export const handleScrollActive = (
  box: HTMLElement | null,
  callback: () => void
) => {
  document.addEventListener("scroll", () => {
    const viewLine = window.innerHeight * 0.65;
    if (box) {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < viewLine) {
        callback();
      }
    }
  });
};
