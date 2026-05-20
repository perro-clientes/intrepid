import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  label: string
  icon: ReactNode
  className?: string
}

export function ActionButton({ label, icon, className }: ActionButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1 cursor-pointer font-heading",
        className
      )}
    >
      <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md">
        {label}
      </span>
      <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground">
        {icon}
      </span>
    </button>
  )
}
