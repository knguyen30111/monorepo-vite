export const debounce = (
  func: (...args: unknown[]) => unknown,
  delay = 200
): ((...args: unknown[]) => unknown) => {
  let timeout = null;
  return (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
};
