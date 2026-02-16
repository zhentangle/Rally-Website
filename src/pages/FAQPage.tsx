import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQ_DATA, FAQ_CATEGORY_LABELS, type FAQCategory } from '@/data/faq'
import FAQAccordion from '@/components/FAQAccordion'

const ALL_CATEGORIES = Object.keys(FAQ_CATEGORY_LABELS) as FAQCategory[]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'all'>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let items = FAQ_DATA

    if (activeCategory !== 'all') {
      items = items.filter((item) => item.category === activeCategory)
    }

    if (search.trim()) {
      const lower = search.toLowerCase()
      items = items.filter(
        (item) =>
          item.question.toLowerCase().includes(lower) ||
          item.answer.toLowerCase().includes(lower)
      )
    }

    return items
  }, [activeCategory, search])

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">
        Find answers to common questions about Rally.
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer',
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          )}
        >
          All
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer',
              activeCategory === cat
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            )}
          >
            {FAQ_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <FAQAccordion items={filtered} />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p className="mb-2">No results found.</p>
          <p className="text-sm">
            Try a different search term or{' '}
            <a href="mailto:support@rally.ink" className="text-accent hover:underline">
              contact support
            </a>
            .
          </p>
        </div>
      )}
    </div>
  )
}
