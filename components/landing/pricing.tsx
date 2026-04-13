import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For hobbyists getting started.',
    cta: 'Get started',
    href: '/signup',
    featured: false,
    features: [
      'Up to 25 rugs',
      '2 photos per entry',
      'Basic tagging',
      'CSV export',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'For serious collectors.',
    cta: 'Start free trial',
    href: '/signup',
    featured: true,
    features: [
      'Unlimited rugs',
      'Unlimited photos',
      'Smart tagging & search',
      'Value tracking',
      'PDF & CSV export',
      'Shareable collections',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For galleries and dealers.',
    cta: 'Contact us',
    href: 'mailto:hello@ruglog.app',
    featured: false,
    features: [
      'Everything in Pro',
      'Team access',
      'Custom branding',
      'API access',
      'Dedicated support',
      'SLA guarantee',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple pricing
          </h2>
          <p className="text-muted-foreground">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative rounded-2xl border p-8 space-y-6',
                tier.featured
                  ? 'border-primary ring-2 ring-primary bg-background shadow-lg'
                  : 'border-border bg-background'
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}

              <div className="space-y-1">
                <h3 className="font-semibold">{tier.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && (
                    <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.featured ? 'default' : 'outline'}
                className="w-full"
              >
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
