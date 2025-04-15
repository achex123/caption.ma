'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-dvh bg-black flex flex-col relative">
      {/* Main background gradients that span the entire page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay - slightly increased spread */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,138,76,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(233,76,161,0.15)_0%,rgba(0,0,0,0)_80%)]" />

        {/* Enhanced mesh at top - slightly increased opacity */}
        <div className="absolute top-0 inset-x-0 h-[800px] opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,76,0.6)_0%,rgba(0,0,0,0)_60%)]" />

        {/* Mesh gradient in middle - slightly increased opacity and size */}
        <div className="absolute top-1/3 -right-1/3 size-[900px] opacity-25 rounded-full blur-3xl bg-gradient-to-br from-orange-500 to-pink-500" />
        <div className="absolute top-2/3 -left-1/3 size-[700px] opacity-25 rounded-full blur-3xl bg-gradient-to-tr from-pink-500 to-orange-400" />
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
        {/* Removed section-specific overlay that was causing contrast issues */}

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

      {/* Features Section */}
      <section className="py-16 md:py-20 relative" id="features">
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,138,76,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-[2]">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-300 rounded-full mb-4">
              FEATURES
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              What Makes Caption.ma Special
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 'feature-conversations',
                title: 'Intelligent Conversations',
                description:
                  'Natural language understanding with advanced contextual awareness',
                icon: '💬',
              },
              {
                id: 'feature-grok',
                title: 'Advanced AI Models',
                description:
                  'Access to Grok 3 and xAI for sophisticated reasoning and problem-solving',
                icon: '⚡',
              },
              {
                id: 'feature-image-gen',
                title: 'AI Image Generation',
                description:
                  'Create stunning high-resolution images from text descriptions',
                icon: '🖼️',
              },
            ].map((feature) => (
              <Card
                key={feature.id}
                className="bg-zinc-800/30 border-zinc-700/50 p-6 md:p-8 backdrop-blur-sm hover:bg-zinc-800/50 transition-all group"
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Model Capabilities Section */}
      <section className="py-16 md:py-20 relative overflow-hidden" id="models">
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,76,161,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-[2]">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-500/20 text-pink-300 rounded-full mb-4">
              AI MODELS
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
              Powered by Leading AI Technology
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
              Experience the combined power of today's most sophisticated AI
              models in one seamless interface
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              {
                id: 'capability-grok',
                title: 'Grok 3',
                description:
                  'Cutting-edge reasoning with contextual understanding',
              },
              {
                id: 'capability-xai',
                title: 'xAI',
                description:
                  "Advanced knowledge processing from Elon Musk's AI company",
              },
              {
                id: 'capability-deepseek',
                title: 'Deepseek 3',
                description:
                  'Enhanced natural language processing and comprehension',
              },
              {
                id: 'capability-gemini',
                title: 'Gemini 2.5',
                description:
                  "Google's multimodal AI for text, code, and image understanding",
              },
              {
                id: 'capability-multilingual',
                title: 'Multilingual',
                description:
                  'Communicate in multiple languages including Arabic and French',
              },
              {
                id: 'capability-learning',
                title: 'Continuous Learning',
                description:
                  'Self-improving system that gets better with every interaction',
              },
            ].map((capability) => (
              <div
                key={capability.id}
                className="bg-zinc-800/20 border border-zinc-700/50 rounded-xl p-4 md:p-6 backdrop-blur-sm"
              >
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        id="use-cases"
      >
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,138,76,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-[2]">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-300 rounded-full mb-4">
              APPLICATIONS
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
              How You Can Use Caption.ma
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
              From everyday tasks to specialized work, our AI adapts to your
              needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            {[
              {
                id: 'use-content',
                title: 'Content Creation',
                description:
                  'Generate articles, social media posts, and creative writing',
              },
              {
                id: 'use-research',
                title: 'Research Assistant',
                description: 'Find information and summarize complex topics',
              },
              {
                id: 'use-images',
                title: 'Visual Design',
                description:
                  'Create custom images for presentations and marketing',
              },
              {
                id: 'use-learning',
                title: 'Learning Tool',
                description:
                  'Explain concepts and help with educational content',
              },
              {
                id: 'use-productivity',
                title: 'Productivity Boost',
                description:
                  'Automate tasks and organize information efficiently',
              },
              {
                id: 'use-brainstorming',
                title: 'Brainstorming Partner',
                description: 'Generate ideas and find creative solutions',
              },
            ].map((useCase) => (
              <div
                key={useCase.id}
                className="bg-zinc-800/10 border border-zinc-700/30 rounded-xl p-4 backdrop-blur-sm hover:bg-zinc-800/30 transition-all"
              >
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 relative" id="testimonials">
        {/* Section-specific overlay */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,76,161,0.05)_0%,rgba(0,0,0,0)_70%)]" />
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
                      "{testimonial.quote}"
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
        <div className="absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,138,76,0.1)_0%,rgba(0,0,0,0)_70%)]" />
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
