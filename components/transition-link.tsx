"use client"
import { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { addTransitionType, startTransition } from "react"
import { Link, linkVariants } from "./ui/link"
import { VariantProps } from "class-variance-authority"

export function TransitionLink({ children, type, href, className, variant = "default", ...props }: { children: React.ReactNode, type: string, href: string, className?: string, variant?: VariantProps<typeof linkVariants>["variant"] } & LinkProps) {
  const router = useRouter()
  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    startTransition(() => {
      addTransitionType(type)
      router.push(href)
    })
  }

  return (
    <Link href={href} onClick={handleNavigate} variant={variant} className={className}>
      {children}
    </Link>
  )
}