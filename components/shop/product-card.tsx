import Image from "next/image"
import { Link } from "@/components/ui/link"
import type { Product } from "@/lib/shop/types"
import { cn } from "@/lib/utils"

type ProductCardProps = {
  product: Product
  href?: string
  variant?: "default" | "compact"
  className?: string
}

export function ProductCard({ product, href, variant = "default", className }: ProductCardProps) {
  const isCompact = variant === "compact"

  const content = (
    <article className={cn("group flex h-full flex-col", className)}>
      <div className={cn(
        "relative overflow-hidden rounded-lg bg-[#F0F1F3] dark:bg-white corner-squircle supports-corner-shape:rounded-[10%]",
        isCompact ? "mb-1.5" : "mb-4"
      )}>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={isCompact ? 100 : 400}
          height={isCompact ? 100 : 400}
          className={cn(
            "w-full corner-squircle supports-corner-shape:rounded-[10%] rounded-lg object-cover transition-transform duration-200 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            isCompact ? "aspect-square" : "aspect-4/5"
          )}
        
        />
      </div>
      <div className={cn("flex flex-1 flex-col", isCompact ? "gap-0" : "gap-1.5")}>
        <p className={cn(
          "font-light uppercase tracking-wide text-foreground/50",
          isCompact ? "text-[8px]" : "text-xs"
        )}>
          {product.company}
        </p>
        <h2 className={cn("font-medium", isCompact ? "text-[10px]" : "text-sm")}>
          <span className="line-clamp-1">
            {product.name}
            
          </span>
        </h2>
      </div>
    </article>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-opacity hover:opacity-90"
        aria-label={`View ${product.name} by ${product.company}`}
      >
        {content}
      </Link>
    )
  }

  return content
}
