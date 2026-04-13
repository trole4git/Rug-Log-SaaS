import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Now in early access
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Track every rug,{' '}
            <span className="text-primary">every time</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The all-in-one platform for rug makers and collectors to log, catalog, and
            manage their collections with ease.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/signup">Start for free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">See how it works</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            No credit card required &middot; Free plan available
          </p>
        </div>

        {/* Graphic */}
        <div className="relative flex items-center justify-center">
          <div className="h-80 w-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-border flex items-center justify-center md:h-96">
            <div className="grid grid-cols-3 gap-3 p-8 opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 w-16 rounded-lg bg-primary/30"
                  style={{ opacity: 0.4 + (i % 3) * 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
