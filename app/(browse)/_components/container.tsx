'use client'

import { ReactNode, useEffect } from 'react'
import { useSidebar } from '@/store/use-sidebar'
import { cn } from '@/lib/utils'
import { useMediaQuery } from 'usehooks-ts'

export const Container = ({ children }: { children: ReactNode }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state)
  const matches = useMediaQuery('(max-width: 1024px)')

  useEffect(() => {
    if (matches) {
      onCollapse()
    } else {
      onExpand()
    }
  }, [matches, onCollapse, onExpand])

  return (
    <div
      className={cn(
        'flex-1 bg-red-200',
        collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60'
      )}
    >
      {children}
    </div>
  )
}
