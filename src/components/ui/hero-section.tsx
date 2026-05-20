import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  children: ReactNode
  background: string
  className?: string
  minHeight?: string
}

export function HeroSection({ children, background, className, minHeight = "min-h-[400px]" }: HeroSectionProps) {
  return (
    <div className="p-2">
      <div
        className={cn(
          "relative p-6 sm:px-12 rounded-4xl flex justify-center flex-col gap-8 bg-cover bg-center bg-no-repeat",
          minHeight,
          className
        )}
        style={{ background }}
      >
        {children}
      </div>
    </div>
  )
}
