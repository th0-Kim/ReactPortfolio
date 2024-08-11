export const handleScrollActive = (
  box: HTMLElement | null,
  callback: () => void
) => {
  const onScroll = () => {
    const viewLine = window.innerHeight * 0.8;
    if (box) {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < viewLine) {
        callback();
      }
    }
  };

  document.addEventListener("scroll", onScroll);
};
