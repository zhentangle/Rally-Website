import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { FAQEntry } from '@/data/faq'

interface FAQAccordionProps {
  items: FAQEntry[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion.Root type="multiple" className="space-y-2">
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="border border-border rounded-lg overflow-hidden bg-white"
        >
          <Accordion.Trigger className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-foreground hover:bg-muted/50 transition-colors group cursor-pointer">
            <span>{item.question}</span>
            <ChevronDown
              size={16}
              className="text-muted-foreground shrink-0 ml-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
