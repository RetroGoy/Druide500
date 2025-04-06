"use client"

import { tv, VariantProps } from "tailwind-variants"
import { cn } from "@/lib/utils"

const node = tv({
  base: "rounded-lg p-2 border shadow-sm transition-all duration-150",
  variants: {
    type: {
      instrument: "bg-green-700 text-green-100",
      notation: "bg-blue-700 text-blue-100",
      record: "bg-red-700 text-red-100",
      infos: "bg-zinc-700 text-zinc-100",
    },
    view: {
      compact: "w-36 h-24",
      expand: "w-64 h-48",
      edit: "w-full h-64",
    },
    theme: {
      dark: "",
      light: "bg-opacity-90 text-black",
    },
    state: {
      default: "",
      hover: "ring-2 ring-yellow-400 scale-[1.01]",
    },
  },
  compoundVariants: [
    { theme: "light", type: "instrument", class: "bg-green-200" },
    { theme: "light", type: "record", class: "bg-red-200" },
  ],
  defaultVariants: {
    type: "instrument",
    view: "compact",
    theme: "dark",
    state: "default",
  },
})

type NodeProps = VariantProps<typeof node> & {
  title: string
}

export function Node({ title, type, view, theme, state }: NodeProps) {
  return (
    <div className={cn(node({ type, view, theme, state }))}>
      <div className="text-xs font-bold uppercase tracking-wide">{title}</div>
      <div className="mt-2 text-sm opacity-70">Contenu à venir…</div>
    </div>
  )
}
