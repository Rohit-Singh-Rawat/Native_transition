"use client"

import NextLink, { type LinkProps } from "next/link"
import { type AnchorHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-primary",
        muted: "text-muted-foreground hover:text-foreground",
        ghost: "text-foreground hover:bg-muted/60 hover:text-foreground rounded-md",
        underline: "text-foreground underline-offset-4 hover:underline",
        nav: "relative text-foreground before:content-[''] before:absolute before:inset-0 before:rounded-md before:bg-primary/5 before:opacity-0 before:scale-50 before:transition-all hover:before:opacity-100 hover:before:scale-100",
      },
      size: {
        default: "px-3 py-1",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-4 py-2",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  VariantProps<typeof linkVariants>

function Link({ className, variant = "default", size = "default", ...props }: AppLinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(linkVariants({ variant, size, className }))}
    />
  )
}

export { Link, linkVariants }

