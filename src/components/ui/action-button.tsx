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
        "inline-flex items-center gap-3",
        className
      )}
    >
      <span className="flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-black font-poppins font-medium text-lg">
        {label}
      </span>
      <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-primary text-black">
        {icon}
      </span>
    </button>
  )
}
