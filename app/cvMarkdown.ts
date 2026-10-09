import {
  achievements,
  aiAndOther,
  backendAndData,
  cvPath,
  experience,
  frontend,
  profile,
  projects,
  schools,
  siteUrl,
} from './constants';

// Plain-text renderings of the page for agents that would rather not parse
// HTML. Built from the same constants as the page, so they cannot drift.

const link = (label: string, url?: string) => (url ? `[${label}](${url})` : '');

export function cvMarkdown(): string {
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(`# ${profile.name}`, '', profile.summary, '');
  push(
    `- Email: ${profile.email}`,
    `- Phone: ${profile.phone}`,
    `- Location: ${profile.location}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    `- Website: ${siteUrl}`,
    `- CV (PDF): ${siteUrl}${cvPath}`,
    '',
  );

  push('## Work Experience', '');
  for (const job of experience) {
    push(`### ${job.role}, ${job.company}`, '', `${job.location} | ${job.duration}`, '');
    push(...job.details.map((d) => `- ${d}`), '');
  }

  push('## Education', '');
  for (const s of schools) {
    push(`- **${s.name}**, ${s.place}: ${s.programme}; ${s.grade} (${s.dates})`);
  }
  push('');

  push('## Technical Skills', '');
  push(
    `- Frontend: ${frontend.join(', ')}`,
    `- Backend & Data: ${backendAndData.join(', ')}`,
    `- AI & Other: ${aiAndOther.join(', ')}`,
    '',
  );

  push('## Projects', '');
  for (const p of projects) {
    push(`### ${p.title}`, '');
    const meta = [p.tech, p.projectType, p.groupSize].filter(Boolean).join(' | ');
    push(meta, '');
    const links = [
      link('GitHub', p.github),
      link('Backend on GitHub', p.githubBackend),
      link('Frontend on GitHub', p.githubFrontend),
      link(p.liveLabel ?? 'Live', p.liveUrl),
    ].filter(Boolean);
    if (links.length) push(`Links: ${links.join(', ')}`, '');
    push(...p.details.map((d) => `- ${d}`), '');
  }

  push('## Achievements', '');
  for (const a of achievements) {
    const links = [link('Event', a.link), link('GitHub', a.github)].filter(Boolean);
    push(`### ${a.title}`, '');
    if (links.length) push(`Links: ${links.join(', ')}`, '');
    push(...a.details.map((d) => `- ${d}`), '');
  }

  return lines.join('\n');
}

// https://llmstxt.org: a short index pointing agents at the full content.
export function llmsTxt(): string {
  return [
    `# ${profile.name}`,
    '',
    `> ${profile.summary}`,
    '',
    `Personal portfolio of ${profile.name} (also known as ${profile.alternateNames.slice(1).join(', ')}): work experience, projects, achievements, and contact details. Based in ${profile.location}.`,
    '',
    '## CV',
    '',
    `- [Full CV in Markdown](${siteUrl}/cv.md): experience, education, skills, projects, and achievements as plain text`,
    `- [CV (PDF)](${siteUrl}${cvPath}): the two-page CV the site links to`,
    '',
    '## Profiles',
    '',
    `- [GitHub](${profile.github}): code for most of the projects listed in the CV`,
    `- [LinkedIn](${profile.linkedin})`,
    '',
    '## Contact',
    '',
    `- Email: ${profile.email}`,
    '',
  ].join('\n');
}
