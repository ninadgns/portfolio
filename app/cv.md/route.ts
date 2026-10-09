import { cvMarkdown } from '../cvMarkdown';

export const dynamic = 'force-static';

export function GET() {
  return new Response(cvMarkdown(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      // For agents, not search results: the home page carries the same content.
      'X-Robots-Tag': 'noindex',
    },
  });
}
