export function convertToTime(ms: number) {
  const hours = Math.floor(ms / 60 / 60);
  const minutes = Math.floor((ms - hours * 60 * 60) / 60);
  const seconds = Math.floor(ms - hours * 60 * 60 - minutes * 60);
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }   s`;
}
