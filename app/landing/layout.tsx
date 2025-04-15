import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Caption.ma | Morocco's Premier AI Chatbot & Image Generator",
  description:
    "Experience Morocco's leading AI assistant powered by Grok 3, xAI, Flux, Deepseek 3, and Gemini 2.5. Natural language processing, image generation, and intelligent conversations - all for free, no credit card required.",
  keywords: [
    'AI chatbot Morocco',
    'Grok 3',
    'xAI',
    'Flux AI',
    'Deepseek 3',
    'Gemini 2.5',
    'image generation AI',
    'advanced AI assistant',
    'free AI chatbot',
    'Morocco AI',
    'artificial intelligence',
    'machine learning',
  ],
  robots: 'index, follow',
  openGraph: {
    title: "Caption.ma | Morocco's Premier AI Chatbot & Image Generator",
    description:
      "Experience Morocco's leading AI assistant powered by Grok 3, xAI, Flux, Deepseek 3, and Gemini 2.5. Natural language processing, image generation, and intelligent conversations.",
    url: 'https://caption.ma',
    siteName: 'Caption.ma',
    images: [
      {
        url: 'https://caption.ma/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Caption.ma - Morocco's Premier AI",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Caption.ma | Morocco's Premier AI Chatbot & Image Generator",
    description:
      "Experience Morocco's leading AI assistant powered by cutting-edge AI models. Natural language processing, image generation, and intelligent conversations.",
    images: ['https://caption.ma/twitter-image.jpg'],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-dvh">{children}</div>;
}
