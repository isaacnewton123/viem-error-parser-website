import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'viem-error-parser — Decode Viem & Wagmi Errors',
  description:
    'Decode Viem and Wagmi errors into clean, human-readable messages — including custom revert reasons from your own ABIs.',
};

const features = [
  {
    icon: '🔗',
    title: 'Cause Chain Traversal',
    description:
      'Walks the deeply-nested error.cause chain and errors[] siblings. Cycle-safe via WeakSet, capped at depth 16.',
  },
  {
    icon: '🔍',
    title: 'Revert Data Extraction',
    description:
      'Extracts revert data from data, rawData, returnData, output, or hex embedded in error messages.',
  },
  {
    icon: '📦',
    title: 'Custom ABI Decoding',
    description:
      'Register your own contract ABIs. Get named arguments decoded via viem decodeErrorResult.',
  },
  {
    icon: '🧠',
    title: 'Smart Classifier',
    description:
      'Classifies non-revert problems: user rejection, gas, network, RPC, EIP-1193 codes, and more.',
  },
  {
    icon: '⚛️',
    title: 'React Hook',
    description:
      'useErrorParser hook memoises the decoder — stable across renders, zero unnecessary re-renders.',
  },
  {
    icon: '🌲',
    title: 'Tree-Shakable',
    description:
      'Ships ESM + CJS + types with sideEffects: false. Import only what you need — starts at ~6 KB gzipped.',
  },
];

const codeExample = `import { forViem } from 'viem-error-parser';

const decoder = forViem(); // ERC20/721/1155, OZ, ERC-2612 built-in

try {
  await walletClient.writeContract({ ... });
} catch (error) {
  const result = decoder.decode(error);
  console.error(result.message);
  // "ERC20InsufficientBalance(sender=0x..., balance=5n, needed=100n)"
  // or "The transaction was rejected by the user."
}`;

const packages = [
  { label: 'pnpm', cmd: 'pnpm add viem-error-parser viem' },
  { label: 'npm', cmd: 'npm install viem-error-parser viem' },
  { label: 'yarn', cmd: 'yarn add viem-error-parser viem' },
  { label: 'bun', cmd: 'bun add viem-error-parser viem' },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--fd-primary) / 0.3), transparent)',
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.svg"
              alt="viem-error-parser"
              width={100}
              height={100}
              className="drop-shadow-lg"
            />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground">
            <span className="size-2 rounded-full bg-green-500" />
            MIT License · TypeScript · Tree-Shakable
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-fd-foreground">Decode</span>{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, hsl(var(--fd-primary)), hsl(220 80% 65%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'blue',
              }}
            >
              Viem & Wagmi
            </span>
            <br />
            <span className="text-fd-foreground">errors effortlessly</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-fd-muted-foreground">
            Turn deeply-nested Viem and Wagmi error chains into clean, human-readable
            messages — including custom <code className="rounded bg-fd-muted px-1 py-0.5 text-sm font-mono text-fd-foreground">revert</code> reasons from your own ABIs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Get Started →
            </Link>
            <Link
              href="/docs/api-reference"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
            >
              API Reference
            </Link>
            <a
              href="https://github.com/isaacnewton123/viem-error-parser"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
            >
              <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { src: 'https://github.com/isaacnewton123/viem-error-parser/actions/workflows/ci.yml/badge.svg', href: 'https://github.com/isaacnewton123/viem-error-parser/actions/workflows/ci.yml', alt: 'CI' },
              { src: 'https://img.shields.io/npm/v/viem-error-parser.svg', href: 'https://www.npmjs.com/package/viem-error-parser', alt: 'npm version' },
              { src: 'https://img.shields.io/bundlephobia/minzip/viem-error-parser?label=gzip', href: 'https://bundlephobia.com/package/viem-error-parser', alt: 'Bundle size' },
              { src: 'https://img.shields.io/badge/License-MIT-yellow.svg', href: 'https://github.com/isaacnewton123/viem-error-parser/blob/main/LICENSE', alt: 'MIT License' },
            ].map(({ src, href, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick install */}
      <section className="border-b border-fd-border bg-fd-card/40">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <p className="mb-4 text-center text-sm font-medium text-fd-muted-foreground uppercase tracking-widest">
            Install
          </p>
          <div className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card shadow-sm">
            {packages.map(({ label, cmd }, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-5 py-3 font-mono text-sm ${i !== packages.length - 1 ? 'border-b border-fd-border' : ''}`}
              >
                <span className="w-10 shrink-0 text-xs font-semibold text-fd-muted-foreground">
                  {label}
                </span>
                <span className="text-fd-foreground">{cmd}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code example */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="mb-2 text-center text-sm font-medium text-fd-muted-foreground uppercase tracking-widest">
            30-second example
          </p>
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-fd-foreground">
            From error to message in one line
          </h2>
          <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-lg">
            <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-red-500/70" />
                <span className="size-3 rounded-full bg-yellow-500/70" />
                <span className="size-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-2 text-xs text-fd-muted-foreground font-mono">error-handler.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
              <code className="text-fd-foreground">{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="mb-2 text-center text-sm font-medium text-fd-muted-foreground uppercase tracking-widest">
            Features
          </p>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-fd-foreground">
            Everything you need, nothing you don&apos;t
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, description }) => (
              <div
                key={title}
                className="group rounded-xl border border-fd-border bg-fd-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{icon}</div>
                <h3 className="mb-2 text-base font-semibold text-fd-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs links */}
      <section className="border-b border-fd-border bg-fd-card/40">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="mb-2 text-center text-sm font-medium text-fd-muted-foreground uppercase tracking-widest">
            Documentation
          </p>
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-fd-foreground">
            Start reading
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Installation', description: 'Install and peer-dependency notes.', href: '/docs/installation' },
              { title: 'Quick Start', description: 'Viem / Wagmi / React in 30 seconds each.', href: '/docs/quick-start' },
              { title: 'Custom ABIs', description: 'Decode revert MyError(...) from your contracts.', href: '/docs/custom-abis' },
              { title: 'Result Shape', description: 'ParseResult discriminated union and type guards.', href: '/docs/result-shape' },
              { title: 'Classifier', description: 'Non-revert errors, full rule table, decoder pipeline.', href: '/docs/classifier' },
              { title: 'Advanced Usage', description: 'AbiRegistry and ErrorDecoder by hand.', href: '/docs/advanced-usage' },
              { title: 'TypeScript', description: 'Branded types and the zero-runtime ./types entry.', href: '/docs/typescript' },
              { title: 'API Reference', description: 'Every public export, fully documented.', href: '/docs/api-reference' },
            ].map(({ title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 shadow-sm transition-all hover:border-fd-primary/50 hover:shadow-md"
              >
                <div className="flex-1">
                  <div className="mb-1 font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
                    {title}
                  </div>
                  <div className="text-sm text-fd-muted-foreground">{description}</div>
                </div>
                <span className="mt-0.5 text-fd-muted-foreground group-hover:text-fd-primary transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-fd-foreground">
            Ready to stop fighting error chains?
          </h2>
          <p className="mb-8 text-fd-muted-foreground">
            Add <code className="rounded bg-fd-muted px-1.5 py-0.5 text-sm font-mono text-fd-foreground">viem-error-parser</code> and get human-readable errors in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Read the docs →
            </Link>
            <a
              href="https://www.npmjs.com/package/viem-error-parser"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-muted"
            >
              View on npm
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
