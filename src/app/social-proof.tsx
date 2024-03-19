import { Section } from '@/components/section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    avatar_url: 'https://github.com/shadcn.png',
    name: 'John Smith',
    testimonial:
      "I couldn't have asked for better legal representation. The team at XYZ Law Firm was professional, knowledgeable, and dedicated to my case. Thanks to them, I achieved a favorable outcome. Highly recommended!",
  },
  {
    avatar_url: 'https://github.com/shadcn.png',
    name: 'Emily Johnson',
    testimonial:
      "Working with XYZ Law Firm was a great experience. They listened to my concerns, provided clear guidance throughout the legal process, and ultimately helped me resolve my case efficiently. I'm grateful for their expertise and support.",
  },
  {
    avatar_url: 'https://github.com/shadcn.png',
    name: 'David Rodriguez',
    testimonial:
      "I was impressed by the professionalism and dedication of the team at XYZ Law Firm. They went above and beyond to ensure that my rights were protected and that I received fair treatment. I couldn't have asked for better representation.",
  },
]

export function SocialProof() {
  return (
    <Section className="flex flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-2xl md:text-4xl font-bold">
        Depoimentos de clientes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col gap-6 p-6">
            <p className="text-muted-foreground">{testimonial.testimonial}</p>

            <footer className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar_url} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>

              <strong>{testimonial.name}</strong>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  )
}
