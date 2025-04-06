'use client'

import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export function Header() {
  return (
    <header className="w-full px-4 py-3 border-b border-border flex items-center justify-between bg-background">
      <Link href="/" className="text-xl font-bold">DRUIDE 500</Link>
      <div className="flex items-center gap-2">
        <Link href="/community" className="text-sm hover:underline">Communauté</Link>
        <Link href="/user/me" className="text-sm hover:underline">Profil</Link>
        <ModeToggle />
      </div>
    </header>
  )
}
