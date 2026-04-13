import {
  BookOpen,
  Camera,
  BarChart3,
  Tag,
  Share2,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: BookOpen,
    title: 'Collection Log',
    description:
      'Keep a detailed record of every rug in your collection with notes, dimensions, and provenance.',
  },
  {
    icon: Camera,
    title: 'Photo Library',
    description:
      'Attach multiple photos to each entry. Zoom in on details, before/after shots, and condition reports.',
  },
  {
    icon: BarChart3,
    title: 'Value Tracking',
    description:
      'Monitor estimated values over time. Know what your collection is worth at a glance.',
  },
  {
    icon: Tag,
    title: 'Smart Tagging',
    description:
      'Organize by origin, age, style, or any custom tags. Filter and search instantly across thousands of items.',
  },
  {
    icon: Share2,
    title: 'Share & Export',
    description:
      'Generate shareable links or export your catalog as PDF for insurance, sales, or appraisals.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description:
      'Your data is encrypted at rest and in transit. You control exactly what is public and what stays private.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need
          </h2>
          <p className="text-muted-foreground">
            Built for serious collectors and makers who want more than a spreadsheet.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={cn(
                'rounded-xl border border-border bg-background p-6 space-y-3',
                'transition-shadow hover:shadow-md'
              )}
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
