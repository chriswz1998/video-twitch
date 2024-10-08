'use client'

import { usePathname } from 'next/navigation'
import { useSidebar } from '@/store/use-sidebar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { UserAvatar } from '@/components/user-avatar'
import { LiveBadge } from '@/components/live-badge'

interface UserItemProps {
  username: string
  imageUrl: string
  isLive?: boolean
}
export const UserItem = ({ username, isLive, imageUrl }: UserItemProps) => {
  const pathname = usePathname()
  const { collapsed } = useSidebar((state) => state)
  const href = `/${username}`
  const isActive = pathname === href
  return (
    <Button
      asChild
      variant={'ghost'}
      className={cn(
        'w-full h-12',
        collapsed ? 'justify-center' : 'justify-start',
        isActive && 'bg-accent'
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            'flex items-center w-full gap-x-4',
            collapsed && 'justify-center'
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
          {!collapsed && <p className={'truncate'}>{username}</p>}
          {!collapsed && <LiveBadge className={'ml-auto'} />}
        </div>
      </Link>
    </Button>
  )
}
