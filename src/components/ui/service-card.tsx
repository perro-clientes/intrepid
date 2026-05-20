import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  className?: string
  children?: ReactNode
}

export function ServiceCard({ title, description, className, children }: ServiceCardProps) {
  return (
    <div className={cn("p-6 bg-white rounded-4xl flex flex-col gap-2", className)}>
      <span className="text-xl font-regular leading-tight font-heading">{title}</span>
      <p className="text-foreground font-light font-body">{description}</p>
      {children}
    </div>
  )
}
