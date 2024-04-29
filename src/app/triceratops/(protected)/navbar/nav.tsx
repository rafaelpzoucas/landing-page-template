'use client'

import { ChevronDown, LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { cn } from '@/lib/utils'

type SubLinkType = {
  title: string
  route?: string
}

export type LinkType = {
  title: string
  icon: LucideIcon
  route?: string
  subLinks?: SubLinkType[]
  variant: 'default' | 'ghost'
}

interface NavProps {
  isCollapsed: boolean
  links: LinkType[]
}

function Collapsed({ link }: { link: LinkType }) {
  return (
    <HoverCard openDelay={0}>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <HoverCardTrigger asChild>
            <Button
              variant={link.variant}
              size="icon"
              className={cn(
                'h-9 w-9',
                link.variant === 'default' &&
                  'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
              )}
            >
              <link.icon className="h-4 w-4" />
              <span className="sr-only">{link.title}</span>
            </Button>
          </HoverCardTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {link.title}
        </TooltipContent>
      </Tooltip>
      {link.subLinks && link.subLinks.length > 0 && (
        <HoverCardContent side="right" className="flex flex-col p-1">
          <header className="p-2 border-b mb-1">
            <h1 className="font-bold">{link.title}</h1>
          </header>
          {link.subLinks.map((subLink, index2) => (
            <Link
              key={index2}
              href={subLink.route ?? '#'}
              className={cn(
                buttonVariants({ variant: link.variant, size: 'sm' }),
                link.variant === 'default' &&
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                'justify-start',
              )}
            >
              {subLink.title}
            </Link>
          ))}
        </HoverCardContent>
      )}
    </HoverCard>
  )
}

function NotCollapsed({ link }: { link: LinkType }) {
  if (link.subLinks && link.subLinks.length > 0) {
    return (
      <Collapsible>
        <CollapsibleTrigger
          className={cn(
            buttonVariants({ variant: link.variant, size: 'sm' }),
            'w-full justify-start min-w-[250px]',
            'last:[&[data-state=open]>svg]:rotate-180',
          )}
        >
          <link.icon className="h-4 w-4 mr-2" />
          {link.title}

          <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-5">
          <div className="flex flex-col border-l-2 pl-4">
            {link.subLinks.map((subLink, index2) => (
              <Link
                key={index2}
                href={subLink.route ?? '#'}
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  link.variant === 'default' &&
                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start',
                )}
              >
                {subLink.title}
              </Link>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  } else {
    return (
      <Link
        href={link.route ?? '#'}
        className={cn(
          buttonVariants({ variant: link.variant, size: 'sm' }),
          link.variant === 'default' &&
            'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
          'justify-start min-w-[250px]',
        )}
      >
        <link.icon className="mr-2 h-4 w-4" />
        {link.title}
      </Link>
    )
  }
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Collapsed key={index} link={link} />
          ) : (
            <NotCollapsed key={index} link={link} />
          ),
        )}
      </nav>
    </div>
  )
}
