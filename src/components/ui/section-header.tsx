import { Chip } from "./chip"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  chip: string
  heading: string
  description?: string
  className?: string
}

export function SectionHeader({ chip, heading, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="flex flex-col items-center justify-center mb-4">
        <Chip>{chip}</Chip>
        <h2 className="text-4xl font-bold leading-tight font-heading">{heading}</h2>
      </div>
      {description && (
        <p className="max-w-lg text-foreground font-light font-body">{description}</p>
      )}
    </div>
  )
}
