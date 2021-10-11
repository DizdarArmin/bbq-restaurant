export function sortBy(key: string, list: Array<any>) {
  return [...list].sort((a, b) => a[key].localeCompare(b[key]));
}
