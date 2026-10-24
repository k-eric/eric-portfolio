export const projectSlugs = [
  "watch-ric",
  "kericreatives",
  "in-for-christ",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];
