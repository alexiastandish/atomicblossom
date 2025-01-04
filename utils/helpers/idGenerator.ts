export function idGenerator(): string {
  return Math.floor(Math.random() * 1000001).toString();
}
