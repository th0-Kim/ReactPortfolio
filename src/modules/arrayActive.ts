export const handleArrayActive = (
  items: HTMLElement | null,
  child: string,
  num: number
) => {
  if (items) {
    const skillArr = items.querySelectorAll(child);

    for (let i = 0; i < skillArr.length; i++) {
      setTimeout(() => {
        skillArr[i].classList.add("active");
      }, i * num);
    }
  }
};
