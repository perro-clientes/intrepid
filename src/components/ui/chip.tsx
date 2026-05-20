import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ChipProps {
  children: ReactNode
  className?: string
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span className={cn("bg-primary text-primary-foreground py-2 px-8 rounded-full text-[12px]", className)}>
      {children}
    </span>
  )
}
