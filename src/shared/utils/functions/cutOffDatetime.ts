export function getRecentCutoff(time: number) {
  const dateNow = Date.now();
  const cutOff = new Date(dateNow - time * 1000);

  return cutOff;
}
