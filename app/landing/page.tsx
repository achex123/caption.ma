'use client';
/* eslint-disable tailwindcss/no-contradicting-classname */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-black flex flex-col relative">
      {/* Main background gradients that span the entire page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep space backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#050505_0%,#000000_100%)]" />

        {/* Primary aurora effect at top */}
        <div className="absolute top-0 inset-x-0 h-[140vh] opacity-40 bg-[conic-gradient(at_70%_30%,rgba(255,138,76,0.3)_40deg,rgba(249,115,22,0.2)_60deg,rgba(233,76,161,0.3)_190deg,rgba(244,63,94,0.5)_270deg,rgba(255,138,76,0.3)_310deg)] blur-3xl" />

        {/* Secondary glow points */}
        <div className="absolute top-[15%] left-[10%] opacity-40 w-[30vw] h-[30vw] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.4)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute top-[40%] right-[5%] opacity-30 w-[25vw] h-[25vw] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.4)_0%,rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute top-[70%] left-[20%] opacity-30 w-[20vw] h-[20vw] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.4)_0%,rgba(0,0,0,0)_70%)] blur-2xl" />

        {/* Subtle star field effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black">
            {Array.from({ length: 100 }).map((_, i) => {
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              const size = Math.random() * 2 + 1;
              const opacity = Math.random() * 0.7 + 0.3;

              return (
                <div
                  key={`star-${i}-${top}-${left}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Nebula effects */}
        <div className="absolute top-1/4 -right-[10%] w-[90vw] h-[60vh] opacity-20 rounded-full blur-3xl bg-[conic-gradient(from_270deg_at_40%_60%,rgba(249,115,22,0.8)_0deg,rgba(244,63,94,0.8)_90deg,rgba(217,70,239,0.6)_180deg,rgba(249,115,22,0.4)_300deg)] mix-blend-screen" />
        <div className="absolute top-2/3 -left-[20%] w-[80vw] h-[50vh] opacity-15 rounded-full blur-3xl bg-[conic-gradient(from_90deg_at_60%_40%,rgba(249,115,22,0.6)_0deg,rgba(244,63,94,0.6)_120deg,rgba(233,76,161,0.5)_240deg,rgba(249,115,22,0.4)_330deg)] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <header className="w-full p-4 md:px-6 absolute top-0 left-0 z-20 backdrop-blur-sm bg-black/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-orange-400 flex items-center">
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: 'currentcolor', marginRight: '4px' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                />
              </svg>
              Caption.ma
            </div>
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full hidden sm:block">
              Morocco&apos;s Premier AI
            </span>
          </div>
          <nav className="flex items-center space-x-3 md:space-x-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              aria-label="Log in to your Caption.ma account"
            >
              Log in
            </Link>
            <Link href="/register">
              <Button
                variant="default"
                className="bg-orange-500 text-white hover:bg-orange-600 px-3 md:px-4 py-2"
                aria-label="Sign up for Caption.ma"
              >
                Sign up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Section-specific light effects */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.9)_100%)]" />
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[1400px] h-[60vh] opacity-30 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.4)_0%,rgba(0,0,0,0)_50%)] blur-2xl" />
          <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-b from-transparent to-black/70 backdrop-blur-sm" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 relative z-[2] px-4 md:px-6 max-w-5xl mx-auto">
          <span className="text-xs md:text-sm font-medium px-3 md:px-4 py-1 md:py-2 rounded-full bg-black/40 text-white/90 border border-white/10">
            No credit card required • Free to use
          </span>

          <div className="text-center">
            <h1 className="md:text-7xl text-5xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-white via-orange-300 to-pink-400 mb-4 tracking-tight">
              The full
              <span className="inline-block mx-3 bg-lime-400 text-black px-3 rounded-lg -rotate-1">
                AI
              </span>
              stack
            </h1>
            <h2 className="md:text-5xl text-3xl font-bold text-center text-white mb-4">
              Caption.ma
            </h2>
          </div>

          <p className="text-white/90 md:text-xl text-center max-w-2xl mx-auto font-light leading-relaxed">
            Morocco&apos;s premier AI platform for conversation and image
            generation. Build, deploy, and scale with ease.
          </p>

          <div className="flex items-center justify-center bg-zinc-900/50 backdrop-blur-md rounded-xl p-3 border border-white/5 mt-2 max-w-xl w-full">
            <p className="text-white/80 text-sm md:text-base text-center">
              Powered by{' '}
              <span className="font-semibold text-orange-400">Grok 3</span>,{' '}
              <span className="font-semibold text-pink-400">Flux</span>,{' '}
              <span className="font-semibold text-orange-400">xAI</span>,{' '}
              <span className="font-semibold text-pink-400">Deepseek 3</span>{' '}
              and{' '}
              <span className="font-semibold text-orange-400">Gemini 2.5</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-md mx-auto">
            <Link href="/register" className="w-full sm:w-auto flex-1">
              <Button className="w-full p-6 text-base font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg shadow-orange-500/20 rounded-md border-0">
                Get Started Free
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
            <div className="bg-white/5 border border-white/10 rounded-md py-2 px-3 flex items-center justify-center">
              <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
                Instant Setup
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-md py-2 px-3 flex items-center justify-center">
              <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
                Latest AI Models
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-md py-2 px-3 flex items-center justify-center">
              <span className="text-white/90 text-xs sm:text-sm font-medium text-center">
                No Credit Card
              </span>
            </div>
          </div>
        </div>

        {/* Abstract shapes at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 relative" id="testimonials">
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.95),rgba(0,0,0,0.8),rgba(0,0,0,0.95))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.1)_0%,rgba(0,0,0,0)_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(249,115,22,0.1)_0%,rgba(0,0,0,0)_35%)]" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-[2]">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-500/20 text-pink-300 rounded-full mb-4">
              USERS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 'testimonial-alex',
                quote:
                  'Caption.ma transformed my workflow with Grok 3 and Gemini 2.5.',
                author: 'Ahmed Tazi',
                role: 'Digital Marketing',
              },
              {
                id: 'testimonial-sarah',
                quote:
                  'The image generation creates stunning visuals in seconds that would take hours with traditional tools.',
                author: 'Leila Mansouri',
                role: 'Content Creator',
              },
              {
                id: 'testimonial-michael',
                quote:
                  'Access to multiple AI models in one interface gives me versatility I can&apos;t find anywhere else.',
                author: 'Karim Benjelloun',
                role: 'Researcher',
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-zinc-800/20 border-zinc-700/50 p-5 md:p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-zinc-300 italic mb-4 text-sm md:text-base">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-zinc-400 text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        id="get-started"
      >
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03),rgba(244,63,94,0.03),rgba(249,115,22,0.03))]" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[140%] h-40 opacity-20 bg-[linear-gradient(90deg,rgba(249,115,22,0),rgba(249,115,22,0.5),rgba(244,63,94,0.5),rgba(249,115,22,0))] blur-3xl" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-full opacity-20 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.4)_0%,rgba(0,0,0,0)_50%)] blur-2xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-[2]">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-500/30 to-pink-500/30 text-white rounded-full mb-4 md:mb-6">
              FREE ACCESS
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Try Caption.ma Today
            </h2>
            <p className="text-zinc-300 mb-6 md:mb-8 text-sm md:text-lg">
              Join thousands of users enhancing their creativity and
              productivity. No credit card required.
            </p>
            <Link
              href="/register"
              className="block w-full sm:w-auto sm:inline-block"
            >
              <Button className="w-full sm:w-auto px-8 py-5 text-base md:text-lg bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 rounded-md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-4 md:p-6 border-t border-white/10 relative">
        <div className="container mx-auto relative z-[2]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-orange-400 flex items-center">
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: 'currentcolor', marginRight: '4px' }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 1L16 15H0L8 1Z"
                  fill="currentColor"
                />
              </svg>
              Caption.ma
            </div>
            <p className="text-xs md:text-sm text-white/60">
              © {new Date().getFullYear()} caption.ma | Morocco&apos;s Premier
              AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
