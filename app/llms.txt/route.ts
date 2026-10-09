import { llmsTxt } from '../cvMarkdown';

export const dynamic = 'force-static';

export function GET() {
  return new Response(llmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // For agents, not search results: the home page carries the same content.
      'X-Robots-Tag': 'noindex',
    },
  });
}
