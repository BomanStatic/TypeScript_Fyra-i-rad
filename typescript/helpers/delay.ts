const delay = (ms: number): void => {
  const start = Date.now();
  while (Date.now() - start < ms) {}
};
export default delay;
