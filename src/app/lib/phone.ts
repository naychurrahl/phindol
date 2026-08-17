export function waLink(number: string): string {
  return `https://wa.me/${number.replace(/[^0-9]/g, "")}`;
}
