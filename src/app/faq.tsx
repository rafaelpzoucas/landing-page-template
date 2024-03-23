import { layout } from '@/components/layout'
import { Section } from '@/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/data/faq'
import { cn } from '@/lib/utils'

export function Faq() {
  return (
    <Section
      id="articles"
      className="flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <h1
        className={cn(
          layout.fonts.highlight.className,
          'text-2xl md:text-4xl font-bold uppercase',
        )}
      >
        {faq.title}
      </h1>

      <Accordion type="single" collapsible className="max-w-3xl w-full">
        {faq.data.map((question, index) => (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger>{question.title}</AccordionTrigger>
            <AccordionContent>{question.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
