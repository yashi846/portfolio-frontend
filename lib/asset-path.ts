/**
 * basePathを考慮したパスを返すヘルパー関数
 */
export function getAssetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === "production" ? "/portfolio-frontend" : "";
  return `${basePath}${path}`;
}
