import Link from "next/link"
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  label: string
  icon: ReactNode
  className?: string
  href?: string
}

export function ActionButton({ label, icon, className, href }: ActionButtonProps) {
  const content = (
    <>
      <span className="flex items-center justify-center gap-2.5 px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-md group-hover:bg-[#B3B716] transition-colors duration-300">
        {label}
      </span>
      <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-primary text-primary-foreground group-hover:bg-[#B3B716] overflow-hidden transition-colors duration-300">
        <span className="block group-hover:animate-arrow-shift">
          {icon}
        </span>
      </span>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-1 cursor-pointer font-heading",
          className
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      className={cn(
        "group inline-flex items-center gap-1 cursor-pointer font-heading",
        className
      )}
    >
      {content}
    </button>
  )
}
