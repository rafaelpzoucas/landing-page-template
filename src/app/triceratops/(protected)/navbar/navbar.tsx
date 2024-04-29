'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { PanelLeftClose, SquarePen } from 'lucide-react'
import { useState } from 'react'
import { LinkType, Nav } from './nav'

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const baseURL = profile.admin_slug

  const navLinks: LinkType[] = [
    {
      title: 'Posts',
      icon: SquarePen,
      route: `${baseURL}/posts`,
      variant: 'ghost',
    },
  ]

  function handleCollapse() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <aside className="relative bg-background border-r">
      <ScrollArea className="h-screen">
        <TooltipProvider>
          <div className={cn('flex items-center p-2', !isCollapsed && 'pl-4')}>
            {!isCollapsed && <h1 className="text-lg font-bold">Menu</h1>}
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  onClick={handleCollapse}
                  className="ml-auto"
                >
                  <PanelLeftClose
                    className={cn('w-4 h-4', isCollapsed && 'rotate-180')}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                {isCollapsed ? (
                  <p>Maximizar menu lateral</p>
                ) : (
                  <p>Minimizar menu lateral</p>
                )}
              </TooltipContent>
            </Tooltip>
          </div>

          <Nav isCollapsed={isCollapsed} links={navLinks} />
        </TooltipProvider>
      </ScrollArea>
    </aside>
  )
}
