export function percentToStars(percent: number): number {
  if (Number.isInteger(percent)) {
    if (percent < 0) {
      throw new Error("Percent cannot be negative");
    }

    if (percent > 100) {
      throw new Error("Percent cannot be greater than 100");
    }

    return Math.floor(percent / 20);
  }
  return 0;
}
