// app/page.tsx
import HomeClient from './home/home-client';

export const metadata = {
  title: 'Resource OS – Learning Made Real',
  description:
    'Resource OS is a modern learning platform for college and pre-college students. Get academic tools, skill-building resources, and join a thriving student community.',
  openGraph: {
    title: 'Resource OS – Learning Made Real',
    description:
      'Join a powerful platform for students. Study smarter, build skills, and connect with like-minded learners.',
    url: 'https://resourceos.example.com',
    siteName: 'Resource OS',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Resource OS Preview',
      },
    ],
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}