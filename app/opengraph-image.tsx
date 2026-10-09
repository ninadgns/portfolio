import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from './constants';

// The link preview (LinkedIn, Slack, X, WhatsApp). Rendered once at build
// time in the site's own neobrutalist style. Geist is vendored in
// assets/fonts because next/font's copy is not readable from here.

export const alt = `${profile.name}, ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const ink = '#1a1a1a';
const paper = '#f5f0e8';
const blue = '#2563eb';
const yellow = '#facc15';
const muted = '#374151';

const chips = ['React', 'Python', 'PostgreSQL', 'LLM agents'];

export default async function Image() {
  const [black, medium, photo] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/Geist-Black.ttf')),
    readFile(join(process.cwd(), 'assets/fonts/Geist-Medium.ttf')),
    readFile(join(process.cwd(), 'public/profile.jpg')),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 56,
          padding: '0 72px',
          background: paper,
          border: `12px solid ${ink}`,
          fontFamily: 'Geist',
          color: ink,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={280}
          height={280}
          alt=""
          style={{
            border: `6px solid ${ink}`,
            boxShadow: `12px 12px 0 0 ${ink}`,
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>Md. Muhaiminul Islam</span>
            <span style={{ color: blue }}>Ninad</span>
          </div>
          <div style={{ display: 'flex', marginTop: 28 }}>
            <span
              style={{
                fontSize: 30,
                fontWeight: 900,
                padding: '8px 18px',
                background: yellow,
                border: `4px solid ${ink}`,
                boxShadow: `6px 6px 0 0 ${ink}`,
              }}
            >
              {profile.jobTitle} at {profile.employer}
            </span>
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 28, fontWeight: 500, color: muted, lineHeight: 1.3, textWrap: 'balance' }}>
            Full-stack features and LLM agents for AI legal drafting
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 36 }}>
            {chips.map((chip) => (
              <span
                key={chip}
                style={{ fontSize: 24, fontWeight: 500, padding: '6px 14px', border: `3px solid ${ink}`, background: '#ffffff', whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {chip}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 24, fontWeight: 500, color: muted }}>ninadgns.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: black, weight: 900, style: 'normal' },
        { name: 'Geist', data: medium, weight: 500, style: 'normal' },
      ],
    },
  );
}
