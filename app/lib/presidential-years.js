/** Presidential election years on the 1932–2024 four-year cycle. */
export function getPresidentialYearsInRange(minYear, maxYear) {
  let min = Math.max(1932, Number(minYear));
  let max = Math.min(2024, Number(maxYear));
  if (max < min) [min, max] = [max, min];
  if ((min - 1932) % 4 !== 0) {
    min += 4 - ((min - 1932) % 4);
  }
  const years = [];
  for (let y = min; y <= max; y += 4) {
    years.push(y);
  }
  return years;
}
