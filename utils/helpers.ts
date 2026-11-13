/**
 * Adds basePath prefix to asset URLs for GitHub Pages deployment
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${basePath}${path}`;
}
