export const handleMobileCheck = () => {
  let type = "pc";

  const checkDeviceType = () => {
    const windowWidth = window.innerWidth;
    type = windowWidth < 769 ? "mobile" : "pc";
  };

  checkDeviceType();
  window.addEventListener("resize", checkDeviceType);

  return {
    getType: () => type,
  };
};
