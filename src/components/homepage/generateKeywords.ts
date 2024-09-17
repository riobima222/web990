export function generateKeywords(title: string): string[] {
  const words = title.toLowerCase().split(/\s+/);
  const keywords = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      keywords.add(words.slice(i, j + 1).join(" "));
    }
  }

  return Array.from(keywords);
}
