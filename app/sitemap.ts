import type { MetadataRoute } from 'next';
import { cvPath, siteUrl } from './constants';

// /llms.txt and /cv.md are left out on purpose: they repeat the home page for
// agents and are served with noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}${cvPath}`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
