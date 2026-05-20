import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
    >
      <path fill="none" d="M5 12h14m-7-7l7 7l-7 7" />
    </svg>
  )
}
