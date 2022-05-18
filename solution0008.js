const highAndLow = nums => {
  nums = nums.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}